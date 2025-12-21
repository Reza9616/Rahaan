// pages/api/users.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { getDB } from "@/lib/db"  // مسیر db.ts رو بر اساس پروژه‌ات تنظیم کن (اگر فرق داره، تغییر بده)
import * as sql from "mssql"

type ResponseData = 
  | { message: string }
  | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // فقط اجازه POST می‌دیم – اگر متد دیگه‌ای بود، خطا برگردون
  if (req.method !== "POST") {
    return res.status(405).json({ error: "متد مجاز نیست. فقط POST پذیرفته می‌شود." })
  }

  // دریافت داده‌ها از body و trim کردن (حذف فضاهای اضافی)
  const { name, phone } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: "نام و شماره تلفن الزامی است." })
  }

  const trimmedName = name.trim()
  const trimmedPhone = phone.trim()

  if (trimmedName === "" || trimmedPhone === "") {
    return res.status(400).json({ error: "نام و شماره تلفن نمی‌تواند خالی باشد." })
  }

  // اعتبارسنجی شماره تلفن ایرانی (۱۱ رقم، شروع با ۰۹)
  const phoneRegex = /^09\d{9}$/
  if (!phoneRegex.test(trimmedPhone)) {
    return res.status(400).json({ error: "شماره تلفن معتبر نیست. باید ۱۱ رقم و با ۰۹ شروع شود." })
  }

  try {
    // اتصال به دیتابیس
    const pool = await getDB()

    // اول چک کنیم آیا این شماره تلفن قبلاً ثبت شده یا نه
    const checkResult = await pool.request()
      .input("phone", sql.NVarChar(50), trimmedPhone)
      .query("SELECT COUNT(*) AS count FROM ViewUserInfo WHERE ViewUserInfoNumber = @phone")

    const count = checkResult.recordset[0].count as number

    if (count > 0) {
      return res.status(409).json({ error: "این شماره تلفن قبلاً ثبت شده است." })
    }

    // حالا INSERT انجام می‌دیم
    await pool.request()
      .input("name", sql.NVarChar(50), trimmedName)
      .input("phone", sql.NVarChar(50), trimmedPhone)
      .query(`
        INSERT INTO ViewUserInfo (ViewUserInfoName, ViewUserInfoNumber) 
        VALUES (@name, @phone)
      `)

    // موفقیت! status 201 یعنی چیزی جدید ساخته شد
    return res.status(201).json({ message: "اطلاعات با موفقیت ثبت شد." })

  } catch (error) {
    console.error("خطا در API /api/users:", error)
    
    // خطای سرور – جزئیات رو به کلاینت نشون نمی‌دیم (امنیت)
    return res.status(500).json({ error: "خطایی در سرور رخ داد. لطفاً دوباره تلاش کنید." })
  }
}