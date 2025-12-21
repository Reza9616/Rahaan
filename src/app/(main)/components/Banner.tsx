"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Banner() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

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
    <div className="relative w-full flex justify-between md:h-[70vh] py-4 px-8">
      <div
        className="absolute inset-0 h-full bg-no-repeat bg-cover md:bg-contain md:bg-left"
        style={{ backgroundImage: "url('./Banner.jpg')" }}
      />

      <div className="max-w-xs p-5 lg:max-w-sm space-y-4 my-auto text-white z-10">
        <h1 className="text-2xl font-bold">به مشاوره نیاز دارید؟</h1>
        <p>شماره تلفن خود را وارد کنید. کارشناسان فروش با شما تماس خواهند گرفت.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="نام و نام خانوادگی"
            className="text-black"
          />

          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="شماره تلفن"
            className="text-black"
          />

          <Button type="submit" disabled={loading} className="w-full mt-2">
            {loading ? "در حال ارسال..." : "ارسال"}
          </Button>

          {message && (
            <p className={message.type === "success" ? "text-green-500" : "text-red-500"}>
              {message.text}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}