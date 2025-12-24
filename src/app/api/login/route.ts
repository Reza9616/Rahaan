import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as sql from "mssql";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "ایمیل و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    const db = await getDB();

    // 1️⃣ فقط گرفتن کاربر با ایمیل
    const result = await db
      .request()
      .input("email", sql.NVarChar, email)
      .query(`
        SELECT TOP 1 *
        FROM ViewWebSiteSign
        WHERE ViewWebSiteSignEmail = @email
      `);

    if (result.recordset.length === 0) {
      return NextResponse.json(
        { message: "ایمیل یا رمز عبور اشتباه است" },
        { status: 401 }
      );
    }

    const user = result.recordset[0];

    // 2️⃣ مقایسه پسورد
    const isValidPassword = await bcrypt.compare(
      password,
      user.ViewWebSiteSignPassword
    );

    if (!isValidPassword) {
      return NextResponse.json(
        { message: "ایمیل یا رمز عبور اشتباه است" },
        { status: 401 }
      );
    }

    // 3️⃣ ساخت JWT
    const token = jwt.sign(
      {
        id: user.ViewWebSiteSign,
        email: user.ViewWebSiteSignEmail,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // 4️⃣ ست کوکی امن
    const response = NextResponse.json(
      { message: "ورود موفق" },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 روز
    });

    return response;
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json(
      { message: "خطا در ورود" },
      { status: 500 }
    );
  }
}
