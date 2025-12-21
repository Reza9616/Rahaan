import type { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { phone } = req.body;

  if (!phone) return res.status(400).json({ error: "Phone number is required" });

  try {
    const pool = await getDB();

      await pool
      .request()
      .input("phone", phone)
      .query(
        "INSERT INTO ViewUser (Viewpersonnumber, ViewDatetime) VALUES (@phone, GETDATE())"
      );

    res.status(200).json({ message: "Phone saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB insert failed", details: err });
  }
}
