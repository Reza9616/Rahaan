"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";

/* -------------------- Types -------------------- */
interface Module {
  name: string;
  price: number;
}

interface Package {
  name: string;
  modules: Module[];
}

interface Feature {
  name: string;
  price: number;
  count: number;
}

/* -------------------- Data -------------------- */
const packages: Package[] = [
  {
    name: "رهان سازمانی",
    modules: [
      { name: "حسابداری", price: 10000000 },
      { name: "خزانه", price: 14000000 },
      { name: "خرید", price: 30000000 },
      { name: "فروش", price: 35000000 },
      { name: "انبار", price: 25000000 },
      { name: "پرسنلی", price: 15000000 },
      { name: "حقوق و دستمزد", price: 30000000 },
      { name: "تولید", price: 61000000 },
      { name: "باسکول", price: 10000000 },
      { name: "دارایی ثابت", price: 25000000 },
      { name: "تعمیرات و نگهداری", price: 15000000 },
      { name: "بهای تمام شده", price: 55000000 },
    ],
  },
  {
    name: "رهان صنعتی و بازرگانی",
    modules: [
      { name: "حسابداری", price: 7000000 },
      { name: "خزانه", price: 12000000 },
      { name: "خرید", price: 8000000 },
      { name: "فروش", price: 9500000 },
      { name: "انبار", price: 8000000 },
      { name: "پرسنلی", price: 10000000 },
      { name: "حقوق و دستمزد", price: 25000000 },
      { name: "تولید", price: 45000000 },
      { name: "باسکول", price: 8000000 },
      { name: "دارایی ثابت", price: 25000000 }, 
      { name: "بهای تمام شده", price: 55000000 },
    ],
  },
  {
    name: "رهان استورها",
    modules: [
      { name: "رهان عمومی", price: 6000000 },
      { name: "رهان طلا و جواهر", price: 35000000 },
      { name: "رهان پوشاک", price: 8000000 },
      { name: "رهان کافه رستوران", price: 12000000 },
      { name: "رهان سالن‌های زیبایی", price: 12000000 },
    ],
  },
];

const initialFeatures: Feature[] = [
  { name: "تعداد کاربران", price: 5000000, count: 0 },
  { name: "سامانه مودیان", price: 6000000, count: 0 }, 
  { name: "چند شرکت همزمان", price: 3000000, count: 0 },
  { name: "سامانه ویژه موبایل", price: 0, count: 0 }, 
  { name: "خدمات استقرار و آموزش", price: 1000000, count: 0 },
];

/* -------------------- Component -------------------- */
export default function Calculator() {
  const [selectedPackage, setSelectedPackage] = useState<Package>(packages[0]);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);

  /* -------------------- Logic -------------------- */
  const toggleModule = (name: string) => {
    setSelectedModules((prev) =>
      prev.includes(name)
        ? prev.filter((m) => m !== name)
        : [...prev, name]
    );
  };

  const changeFeature = (index: number, delta: number) => {
    setFeatures((prev) =>
      prev.map((f, i) =>
        i === index ? { ...f, count: Math.max(0, f.count + delta) } : f
      )
    );
  };

  const changePackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    setSelectedModules([]);
  };

  const modulesPrice = selectedPackage.modules
    .filter((m) => selectedModules.includes(m.name))
    .reduce((sum, m) => sum + m.price, 0);

  const featuresPrice = features.reduce(
    (sum, f) => sum + f.price * f.count,
    0
  );

  const totalPrice = modulesPrice + featuresPrice;

  /* -------------------- UI -------------------- */
  return (
    <>
      <NavigationMenuDemo />

      <main className="px-6 md:px-12 flex flex-col md:flex-row gap-8">
        {/* -------- Main -------- */}
        <div className="flex-1 space-y-12">
          {/* Header */}
          <section className="text-center py-10">
            <h1 className="text-4xl font-bold mb-3">
              ماشین حساب بسته‌های نرم‌افزاری رهان
            </h1>
            <p className="text-gray-600">
              ابتدا بسته را انتخاب کنید، سپس ماژول‌ها و امکانات جانبی را مشخص نمایید
            </p>
          </section>

  <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* هدر با عکس و تایتل */}
    <div className="mb-12">
      {/* عکس هدر */}
      <div className="relative mx-auto max-w-4xl mb-10 rounded-3xl overflow-hidden shadow-2xl">
        <img 
          src="/Boxes.png" // یا URL تصویر مناسب
          alt="پکیج‌های نرم‌افزاری رهان - داشبوردهای هوشمند و یکپارچه"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* تایتل روی عکس (اختیاری - برای حس دراماتیک‌تر) */}
        <div className="absolute bottom-8 left-0 right-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            پکیج‌های هوشمند رهان
          </h2>
          <p className="text-xl text-white/90 mt-4 drop-shadow">
            متناسب با اندازه و نیاز کسب‌وکار شما
          </p>
        </div>
      </div>

      {/* یا اگر نمی‌خواهید تایتل روی عکس باشد، اینجا بگذارید */}
      {/* <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        انتخاب پکیج مناسب برای موفقیت شما
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        از امکانات پایه تا ابزارهای پیشرفته سازمانی – همه در یک سیستم یکپارچه
      </p> */}
    </div>

    {/* بخش انتخاب پکیج‌ها - کد قبلی شما */}
    <div className="flex flex-wrap justify-center gap-4">
      {packages.map((pkg) => (
        <button
          key={pkg.name}
          onClick={() => changePackage(pkg)}
          className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-xl ${
            selectedPackage.name === pkg.name
              ? "bg-[#4f89c9] text-white scale-105"
              : "bg-gray-200 hover:bg-gray-300 text-foreground"
          }`}
        >
          {pkg.name}
        </button>
      ))}
    </div>
  </div>
</section>

          {/* Modules */}
          <section className="bg-gray-50 p-6 rounded-2xl shadow space-y-4">
            <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-xl text-sm">
              👈 برای محاسبه قیمت، ماژول‌های مورد نیاز خود را انتخاب کنید
            </div>

            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">ماژول‌ها</h2>
              <span className="text-sm text-gray-600">
                {selectedModules.length} انتخاب شده
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedPackage.modules.map((mod) => {
                const active = selectedModules.includes(mod.name);
                return (
                  <button
                    key={mod.name}
                    onClick={() => toggleModule(mod.name)}
                    className={`p-4 rounded-xl border flex justify-between items-center transition ${
                      active
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    <span>{mod.name}</span>
                    <span className="text-sm">
                      {mod.price.toLocaleString()} تومان
                    </span>
                  </button>
                );
              })}
            </div>

            {selectedModules.length === 0 && (
              <div className="text-center text-red-600 text-sm">
                ⚠️ هیچ ماژولی انتخاب نشده است
              </div>
            )}
          </section>

          {/* Features */}
          <section className="bg-gray-50 p-6 rounded-2xl shadow space-y-4">
            <h2 className="text-xl font-bold">امکانات جانبی</h2>

            {features.map((f, i) => (
              <div
                key={f.name}
                className="flex justify-between items-center border rounded-xl p-3"
              >
                <span>
                  {f.name} ({f.price.toLocaleString()} تومان)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => changeFeature(i, -1)}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{f.count}</span>
                  <button
                    onClick={() => changeFeature(i, 1)}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* -------- Desktop Sidebar -------- */}
        <aside className="hidden md:block w-80 sticky top-24 h-fit">
          <div className="bg-gray-100 p-6 rounded-2xl shadow space-y-4">
            <h3 className="text-xl font-bold">جمع کل</h3>

            <div className="text-lg font-bold">
              {totalPrice.toLocaleString()} تومان
            </div>

            <button
              disabled={totalPrice === 0}
              className={`w-full py-3 rounded-xl font-semibold ${
                totalPrice === 0
                  ? "bg-gray-300 text-gray-600"
                  : "bg-green-600 text-white"
              }`}
            >
              افزودن به سبد خرید
            </button>
          </div>
        </aside>
      </main>

      {/* -------- Mobile Bottom Bar -------- */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow px-4 py-3 flex justify-between items-center">
        <div>
          <div className="text-xs text-gray-500">قیمت کل</div>
          <div className="font-bold">
            {totalPrice.toLocaleString()} تومان
          </div>
        </div>
        <button
          disabled={totalPrice === 0}
          className={`px-5 py-2 rounded-xl font-semibold ${
            totalPrice === 0
              ? "bg-gray-300 text-gray-600"
              : "bg-green-600 text-white"
          }`}
        >
          خرید
        </button>
      </div>

      <Footer />
    </>
  );
}
