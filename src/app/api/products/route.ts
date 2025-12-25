// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import * as sql from "mssql";

export async function GET(req: NextRequest) {
  try {
    const db = await getDB();

    // Query ستون‌های اصلی محصول
    const result = await db
      .request()
      .query(`
        SELECT KalaPuID, KalaName, KalaCod, KalaBarCode, KalaSellEnable
        FROM SabtMahsol
        WHERE KalaSellEnable = 1
        ORDER BY KalaPuID DESC
      `);

    console.log("✅ Products fetched:", result.recordset.length);

    return NextResponse.json(result.recordset);
  }catch (error) {
  console.error("❌ Error fetching products:", error);
  return NextResponse.json(
    { message: "خطا در دریافت محصولات", error: String(error) },
    { status: 500 }
  );
}
}
