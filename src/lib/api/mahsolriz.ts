import type { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "@/lib/db";
import sql from "mssql";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const productId = Number(id);

  if (isNaN(productId)) return res.status(400).json({ message: "محصول یافت نشد" });

  try {
    const db = await getDB();
    const result = await db
      .request()
      .input("id", sql.Int, productId)
      .query("SELECT * FROM SabtMahsol WHERE KalaPuID = @id");

    const product = result.recordset[0];
    if (!product) return res.status(404).json({ message: "محصول یافت نشد" });

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "خطا در سرور" });
  }
}