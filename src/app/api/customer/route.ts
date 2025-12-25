// src/app/api/customer/route.ts
import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import * as sql from "mssql";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const pool = await getDB();

    await pool.request()
      .input("CustomerType", sql.Bit, data.type === "company" ? 1 : 0)
      .input("CustomerName", sql.NVarChar(250), data.fullName || data.companyName)
      .input("CustomerFamily", sql.NVarChar(250), data.familyName || null)
      .input("CustomerDad", sql.NVarChar(250), data.fatherName || null)
      .input("CustomerMeli", sql.NVarChar(250), data.nationalId || null)
      .input("CustomerNumber", sql.NVarChar(250), data.phone)
      .input("CustomerAdres", sql.NVarChar(sql.MAX), data.address || null)
      .input("CustomerCodEghtesadi", sql.NVarChar(200), data.economicCode || null)
      .input("CustomerDescription", sql.NVarChar(250), data.description || null)
      .input("CustomerCity", sql.NVarChar(50), data.city || null)
      .input("CustomerPrivonec", sql.NVarChar(50), data.province || null)
      .input("CustomerHaghighi", sql.Bit, data.type === "person" ? 1 : 0)
      .query(`
        INSERT INTO Customer
        (CustomerType, CustomerName, CustomerFamily, CustomerDad, CustomerMeli, CustomerNumber,
         CustomerAdres, CustomerCodEghtesadi, CustomerDescription, CustomerCity, CustomerPrivonec,
         CustomerHaghighi, CustomerEdDate)
        VALUES
        (@CustomerType, @CustomerName, @CustomerFamily, @CustomerDad, @CustomerMeli, @CustomerNumber,
         @CustomerAdres, @CustomerCodEghtesadi, @CustomerDescription, @CustomerCity, @CustomerPrivonec,
         @CustomerHaghighi, GETDATE())
      `);

    return NextResponse.json({ success: true, message: "مشتری اضافه شد" });
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = "خطای ناشناخته";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
