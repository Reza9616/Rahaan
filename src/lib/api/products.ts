import type { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await getDB();
    const result = await db.request().query(`
      SELECT KalaPuID, KalaName, KalaCod, KalaBarCode, KalaSellEnable
      FROM SabtMahsol
    `);
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
}
