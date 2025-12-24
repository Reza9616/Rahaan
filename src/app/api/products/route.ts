
// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import * as sql from "mssql";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "ایمیل و رمز عبور لازم است" }, { status: 400 });
    }

    const db = await getDB();

    const result = await db
      .request()
      .input("email", sql.NVarChar, email)
      .input("password", sql.NVarChar, password)
      .query(`
        SELECT *
        FROM ViewWebSiteSign
        WHERE ViewWebSiteSignEmail = @email AND ViewWebSiteSignPassword = @password
      `);

    if (result.recordset.length === 0) {
      return NextResponse.json({ message: "ایمیل یا رمز عبور اشتباه است" }, { status: 401 });
    }

    // برگشت اطلاعات کاربر بدون پسورد
    const user = result.recordset[0];
    delete user.ViewWebSiteSignPassword;

    return NextResponse.json({ message: "ورود موفق", user }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "خطا در ورود" }, { status: 500 });
  }
}
