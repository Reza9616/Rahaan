"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { z } from "zod";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(3, "نام حداقل ۳ کاراکتر باشد"),
  phone: z.string().regex(/^09[0-9]{9}$/, "شماره موبایل معتبر وارد کنید"),
});

export default function Banner() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setErrors({});

    const result = formSchema.safeParse({ name, phone });
    if (!result.success) {
      const err = result.error.format();
      setErrors({ name: err.name?._errors[0], phone: err.phone?._errors[0] });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message || "درخواست ثبت شد" });
        setName("");
        setPhone("");
      } else {
        setMessage({ type: "error", text: data.message || "خطا در ثبت" });
      }
    } catch {
      setMessage({ type: "error", text: "ارتباط با سرور برقرار نشد" });
    }
    setLoading(false);
  }

  return (
<div className="relative w-full flex justify-start items-center min-h-[50vh] py-12 px-8 bg-accent/90">
<Image 
  src="/Banner.jpg" 
  alt="بنر مشاوره" 
  fill 
  className="  brightness-75" 
  priority 
/>
  <div className="max-w-sm w-full ml-auto space-y-8 bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-primary">به مشاوره نیاز دارید؟</h1>
          <p className="text-muted-foreground">نام و شماره تلفن خود را وارد کنید تا کارشناسان با شما تماس بگیرند.</p>
        </div>

  <form onSubmit={handleSubmit} className="space-y-6 text-right">
  <div className="space-y-2">
    <Label>نام و نام خانوادگی</Label>
    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="نام و نام خانوادگی" className="text-right" />
    {errors.name && <p className="text-sm text-red-600 text-right">{errors.name}</p>}
  </div>

  <div className="space-y-2">
    <Label>شماره تلفن</Label>
    <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="۰۹۱۲۳۴۵۶۷۸۹" className="text-right" />
    {errors.phone && <p className="text-sm text-red-600 text-right">{errors.phone}</p>}
  </div>

  <Button type="submit" disabled={loading} className="w-full" size="lg">
    {loading ? "در حال ارسال..." : "درخواست مشاوره"}
  </Button>

  {message && <p className={`text-center font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>{message.text}</p>}
</form>
      </div>
    </div>
  );
}