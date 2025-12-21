"use client";

import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
import Link from "next/link";

export default function StorePage() {
  const modules = [
    "مدیریت فروش",
    "مدیریت موجودی کالا",
    "مدیریت مشتریان",
    "مدیریت سفارشات",
    "مدیریت پرداخت‌ها",
    "مدیریت پرسنل",
    "مدیریت تخفیف و کمپین",
    "گزارش‌گیری و تحلیل فروش",
  ];

  const softwareList = [
    {
      name: "نرم‌افزار فروشگاهی",
      description: `نرم‌افزار فروشگاهی رهان، ابزاری جامع و ساده برای مدیریت عملیات روزمره فروشگاه‌هاست. با رابط کاربری آسان، حتی کاربران با تجربه کم می‌توانند تمامی ماژول‌ها از جمله فروش، موجودی کالا، سفارشات، مدیریت مشتریان و گزارش‌دهی را به راحتی مدیریت کنند.`,
      features: [true, true, true, true, true, false, false, true],
    },
    {
      name: "نرم‌افزار طلا و جواهر فروشی",
      description: `راهکار حرفه‌ای رهان برای مدیریت فروشگاه‌های طلا و جواهر. ثبت دقیق موجودی، مدیریت سفارشات، تخفیف‌ها و گزارش‌های لحظه‌ای، کنترل سود و زیان و امنیت کالاها را تضمین می‌کند.`,
      features: [true, true, true, true, true, true, true, true],
    },
    {
      name: "نرم‌افزار پوشاک",
      description: "مدیریت فروش، موجودی و سفارشات پوشاک و اکسسوری‌ها به شکل یکپارچه.",
      features: [true, true, true, true, true, true, true, true],
    },
    {
      name: "نرم‌افزار کافه و رستوران",
      description: "مدیریت سفارشات، میزها و انبار کافه و رستوران با گزارش‌دهی دقیق.",
      features: [true, true, true, true, true, true, false, true],
    },
    {
      name: "نرم‌افزار سالن‌های زیبایی",
      description: "مدیریت مشتریان، نوبت‌ها و خدمات سالن‌های زیبایی با تمرکز بر تجربه کاربر.",
      features: [true, false, true, true, false, true, false, true],
    },
  ];

  return (
    <>
      <NavigationMenuDemo />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="/header2.jpg"
            alt="Store Software Rahaan"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              نرم‌افزارهای فروشگاهی <strong>رهان</strong>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              راهکارهای هوشمند مدیریت فروشگاه‌ها، رستوران‌ها، سالن‌های زیبایی و کسب‌وکارهای کوچک
            </p>
          </div>
        </section>

        {/* معرفی نرم‌افزارها */}
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
          {softwareList.map((software) => (
            <div key={software.name} className="space-y-8">
              <h2 className="text-2xl font-bold">{software.name}</h2>
              <p className="text-muted-foreground leading-7">{software.description}</p>

              {/* جدول ماژول‌ها */}
              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">ماژول</th>
                      <th className="px-4 py-3">وضعیت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {modules.map((module, idx) => (
                      <tr key={module}>
                        <td className="px-4 py-2 text-left">{module}</td>
                        <td
                          className={`px-4 py-2 font-bold ${
                            software.features[idx] ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {software.features[idx] ? "✔" : "✖"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* نظر مشتریان */}
        <section className="bg-muted/40 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              نظر مشتریان درباره نرم‌افزار <strong>رهان</strong>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  text: "«ERP رهان باعث شد تمامی فرآیندهای مالی و انبار ما یکپارچه شود. گزارش‌گیری دقیق و سرعت بالای سیستم، تصمیم‌گیری مدیریتی را برای ما بسیار ساده‌تر کرده است.»",
                  name: "مدیر مالی",
                  company: "شرکت بازرگانی آرمان",
                },
                {
                  text: "«اتوماسیون فرآیندها در ERP رهان باعث کاهش خطاهای انسانی و افزایش شفافیت بین واحدها شده است. پشتیبانی قوی هم از مزایای مهم این نرم‌افزار است.»",
                  name: "مدیر فناوری اطلاعات",
                  company: "هلدینگ توسعه پایدار",
                },
                {
                  text: "«ماژول‌های خرید، فروش و حسابداری رهان کاملاً با نیازهای سازمان ما سازگار است. این سیستم نظم و کنترل دقیقی به فرآیندهای اجرایی ما داده است.»",
                  name: "مدیرعامل",
                  company: "شرکت صنعتی پیشرو",
                },
              ].map((review, idx) => (
                <div
                  key={idx}
                  className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-foreground text-base leading-8 mb-6 italic">{review.text}</p>
                  <div className="border-t pt-6">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.company}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* کارت CTA */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#4f89c9] rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  آماده‌اید کسب‌وکارتان را متحول کنید؟
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  همین حالا استعلام قیمت بگیرید و بهترین پیشنهاد را دریافت کنید.
                </p>
                <Link href="/Calculator" passHref>
                  <button className="bg-white text-[#4f89c9] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
                    استعلام قیمت
                  </button>
                </Link>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="font-medium">تیم رهان</p>
                  <p className="text-sm opacity-80">همیشه در کنار شما</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ویدیوی معرفی */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              ویدیوی معرفی نرم‌افزار <strong>رهان</strong>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              در این ویدیو با امکانات، ماژول‌ها و مزایای نرم‌افزار ERP رهان به‌صورت خلاصه و کاربردی آشنا شوید.
            </p>

            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.aparat.com/video/video/embed/videohash/XXXXXX/vt/frame"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  title="ویدیوی معرفی ERP رهان"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
