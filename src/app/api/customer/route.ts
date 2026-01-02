import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import * as sql from "mssql";

export async function POST(req: Request) {
  const data = await req.json();
  const pool = await getDB();
  const transaction = new sql.Transaction(pool);

  try {
    await transaction.begin(sql.ISOLATION_LEVEL.SERIALIZABLE);
    console.log("Transaction started");

    /* ======================
       CUSTOMER PREPARE
    ====================== */
    const type = data.type || "person";
    const customerType = type === "company" ? 1 : 0;
    const customerHaghighi = type === "person" ? 1 : 0;

    const customerName = type === "person" ? data.fullName : data.companyName;
    const customerFamily = data.familyName || null;
    const customerFather = data.fatherName || null;
    const customerPhone = data.phone || "";
    const customerAddress = data.address || null;
    const customerNationalId = data.nationalId || null;
    const customerEconomicCode = data.economicCode || null;
    const customerCity = data.city || null;
    const customerProvince = data.province || null;

    if (type === "person" && (!customerName || !customerFamily || !customerNationalId)) {
      throw new Error("نام، نام خانوادگی و کد ملی الزامی است");
    }

    if (type === "company" && !customerName) {
      throw new Error("نام شرکت الزامی است");
    }

    if (!customerPhone) {
      throw new Error("شماره تماس الزامی است");
    }

    /* ======================
       FIND / INSERT CUSTOMER
    ====================== */
    let customerPuid: number | null = null;

    if (customerNationalId) {
      const checkReq = new sql.Request(transaction);
      const existing = await checkReq
        .input("meli", sql.NVarChar(50), customerNationalId)
        .query(`SELECT CustomerPuid FROM Customer WHERE CustomerMeli = @meli`);

      if (existing.recordset.length > 0) {
        customerPuid = existing.recordset[0].CustomerPuid;
      }
    }

    if (!customerPuid) {
      const insertReq = new sql.Request(transaction);
      const result = await insertReq
        .input("CustomerType", sql.Bit, customerType)
        .input("CustomerName", sql.NVarChar(250), customerName)
        .input("CustomerFamily", sql.NVarChar(250), customerFamily)
        .input("CustomerDad", sql.NVarChar(250), customerFather)
        .input("CustomerMeli", sql.NVarChar(50), customerNationalId)
        .input("CustomerNumber", sql.NVarChar(50), customerPhone)
        .input("CustomerAdres", sql.NVarChar(sql.MAX), customerAddress)
        .input("CustomerCodEghtesadi", sql.NVarChar(200), customerEconomicCode)
        .input("CustomerCity", sql.NVarChar(50), customerCity)
        .input("CustomerPrivonec", sql.NVarChar(50), customerProvince)
        .input("CustomerHaghighi", sql.Bit, customerHaghighi)
        .query(`
          INSERT INTO Customer
          (CustomerType, CustomerName, CustomerFamily, CustomerDad, CustomerMeli,
           CustomerNumber, CustomerAdres, CustomerCodEghtesadi,
           CustomerCity, CustomerPrivonec, CustomerHaghighi, CustomerEdDate)
          OUTPUT INSERTED.CustomerPuid
          VALUES
          (@CustomerType, @CustomerName, @CustomerFamily, @CustomerDad, @CustomerMeli,
           @CustomerNumber, @CustomerAdres, @CustomerCodEghtesadi,
           @CustomerCity, @CustomerPrivonec, @CustomerHaghighi, GETDATE())
        `);

      customerPuid = result.recordset[0].CustomerPuid;
    }

    if (!customerPuid) {
      throw new Error("خطا در ثبت مشتری");
    }

    /* ======================
       INSERT SELL HEADER
    ====================== */
    const numberReq = new sql.Request(transaction);
    const numberResult = await numberReq.query(`
      SELECT ISNULL(MAX(ReqHeaderNumber), 0) + 1 AS NewNumber
      FROM RequestSellHeader WITH (UPDLOCK, HOLDLOCK)
    `);

    const factorNumber = numberResult.recordset[0].NewNumber;

    const headerReq = new sql.Request(transaction);
    const headerResult = await headerReq
      .input("ReqHeaderNumber", sql.Int, factorNumber)
      .input("ReqHeaderOffType", sql.Bit, 0)
      .input("ReqHeaderOffValue", sql.Decimal(18, 0), 0)
      .input("ReqSellHeaderKalaExtra", sql.Decimal(18, 0), 0)
      .input("ReqHeaderCount", sql.Int, data.items.length)
      .input("ReqHeaderUser", sql.Int, data.userPuid)
      .input("ReqHeaderSellerPuid", sql.Int, data.sellerPuid || 1)
      .input("ReqHeaderPaymentPuid", sql.Int, 1)
      .input("ReqHeaderAllPrice", sql.Decimal(18, 0), data.totalPrice || 0)
      .input("ReqHeaderEnable", sql.Bit, 1)
      .input("ReqHeaderType", sql.Bit, 1)
      .input("ReqHeaderCustomerPuid", sql.Int, customerPuid)
      .input("Standard", sql.Bit, 0)
      .input("Baskol", sql.Bit, 0)
      .input("SaveOperation", sql.Bit, 0)
      .input("ReciveAnbar", sql.Bit, 0)
      .input("AcseptComplete", sql.Bit, 0)
      .input("BalanceType", sql.Int, 0)
      .input("ReqHeaderDescription", sql.NVarChar(sql.MAX), "خرید از سایت")
      .input("FinishSell", sql.Bit, 0)
      .input("ReqHeaderMande", sql.Decimal(18, 0), data.totalPrice || 0)
      .input("ReqHeaderTypeCustomer", sql.Bit, 1)
      .input("ReqHeaderPersonelPuid", sql.Int, data.userPuid)
      .query(`
        INSERT INTO RequestSellHeader
        (ReqHeaderNumber, ReqHeaderOffType, ReqHeaderOffValue, ReqSellHeaderKalaExtra,
         ReqHeaderCount, ReqHeaderUser, ReqHeaderSellerPuid,
         ReqHeaderPaymentPuid, ReqHeaderAllPrice, ReqHeaderDatetime,
         ReqHeaderEnable, ReqHeaderType, ReqHeaderCustomerPuid,
         Standard, Baskol, SaveOperation, ReciveAnbar, AcseptComplete,
         BalanceType, ReqHeaderDescription, FinishSell,
         ReqHeaderMande, ReqHeaderTypeCustomer, ReqHeaderPersonelPuid)
        OUTPUT INSERTED.ReqHeaderPuid
        VALUES
        (@ReqHeaderNumber, @ReqHeaderOffType, @ReqHeaderOffValue, @ReqSellHeaderKalaExtra,
         @ReqHeaderCount, @ReqHeaderUser, @ReqHeaderSellerPuid,
         @ReqHeaderPaymentPuid, @ReqHeaderAllPrice, GETDATE(),
         @ReqHeaderEnable, @ReqHeaderType, @ReqHeaderCustomerPuid,
         @Standard, @Baskol, @SaveOperation, @ReciveAnbar, @AcseptComplete,
         @BalanceType, @ReqHeaderDescription, @FinishSell,
         @ReqHeaderMande, @ReqHeaderTypeCustomer, @ReqHeaderPersonelPuid)
      `);

    const headerPuid = headerResult.recordset[0].ReqHeaderPuid;

    /* ======================
       INSERT SELL MAIN ITEMS
    ====================== */
    if (!Array.isArray(data.items) || data.items.length === 0) {
      throw new Error("سبد خرید خالی است");
    }

    for (const item of data.items) {
      if (!item.kalaPuid) {
        throw new Error("کد کالا نامعتبر است");
      }

      const qty = Number(item.qty);
      if (!qty || qty <= 0) {
        throw new Error("تعداد کالا نامعتبر است");
      }

      const itemReq = new sql.Request(transaction);

      await itemReq
        .input("ReqSellMainHeaderPuid", sql.Int, headerPuid)
        .input("ReqSellMainPuidKala", sql.Int, item.kalaPuid)
        .input("ReqSellMainVahedPuid", sql.Int, item.vahedPuid || 1)
        .input("ReqSellMainKalaCountAccept", sql.Decimal(18, 0), qty)
        .input("ReqSellMainKalaCountSell", sql.Decimal(18, 0), qty)
        .input("ReqSellMainKalaPrice", sql.Decimal(18, 0), item.price || 0)
        .input("ReqSellMainKalaOffType", sql.Bit, item.offType || 0)
        .input("ReqSellMainKalaOff", sql.Decimal(18, 0), item.offValue || 0)
        .input("ReqSellUserId", sql.Int, data.userPuid)
        .input("ReqSellBaskol", sql.Bit, 0)
        .input("ReqSellBaskolMande", sql.Decimal(18, 0), 0)
        .input("ReqSellMainMarjoeCount", sql.Decimal(18, 0), 0)
        .input("ReqSellMainMarjoeEnable", sql.Bit, 0)
        .input("ReqSellMainMarjoeDatetime", sql.DateTime, new Date())
        .input("ReqSellMainKalaCount", sql.Decimal(18, 0), qty)
        .input("ReqSellBaskolValue", sql.Decimal(18, 0), 0)
        .input("ReqSellRefrens", sql.NVarChar(50), item.ref || null)
        .input("ReqSellMainTax", sql.Decimal(18, 0), item.tax || 0)
        .input("ReqSellMainAnbar", sql.Int, data.anbarPuid || 1)
        .input("ReqSellDatetime", sql.DateTime, new Date())
        .query(`
          INSERT INTO RequestSellMain
          (ReqSellMainHeaderPuid, ReqSellMainPuidKala, ReqSellMainVahedPuid,
           ReqSellMainKalaCountAccept, ReqSellMainKalaCountSell,
           ReqSellMainKalaPrice, ReqSellMainKalaOffType, ReqSellMainKalaOff,
           ReqSellUserId, ReqSellBaskol, ReqSellBaskolMande,
           ReqSellMainMarjoeCount, ReqSellMainMarjoeEnable,
           ReqSellMainMarjoeDatetime, ReqSellMainKalaCount,
           ReqSellBaskolValue, ReqSellRefrens, ReqSellMainTax,
           ReqSellMainAnbar, ReqSellDatetime)
          VALUES
          (@ReqSellMainHeaderPuid, @ReqSellMainPuidKala, @ReqSellMainVahedPuid,
           @ReqSellMainKalaCountAccept, @ReqSellMainKalaCountSell,
           @ReqSellMainKalaPrice, @ReqSellMainKalaOffType, @ReqSellMainKalaOff,
           @ReqSellUserId, @ReqSellBaskol, @ReqSellBaskolMande,
           @ReqSellMainMarjoeCount, @ReqSellMainMarjoeEnable,
           @ReqSellMainMarjoeDatetime, @ReqSellMainKalaCount,
           @ReqSellBaskolValue, @ReqSellRefrens, @ReqSellMainTax,
           @ReqSellMainAnbar, @ReqSellDatetime)
        `);
    }

    await transaction.commit();
    console.log("Transaction committed");

    return NextResponse.json({
      success: true,
      message: "سفارش با موفقیت ثبت شد",
      customerPuid,
      factorNumber,
      headerPuid
    });

  } catch (error: any) {
    console.error("API ERROR:", error);
    try { await transaction.rollback(); } catch {}
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
