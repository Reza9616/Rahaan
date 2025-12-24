import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, nationalId, phone, address } = body;

    if (!name || !email || !password || !nationalId || !phone || !address) {
      return NextResponse.json({ message: "تمام فیلدها الزامی هستند." }, { status: 400 });
    }

    const db = await getDB();

    // بررسی ایمیل یا کد ملی
    const check = await db
      .request()
      .input("email", email)
      .input("nationalId", nationalId)
      .query(
        `SELECT * FROM ViewWebSiteSign WHERE ViewWebSiteSignEmail = @email OR ViewWebSiteSignNumber = @nationalId`
      );

    if (check.recordset.length > 0) {
      return NextResponse.json({ message: "ایمیل یا کد ملی قبلا ثبت شده است." }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db
      .request()
      .input("name", name)
      .input("email", email)
      .input("password", hashedPassword)
      .input("nationalId", nationalId)
      .input("phone", phone)
      .input("address", address)
      .query(`
        INSERT INTO ViewWebSiteSign 
        (ViewWebSiteSignName, ViewWebSiteSignEmail, ViewWebSiteSignPassword, ViewWebSiteSignNumber, ViewWebSiteSignPhone, ViewWebSiteSignAddress)
        VALUES (@name, @email, @password, @nationalId, @phone, @address)
      `);

    return NextResponse.json({ message: "ثبت نام با موفقیت انجام شد." });

  } catch (err) {
    console.error("ERROR in /api/sign:", err);
    return NextResponse.json({ message: "خطا در ثبت نام", error: err instanceof Error ? err.message : err }, { status: 500 });
  }
}
