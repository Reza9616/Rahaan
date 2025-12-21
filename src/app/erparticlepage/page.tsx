"use client";

import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
import Link from "next/link";

export default function erparticlepage() {
  return (
    <>
      <NavigationMenuDemo />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Price Inquiry */}
            <div className="rounded-2xl border p-6 shadow-sm bg-white sticky top-24 hidden lg:block">
              <h3 className="text-lg font-bold mb-3">
                استعلام قیمت ERP
              </h3>

              <p className="text-sm text-muted-foreground mb-5 leading-6">
                قیمت ERP به عوامل مختلفی مثل تعداد کاربران، ماژول‌ها و سطح
                سفارشی‌سازی بستگی دارد. برای دریافت برآورد دقیق، با ما در تماس باشید.
              </p>

              <Link
                href="/contact"
                className="block text-center rounded-xl bg-primary text-white py-3 font-medium hover:opacity-90 transition"
              >
                درخواست مشاوره رایگان
              </Link>

              <p className="mt-3 text-xs text-center text-muted-foreground">
                پاسخ‌گویی حداکثر تا ۲۴ ساعت کاری
              </p>
            </div>

            {/* Mobile Price Inquiry */}
            <div className="rounded-2xl border p-6 shadow-sm bg-white lg:hidden">
              <h3 className="text-lg font-bold mb-3">
                استعلام قیمت ERP
              </h3>

              <p className="text-sm text-muted-foreground mb-5 leading-6">
                برای دریافت برآورد دقیق ERP، با ما تماس بگیرید.
              </p>

              <Link
                href="/contact"
                className="block text-center rounded-xl bg-primary text-white py-3 font-medium hover:opacity-90 transition"
              >
                درخواست مشاوره
              </Link>
            </div>

            {/* Why Rahaan */}
            <div className="rounded-2xl border p-6 bg-muted/30">
              <h4 className="font-semibold mb-4">
                چرا ERP رهان؟
              </h4>

              <ul className="text-sm space-y-3 text-muted-foreground">
                <li>✔ طراحی اختصاصی متناسب با فرآیندهای سازمان</li>
                <li>✔ پشتیبانی و توسعه بلندمدت</li>
                <li>✔ مناسب سازمان‌های ایرانی</li>
                <li>✔ قابلیت اتصال به سیستم‌های دیگر</li>
              </ul>
            </div>

            {/* Best Articles */}
            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold mb-4">
                بهترین مقالات
              </h4>

              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/blogpagesample"
                    className="hover:text-primary transition"
                  >
                    نرم‌افزار سازمانی چیست و چرا مهم است؟
                  </Link>
                </li>
                <li>
                  <Link
                    href="/erparticlepage"
                    className="hover:text-primary transition"
                  >
                    ERP چیست و چه کمکی به سازمان‌ها می‌کند؟
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/choose-software-company"
                    className="hover:text-primary transition"
                  >
                    چگونه شرکت نرم‌افزاری مناسب انتخاب کنیم؟
                  </Link>
                </li>
              </ul>
            </div>

            {/* Trust Badge */}
            <div className="rounded-2xl border p-6 text-center bg-white">
              <p className="font-semibold mb-2">
                بیش از ۶ سال تجربه
              </p>
              <p className="text-sm text-muted-foreground">
                در توسعه نرم‌افزارهای سازمانی و ERP
              </p>
            </div>
          </aside>

          {/* Article */}
          <section className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              <h1>ERP چیست و چه کمکی به سازمان‌ها می‌کند؟</h1>

              <p>
                ERP یا برنامه‌ریزی منابع سازمان (Enterprise Resource Planning)،
                سیستمی یکپارچه برای مدیریت فرآیندهای اصلی سازمان‌هاست. این سیستم
                اطلاعات بخش‌های مختلف مانند مالی، منابع انسانی، فروش و انبار را
                در یک بستر واحد جمع‌آوری و مدیریت می‌کند.
              </p>

              <h2>ERP به زبان ساده</h2>
              <p>
                در بسیاری از سازمان‌ها، هر واحد از نرم‌افزار یا فایل جداگانه‌ای
                استفاده می‌کند. ERP این جزیره‌های اطلاعاتی را به هم متصل کرده و
                باعث هماهنگی کامل بین واحدها می‌شود.
              </p>

              <h2>ERP چه مشکلاتی را حل می‌کند؟</h2>
              <ul>
                <li>پراکندگی اطلاعات در سیستم‌های مختلف</li>
                <li>دوباره‌کاری و خطاهای انسانی</li>
                <li>نبود گزارش‌های دقیق و به‌روز</li>
                <li>کندی در تصمیم‌گیری‌های مدیریتی</li>
              </ul>

              <h2>مزایای استفاده از ERP برای سازمان‌ها</h2>
              <ul>
                <li>یکپارچگی کامل داده‌ها</li>
                <li>افزایش بهره‌وری کارکنان</li>
                <li>کاهش هزینه‌های عملیاتی</li>
                <li>تصمیم‌گیری سریع‌تر و دقیق‌تر</li>
              </ul>

              <h2>ERP رهان چه تفاوتی دارد؟</h2>
              <p>
                راهکار ERP رهان بر اساس نیاز واقعی سازمان‌های ایرانی طراحی شده
                و امکان سفارشی‌سازی بالا، پشتیبانی مستمر و توسعه‌پذیری را
                فراهم می‌کند.
              </p>

              <h2>ERP مناسب چه سازمان‌هایی است؟</h2>
              <p>
                ERP برای سازمان‌های متوسط و بزرگ، هلدینگ‌ها، شرکت‌های تولیدی،
                بازرگانی و خدماتی یک ابزار حیاتی محسوب می‌شود.
              </p>

              <h2>جمع‌بندی</h2>
              <p>
                ERP فقط یک نرم‌افزار نیست؛ بلکه ستون فقرات مدیریت مدرن سازمان‌هاست.
                اگر به دنبال رشد پایدار و کنترل هوشمند کسب‌وکار خود هستید، ERP
                یک انتخاب ضروری است.
              </p>
            </article>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
