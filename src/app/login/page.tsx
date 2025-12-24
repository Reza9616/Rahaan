"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("لطفاً ایمیل و رمز عبور را وارد کنید.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // JWT در Cookie ست شده (httpOnly)
        router.replace("/"); // بهتر از push برای لاگین
      } else if (res.status === 401) {
        setError("ایمیل یا رمز عبور اشتباه است.");
      } else {
        setError(data.message || "خطا در ورود");
      }
    } catch (err) {
      console.error(err);
      setError("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <>
      <NavigationMenuDemo />

      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            ورود به حساب
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="ایمیل"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={inputClass}
              maxLength={50}
            />

            <input
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={inputClass}
              maxLength={50}
            />

            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-2 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "در حال ورود..." : "ورود"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            حساب کاربری ندارید؟{" "}
            <a href="/sign" className="text-blue-600 font-semibold hover:underline">
              ثبت نام
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
