"use client";
import React, { useState } from "react";

export default function PhonePopup() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>(""); // پیام موفقیت یا خطا

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!phone) {
      setIsOpen(false); // اگر شماره وارد نشده، فقط پاپ‌آپ بسته شود
      return;
    }
  
    try {
      const res = await fetch("/api/view-number", { // <- مسیر درست API
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
  
      const data = await res.json();
      if (res.ok) setMessage("شماره با موفقیت ثبت شد ✅");
      else setMessage("خطا در ثبت شماره ⚠️");
    } catch (err) {
      setMessage("خطا در ارسال درخواست ⚠️");
      console.error(err);
    }
  
    setTimeout(() => setIsOpen(false), 2000);
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>
      <div className="relative bg-white/80 p-6 rounded-lg shadow-lg w-80 max-w-full">
        <h2 className="text-lg font-bold mb-4">شماره خود را وارد کنید (اختیاری)</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="tel"
            placeholder="شماره تلفن"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 backdrop-blur-sm"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              بستن
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              ارسال
            </button>
          </div>
        </form>
        {message && <p className="mt-3 text-center text-sm text-green-600">{message}</p>}
      </div>
    </div>
  );
}
