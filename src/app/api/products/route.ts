import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDB();
    const result = await db.request().query(`
      SELECT KalaPuID, KalaName, KalaCod, KalaBarCode, KalaSellEnable
      FROM SabtMahsol
    `);
    return NextResponse.json(result.recordset);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}

