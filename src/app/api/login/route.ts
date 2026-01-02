import { getDB } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server"; 
import sql from "mssql";;
import jwt from "jsonwebtoken";


export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log("[LOGIN] Request body:", { email, password });

    if (!email || !password) {
      console.log("[LOGIN] Missing email or password");
      return NextResponse.json(
        { message: "ایمیل و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    const db = await getDB();
    console.log("[LOGIN] Connected to DB");

    const result = await db
      .request()
      .input("email", sql.NVarChar, email)
      .query(`
        SELECT TOP 1 *
        FROM ViewWebSiteSign
        WHERE ViewWebSiteSignEmail = @email
      `);

    console.log("[LOGIN] Query result:", result.recordset);

    if (result.recordset.length === 0) {
      console.log("[LOGIN] User not found");
      return NextResponse.json(
        { message: "ایمیل یا رمز عبور اشتباه است" },
        { status: 401 }
      );
    }

    const user = result.recordset[0];
    console.log("[LOGIN] User found:", user);

    const isValidPassword = await bcrypt.compare(password, user.ViewWebSiteSignPassword);
    console.log("[LOGIN] Password valid?", isValidPassword);

    if (!isValidPassword) {
      console.log("[LOGIN] Invalid password");
      return NextResponse.json(
        { message: "ایمیل یا رمز عبور اشتباه است" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        id: user.ViewWebSiteSignPuid, // یا هر ستون واقعی id که دارید
        email: user.ViewWebSiteSignEmail
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    console.log("[LOGIN] JWT generated:", token);

    const response = NextResponse.json({ message: "ورود موفق" }, { status: 200 });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    console.log("[LOGIN] Cookie set, response ready");
    return response;
  } catch (error) {
    console.error("[LOGIN] ERROR:", error);
    return NextResponse.json({ message: "خطا در ورود" }, { status: 500 });
  }
}
