"use client";

import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
import Link from "next/link";

export default function BlogPageSample() {
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
                استعلام قیمت نرم‌افزار سازمانی
              </h3>

              <p className="text-sm text-muted-foreground mb-5 leading-6">
                قیمت نرم‌افزار سازمانی به تعداد کاربران، ماژول‌ها و سطح
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
                استعلام قیمت نرم‌افزار سازمانی
              </h3>

              <p className="text-sm text-muted-foreground mb-5 leading-6">
                برای دریافت برآورد دقیق نرم‌افزار سازمانی، با ما تماس بگیرید.
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
                چرا نرم‌افزار سازمانی رهان؟
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
              <h1>نرم‌افزار سازمانی چیست و چرا کسب‌وکارها به آن نیاز دارند؟</h1>

              <p>
                نرم‌افزار سازمانی به مجموعه‌ای از سیستم‌ها گفته می‌شود که برای مدیریت
                فرآیندهای داخلی سازمان‌ها طراحی شده‌اند. این نرم‌افزارها به
                کسب‌وکارها کمک می‌کنند عملیات خود را دقیق‌تر، سریع‌تر و یکپارچه‌تر
                انجام دهند.
              </p>

              <h2>نرم‌افزار سازمانی چیست؟</h2>
              <p>
                با رشد کسب‌وکارها، استفاده از فایل‌های پراکنده و فرآیندهای دستی
                دیگر پاسخگو نیست. نرم‌افزار سازمانی تمامی اطلاعات را در یک سیستم
                متمرکز جمع‌آوری می‌کند.
              </p>

              <h2>چرا کسب‌وکارها به نرم‌افزار سازمانی نیاز دارند؟</h2>
              <ul>
                <li>کاهش خطاهای انسانی</li>
                <li>افزایش بهره‌وری تیم‌ها</li>
                <li>مدیریت یکپارچه اطلاعات</li>
                <li>گزارش‌گیری دقیق و لحظه‌ای</li>
              </ul>

              <h2>مزایای نرم‌افزار سازمانی رهان</h2>
              <p>
                در رهان، نرم‌افزارهای سازمانی بر اساس نیاز واقعی سازمان‌ها طراحی
                می‌شوند و قابلیت توسعه و سفارشی‌سازی بالایی دارند.
              </p>

              <h2>جمع‌بندی</h2>
              <p>
                اگر به دنبال رشد پایدار و مدیریت هوشمند سازمان خود هستید، استفاده از
                نرم‌افزار سازمانی یک انتخاب هوشمندانه است.
              </p>
            </article>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
