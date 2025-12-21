"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Banner0() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage({ type: "success", text: data.message })
        setName("")
        setPhone("")
      } else {
        setMessage({ type: "error", text: data.message || "خطا در ثبت اطلاعات" })
      }
    } catch (err) {
      console.error(err)
      setMessage({ type: "error", text: "ارتباط با سرور برقرار نشد" })
    }

    setLoading(false)
  }

  return (
<div className="  bg-accent flex items-center justify-center py-16">
  <div className="mx-auto max-w-2xl sm:text-center space-y-4">
    <h2 className="text-3xl lg:text-5xl leading-snug text-primary">
      ما حسابداری رو ساده می‌کنیم تا شما وقت بیشتری برای رشد داشته باشید.
    </h2>
    <p className="mt-2 text-sm text-secondary-foreground">
      از نرم‌افزارهای فروشگاهی تا ERP کامل شرکتی — هر ابزاری که برای مدیریت بهتر کارتون نیاز دارید اینجاست.
    </p>

    {message && (
      <p
        className={`mt-2 ${
          message.type === "success" ? "text-green-600" : "text-red-600"
        }`}
      >
        {message.text}
      </p>
    )}
  </div>
</div>
 )
}