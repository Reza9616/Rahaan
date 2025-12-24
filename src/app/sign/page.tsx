"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "نام و نام خانوادگی الزامی است.";
    if (!email.trim()) newErrors.email = "ایمیل الزامی است.";
    if (!password.trim()) newErrors.password = "رمز عبور الزامی است.";
    if (!nationalId.trim()) newErrors.nationalId = "کد ملی الزامی است.";
    if (!phone.trim()) newErrors.phone = "شماره تلفن الزامی است.";
    if (!address.trim()) newErrors.address = "آدرس الزامی است.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, nationalId, phone, address }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        router.push("/login");
      } else {
        alert(data.message || "خطایی رخ داد. لطفا دوباره تلاش کنید.");
      }
    } catch (err) {
      console.error(err);
      alert("خطا در اتصال به سرور");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500";

  const errorClass = "text-red-600 text-sm mt-1";

  return (
    <>
      <NavigationMenuDemo />

      <main className="py-10 bg-gray-50 min-h-screen flex flex-col justify-center">
        <div className="max-w-lg w-full mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">ثبت نام</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                placeholder="نام و نام خانوادگی"
                value={name}
                onChange={e => setName(e.target.value)}
                maxLength={50}
                className={inputClass}
              />
              {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="ایمیل"
                value={email}
                onChange={e => setEmail(e.target.value)}
                maxLength={50}
                className={inputClass}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>

            <div>
              <input
                type="password"
                placeholder="رمز عبور"
                value={password}
                onChange={e => setPassword(e.target.value)}
                maxLength={50}
                className={inputClass}
              />
              {errors.password && <p className={errorClass}>{errors.password}</p>}
            </div>

            <div>
              <input
                placeholder="کد ملی"
                value={nationalId}
                onChange={e => setNationalId(e.target.value)}
                maxLength={50}
                className={inputClass}
              />
              {errors.nationalId && <p className={errorClass}>{errors.nationalId}</p>}
            </div>

            <div>
              <input
                placeholder="شماره تلفن"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                maxLength={50}
                className={inputClass}
              />
              {errors.phone && <p className={errorClass}>{errors.phone}</p>}
            </div>

            <div>
              <input
                placeholder="آدرس"
                value={address}
                onChange={e => setAddress(e.target.value)}
                maxLength={50}
                className={inputClass}
              />
              {errors.address && <p className={errorClass}>{errors.address}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition"
            >
              {loading ? "در حال ثبت..." : "ثبت نام"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
