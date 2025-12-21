"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";

const articles = [
  {
    title: "نرم‌افزار سازمانی چیست و چرا کسب‌وکارها به آن نیاز دارند؟",
    description:
      "آشنایی با مفهوم نرم‌افزارهای سازمانی و نقش آن‌ها در بهینه‌سازی فرآیندها و تصمیم‌گیری مدیریتی.",
    slug: "blogpagesample",
  },
  {
    title: "ERP چیست و چه کمکی به سازمان‌ها می‌کند؟",
    description:
      "بررسی جامع سیستم ERP، مزایا، چالش‌ها و تأثیر آن بر یکپارچگی داده‌ها در سازمان‌ها.",
    slug: "erp-system",
  },
  {
    title: "چگونه یک شرکت نرم‌افزاری مناسب انتخاب کنیم؟",
    description:
      "راهنمای انتخاب شرکت نرم‌افزاری قابل اعتماد برای توسعه راهکارهای سازمانی.",
    slug: "choose-software-company",
  },
  {
    title: "نقش UX در موفقیت نرم‌افزارهای سازمانی",
    description:
      "چرا تجربه کاربری یکی از عوامل کلیدی موفقیت در نرم‌افزارهای سازمانی است؟",
    slug: "ux-in-enterprise-software",
  },
  {
    title: "آینده نرم‌افزارهای سازمانی در ایران",
    description:
      "بررسی روندها، فرصت‌ها و چالش‌های پیش‌روی نرم‌افزارهای سازمانی در ایران.",
    slug: "future-of-enterprise-software-iran",
  },
  {
    title: "سامانه مودیان",
    description:
      "سامانه مودیان بستری یکپارچه برای ثبت، مدیریت و گزارش‌دهی تراکنش‌های مالی و مالیاتی کسب‌وکارهاست.",
    slug: "modian",
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <NavigationMenuDemo />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="/blog.jpg"
            alt="Blog"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              مقالات رهان
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              تحلیل‌ها و نوشته‌هایی درباره نرم‌افزارهای سازمانی، ERP،
              تجربه کاربری و تحول دیجیتال
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          {/* Search */}
          <div className="max-w-md mb-12">
            <input
              type="text"
              placeholder="جستجو در مقالات..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border bg-background px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          {/* Articles */}
          <div className="grid md:grid-cols-2 gap-10">
            {filteredArticles.map((article, index) => (
              <Link
                key={index}
                href={`/${article.slug}`}
                className="group rounded-2xl border p-7 transition
                           hover:border-neutral-300 hover:shadow-md"
              >
                <h2 className="text-xl font-semibold mb-3 leading-snug group-hover:text-primary transition">
                  {article.title}
                </h2>

                <p className="text-muted-foreground leading-7 line-clamp-3">
                  {article.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  مطالعه مقاله
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <p className="text-center text-muted-foreground mt-16">
              مقاله‌ای با این عنوان پیدا نشد
            </p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
