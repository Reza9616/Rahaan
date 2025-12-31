import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import * as sql from "mssql";

export async function POST(req: Request) {
  const data = await req.json();
  const pool = await getDB();
  const transaction = new sql.Transaction(pool);

  try {
    await transaction.begin(sql.ISOLATION_LEVEL.SERIALIZABLE);

    const request = new sql.Request(transaction);

    // ====== Prepare safe values for customer ======
    const customerType = data.customer?.type === "company" ? 1 : 0;
    const customerHaghighi = data.customer?.type === "person" ? 1 : 0;
    const customerName = data.customer?.fullName || data.customer?.companyName || "نام پیش‌فرض";
    const customerFamily = data.customer?.familyName || null;
    const customerFather = data.customer?.fatherName || null;
    const customerPhone = data.customer?.phone || "";
    const customerAddress = data.customer?.address || null;
    const customerNationalId = data.customer?.nationalId || null;
    const customerEconomicCode = data.customer?.economicCode || null;
    const customerCity = data.customer?.city || null;
    const customerProvince = data.customer?.province || null;

    // ====== Insert Customer ======
    const customerResult = await request
      .input("CustomerType", sql.Bit, customerType)
      .input("CustomerName", sql.NVarChar(250), customerName)
      .input("CustomerFamily", sql.NVarChar(250), customerFamily)
      .input("CustomerDad", sql.NVarChar(250), customerFather)
      .input("CustomerMeli", sql.NVarChar(250), customerNationalId)
      .input("CustomerNumber", sql.NVarChar(250), customerPhone)
      .input("CustomerAdres", sql.NVarChar(sql.MAX), customerAddress)
      .input("CustomerCodEghtesadi", sql.NVarChar(200), customerEconomicCode)
      .input("CustomerCity", sql.NVarChar(50), customerCity)
      .input("CustomerPrivonec", sql.NVarChar(50), customerProvince)
      .input("CustomerHaghighi", sql.Bit, customerHaghighi)
      .query(`
        INSERT INTO Customer
        (
          CustomerType,
          CustomerName,
          CustomerFamily,
          CustomerDad,
          CustomerMeli,
          CustomerNumber,
          CustomerAdres,
          CustomerCodEghtesadi,
          CustomerCity,
          CustomerPrivonec,
          CustomerHaghighi,
          CustomerEdDate
        )
        OUTPUT INSERTED.CustomerPuid
        VALUES
        (
          @CustomerType,
          @CustomerName,
          @CustomerFamily,
          @CustomerDad,
          @CustomerMeli,
          @CustomerNumber,
          @CustomerAdres,
          @CustomerCodEghtesadi,
          @CustomerCity,
          @CustomerPrivonec,
          @CustomerHaghighi,
          GETDATE()
        )
      `);

    const customerPuid = customerResult.recordset[0].CustomerPuid;

    // ====== Get new factor number ======
    const maxNumberResult = await request.query(`
      SELECT ISNULL(MAX(ReqHeaderNumber), 0) + 1 AS NewNumber
      FROM RequestSellHeader WITH (UPDLOCK, HOLDLOCK)
    `);

    const factorNumber = maxNumberResult.recordset[0].NewNumber;

    // ====== Insert RequestSellHeader ======
    const headerResult = await request
      .input("ReqHeaderNumber", sql.Int, factorNumber)
      .input("ReqHeaderOffType", sql.Bit, 0)
      .input("ReqHeaderOffValue", sql.Decimal(18, 0), 0)
      .input("ReqSellHeaderKalaExtra", sql.Decimal(18, 0), 0)
      .input("ReqHeaderCount", sql.Int, data.items?.length || 0)
      .input("ReqHeaderUser", sql.Int, data.userPuid || 0)
      .input("ReqHeaderSellerPuid", sql.Int, data.sellerPuid || 0)
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
      .input("ReqHeaderDescription", sql.NVarChar(sql.MAX), data.description || null)
      .input("FinishSell", sql.Bit, 0)
      .input("ReqHeaderMande", sql.Decimal(18, 0), data.totalPrice || 0)
      .input("ReqHeaderTypeCustomer", sql.Bit, 1)
      .input("ReqHeaderPersonelPuid", sql.Int, data.userPuid || 0)
      .query(`
        INSERT INTO RequestSellHeader
        (
          ReqHeaderNumber,
          ReqHeaderOffType,
          ReqHeaderOffValue,
          ReqSellHeaderKalaExtra,
          ReqHeaderCount,
          ReqHeaderUser,
          ReqHeaderSellerPuid,
          ReqHeaderPaymentPuid,
          ReqHeaderAllPrice,
          ReqHeaderDatetime,
          ReqHeaderEnable,
          ReqHeaderType,
          ReqHeaderCustomerPuid,
          Standard,
          Baskol,
          SaveOperation,
          ReciveAnbar,
          AcseptComplete,
          BalanceType,
          ReqHeaderDescription,
          FinishSell,
          ReqHeaderMande,
          ReqHeaderTypeCustomer,
          ReqHeaderPersonelPuid
        )
        OUTPUT INSERTED.ReqHeaderPuid
        VALUES
        (
          @ReqHeaderNumber,
          @ReqHeaderOffType,
          @ReqHeaderOffValue,
          @ReqSellHeaderKalaExtra,
          @ReqHeaderCount,
          @ReqHeaderUser,
          @ReqHeaderSellerPuid,
          @ReqHeaderPaymentPuid,
          @ReqHeaderAllPrice,
          GETDATE(),
          @ReqHeaderEnable,
          @ReqHeaderType,
          @ReqHeaderCustomerPuid,
          @Standard,
          @Baskol,
          @SaveOperation,
          @ReciveAnbar,
          @AcseptComplete,
          @BalanceType,
          @ReqHeaderDescription,
          @FinishSell,
          @ReqHeaderMande,
          @ReqHeaderTypeCustomer,
          @ReqHeaderPersonelPuid
        )
      `);

    const headerPuid = headerResult.recordset[0].ReqHeaderPuid;

    // ====== Insert Items ======
    const items = data.items || [];
    for (const item of items) {
      const itemRequest = new sql.Request(transaction);
      await itemRequest
        .input("ReqSellMainPuidKala", sql.Int, item.kalaPuid || 0)
        .input("ReqSellMainVahedPuid", sql.Int, item.vahedPuid || 0)
        .input("ReqSellMainKalaCountAccept", sql.Decimal(18, 0), item.qty || 0)
        .input("ReqSellMainKalaCountSell", sql.Decimal(18, 0), item.qty || 0)
        .input("ReqSellMainKalaPrice", sql.Decimal(18, 0), item.price || 0)
        .input("ReqSellMainKalaOffType", sql.Bit, item.offType || 0)
        .input("ReqSellMainKalaOff", sql.Decimal(18, 0), item.offValue || 0)
        .input("ReqSellMainHeaderPuid", sql.Int, headerPuid)
        .input("ReqSellUserId", sql.Int, data.userPuid || 0)
        .input("ReqSellBaskol", sql.Bit, 0)
        .input("ReqSellBaskolMande", sql.Decimal(18, 0), 0)
        .input("ReqSellMainMarjoeCount", sql.Decimal(18, 0), 0)
        .input("ReqSellMainMarjoeEnable", sql.Bit, 0)
        .input("ReqSellMainKalaCount", sql.Decimal(18, 0), item.qty || 0)
        .input("ReqSellBaskolValue", sql.Decimal(18, 0), 0)
        .input("ReqSellRefrens", sql.NVarChar(50), null)
        .input("ReqSellMainTax", sql.Decimal(18, 0), item.tax || 0)
        .input("ReqSellMainAnbar", sql.Int, data.anbarPuid || 0)
        .query(`
          INSERT INTO RequestSellMain
          (
            ReqSellMainPuidKala,
            ReqSellMainVahedPuid,
            ReqSellMainKalaCountAccept,
            ReqSellMainKalaCountSell,
            ReqSellMainKalaPrice,
            ReqSellMainKalaOffType,
            ReqSellMainKalaOff,
            ReqSellMainHeaderPuid,
            ReqSellDatetime,
            ReqSellUserId,
            ReqSellBaskol,
            ReqSellBaskolMande,
            ReqSellMainMarjoeCount,
            ReqSellMainMarjoeEnable,
            ReqSellMainKalaCount,
            ReqSellBaskolValue,
            ReqSellRefrens,
            ReqSellMainTax,
            ReqSellMainAnbar
          )
          VALUES
          (
            @ReqSellMainPuidKala,
            @ReqSellMainVahedPuid,
            @ReqSellMainKalaCountAccept,
            @ReqSellMainKalaCountSell,
            @ReqSellMainKalaPrice,
            @ReqSellMainKalaOffType,
            @ReqSellMainKalaOff,
            @ReqSellMainHeaderPuid,
            GETDATE(),
            @ReqSellUserId,
            @ReqSellBaskol,
            @ReqSellBaskolMande,
            @ReqSellMainMarjoeCount,
            @ReqSellMainMarjoeEnable,
            @ReqSellMainKalaCount,
            @ReqSellBaskolValue,
            @ReqSellRefrens,
            @ReqSellMainTax,
            @ReqSellMainAnbar
          )
        `);
    }

    await transaction.commit();

    return NextResponse.json({
      success: true,
      message: "سفارش با موفقیت ثبت شد",
      customerPuid,
      factorNumber,
      headerPuid
    });

  } catch (error) {
    await transaction.rollback();
    console.error("Error in /api/customer:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطا در ثبت سفارش"
      },
      { status: 500 }
    );
  }
}
