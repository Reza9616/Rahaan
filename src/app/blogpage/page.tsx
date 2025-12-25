"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { Search } from "lucide-react";

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
    return articles.filter((a) =>
      a.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <NavigationMenuDemo />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4f89c9]/20 via-indigo-500/10 to-transparent" />
          <div className="absolute top-24 right-24 w-80 h-80 bg-[#4f89c9]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              <span className="bg-gradient-to-l from-[#4f89c9] to-indigo-600 bg-clip-text text-transparent">
                مقالات رهان
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg text-muted-foreground"
            >
              تحلیل‌ها و نوشته‌هایی درباره نرم‌افزارهای سازمانی، ERP،
              تجربه کاربری و تحول دیجیتال
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mb-16 relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="جستجو در مقالات..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border bg-background/70 backdrop-blur px-12 py-4
                         focus:outline-none focus:ring-4 focus:ring-[#4f89c9]/20"
            />
          </motion.div>

          {/* Articles */}
          <AnimatePresence mode="popLayout">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, i) => (
                <motion.div
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link
                    href={`/${article.slug}`}
                    className="group h-full flex flex-col justify-between
                               bg-card rounded-3xl p-8 border shadow-lg
                               hover:shadow-2xl transition-all duration-500"
                  >
                    <div>
                      <h2 className="text-xl font-bold mb-4 leading-snug text-[#4f89c9] group-hover:underline">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground leading-7 line-clamp-4">
                        {article.description}
                      </p>
                    </div>

                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#4f89c9]">
                      مطالعه مقاله
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredArticles.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground mt-24 text-lg"
            >
              مقاله‌ای با این عنوان پیدا نشد
            </motion.p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
