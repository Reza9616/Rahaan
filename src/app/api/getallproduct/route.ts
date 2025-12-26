import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import sql from "mssql";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const type = searchParams.get("type"); // KalaType
    const tag = searchParams.get("tag");   // KalaGroup

    const db = await getDB();
    const request = db.request();

    let where = `
      WHERE k.AnbarPuID = 2019
        AND k.KalaSellEnable = 1
    `;

    if (type) {
      where += " AND k.KalaType = @type";
      request.input("type", sql.Int, Number(type));
    }

    if (tag) {
      where += " AND k.KalaGroup = @tag";
      request.input("tag", sql.Int, Number(tag));
    }

    const query = `
      SELECT
        k.KalaPuID,
        k.KalaName,
        k.KalaCod,
        k.KalaType,
        k.KalaGroup,
        ISNULL(p.KalaPricePrice1, 0) AS Price
      FROM SabtMahsol k
      LEFT JOIN KalaPrice p
        ON p.KalaPriceKalaPuid = k.KalaPuID
        AND p.PriceEnable = 1
      ${where}
      ORDER BY k.KalaPuID
    `;

    const result = await request.query(query);

    return NextResponse.json(result.recordset);
  } catch (error) {
    console.error("PRODUCT API ERROR:", error);
    return NextResponse.json(
      { message: "خطا در دریافت کالاها" },
      { status: 500 }
    );
  }
}
