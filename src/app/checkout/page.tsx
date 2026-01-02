"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { useUser } from "@/hooks/useUser"; // ⚡ مسیر hook خودت
import { useCart } from "@/context/CartContext";

// ======= Types =======
type CheckoutForm = {
  fullName: string;
  familyName: string;
  fatherName: string;
  companyName: string;
  companyId: string;
  nationalId: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  codEghtesadi: string;
  city: string;
  province: string;
};

// ======= Component =======
export default function CheckoutPage() {
  const router = useRouter();
  const { user, loading } = useUser(); // ⚡ hook برای گرفتن کاربر
  const { cart, clearCart } = useCart(); // ⚡ گرفتن سبد خرید

  const [type, setType] = useState<"person" | "company">("person");
  const [form, setForm] = useState<CheckoutForm>({
    fullName: "",
    familyName: "",
    fatherName: "",
    companyName: "",
    companyId: "",
    nationalId: "",
    phone: "",
    email: "",
    address: "",
    description: "",
    codEghtesadi: "",
    city: "",
    province: "",
  });
  const [error, setError] = useState("");

  // ======= Redirect به login اگر user وجود نداشته باشد =======
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) return <div>در حال بارگذاری...</div>;
  if (!user) return null; // ⚡ هنوز redirect انجام می‌شود

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!user) return;

    if (type === "person" && (!form.fullName || !form.familyName || !form.nationalId)) {
      setError("نام، نام خانوادگی و کد ملی الزامی است");
      return;
    }

    if (type === "company" && !form.companyName) {
      setError("نام شرکت الزامی است");
      return;
    }

    if (!form.phone) {
      setError("شماره تماس الزامی است");
      return;
    }

    if (!cart.modules.length) {
      setError("سبد خرید شما خالی است");
      return;
    }

    setError("");

    try {
      // ======= آماده‌سازی اطلاعات برای ارسال به سرور =======
      const payload = {
        type,
        fullName: form.fullName,
        familyName: form.familyName,
        fatherName: form.fatherName,
        companyName: form.companyName,
        nationalId: form.nationalId,
        phone: form.phone,
        email: form.email,
        address: form.address,
        economicCode: form.codEghtesadi,
        city: form.city,
        province: form.province,

        userPuid: user.id,
        sellerPuid: 1,
        anbarPuid: 1,
        totalPrice: cart.modules.reduce((acc, m) => acc + m.price * m.qty, 0),
        description: form.description || "ثبت سفارش از سایت",

        items: cart.modules.map(m => ({
          kalaPuid: m.puid,
          vahedPuid: 1,
          qty: m.qty,
          price: m.price,
          offType: 0,
          offValue: 0,
          tax: 0,
          ref: "",
        })),
      };

      const res = await fetch("/api/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        clearCart(); // ⚡ پاک کردن سبد بعد از ثبت سفارش
        router.push("/thankYouPage");
      } else {
        setError(result.message || "خطا در ثبت سفارش");
      }
    } catch (err) {
      console.error(err);
      setError("خطا در ارتباط با سرور");
    }
  };

  const inputStyle = "w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none";

  return (
    <>
      <NavigationMenuDemo />

      <main className="max-w-3xl mx-auto px-4 py-12 mt-25">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          تکمیل اطلاعات مشتری
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* انتخاب نوع مشتری */}
          <div className="flex gap-4">
            <button
              onClick={() => setType("person")}
              className={`flex-1 p-3 rounded-lg font-semibold ${
                type === "person" ? "bg-[#4f89c9] text-white" : "bg-gray-100"
              }`}
            >
              شخص حقیقی
            </button>
            <button
              onClick={() => setType("company")}
              className={`flex-1 p-3 rounded-lg font-semibold ${
                type === "company" ? "bg-[#4f89c9] text-white" : "bg-gray-100"
              }`}
            >
              شرکت / سازمان
            </button>
          </div>

          {/* فرم اطلاعات */}
          <div className="space-y-4">
            {type === "person" && (
              <>
                <input name="fullName" placeholder="نام" value={form.fullName} onChange={handleChange} className={inputStyle} />
                <input name="familyName" placeholder="نام خانوادگی" value={form.familyName} onChange={handleChange} className={inputStyle} />
                <input name="fatherName" placeholder="نام پدر (اختیاری)" value={form.fatherName} onChange={handleChange} className={inputStyle} />
                <input name="nationalId" placeholder="کد ملی" value={form.nationalId} onChange={handleChange} className={inputStyle} />
              </>
            )}

            {type === "company" && (
              <>
                <input name="companyName" placeholder="نام شرکت" value={form.companyName} onChange={handleChange} className={inputStyle} />
                <input name="companyId" placeholder="شناسه ملی / کد اقتصادی (اختیاری)" value={form.companyId} onChange={handleChange} className={inputStyle} />
              </>
            )}

            <input name="phone" placeholder="شماره تماس" value={form.phone} onChange={handleChange} className={inputStyle} />
            <input name="email" type="email" placeholder="ایمیل (اختیاری)" value={form.email} onChange={handleChange} className={inputStyle} />
            <textarea name="address" placeholder="آدرس (اختیاری)" value={form.address} onChange={handleChange} className={`${inputStyle} min-h-[100px]`} />
            <textarea name="description" placeholder="توضیح درباره کسب‌وکار یا نیاز شما (اختیاری)" value={form.description} onChange={handleChange} className={`${inputStyle} min-h-[100px]`} />
          </div>

          {error && <div className="bg-red-50 text-red-600 p-3 rounded text-sm">{error}</div>}

          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-[#4f89c9] text-white rounded-xl font-bold hover:bg-[#4f89c9] transition"
          >
            ادامه و پرداخت
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
