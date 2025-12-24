"use client";

import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    name: "رهان ERP",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/erp01.jpg",
    slug: "erp",
  },
  {
    name: "رهان ECO",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/eco01.jpg",
    slug: "eco",
  },
  {
    name: "رهان STORE",
    description: "راهکار جامع مدیریت فروشگاه‌ها و کسب‌وکار",
    image: "/erp01.jpg",
    slug: "store",
  },
  {
    name: "رهان عمومی",
    description: "راهکار جامع مدیریت عمومی سازمان‌ها",
    image: "/erp01.jpg",
    slug: "general",
  },
  {
    name: "رهان طلا و جواهر",
    description: "مدیریت فروش و موجودی طلا و جواهر",
    image: "/erp01.jpg",
    slug: "gold",
  },
  {
    name: "رهان کافه رستوران",
    description: "راهکار جامع مدیریت رستوران و کافه‌ها",
    image: "/erp01.jpg",
    slug: "cafe",
  },
  {
    name: "رهان پوشاک",
    description: "سیستم مدیریت فروشگاه‌های پوشاک و لباس",
    image: "/erp01.jpg",
    slug: "clothing",
  },
];

export default function Software() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavigationMenuDemo />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#4f89c9] mb-4">
              محصولات رهان
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مجموعه کامل راهکارهای مدیریت سازمانی و فروشگاهی برای انواع کسب‌وکار
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* لیست محصولات */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative mb-8"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="جستجو در محصولات..."
                  className="pl-12 pr-6 py-6 text-lg rounded-2xl shadow-md border-0 focus:ring-4 focus:ring-[#4f89c9]/20"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p, i) => (
                      <motion.div
                        key={p.slug}
                        layout
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-8">
                          <h2 className="text-2xl font-bold mb-3 text-[#4f89c9]">{p.name}</h2>
                          <p className="text-muted-foreground leading-relaxed mb-8">{p.description}</p>
                          <Button
                            asChild
                            className="w-full py-6 text-lg font-semibold bg-[#4f89c9] hover:bg-[#4f89c9]/90 rounded-2xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                          >
                            <Link href={`/${p.slug}`}>
                              جزئیات بیشتر
                              <ArrowLeft className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full text-center py-20"
                    >
                      <p className="text-2xl text-muted-foreground">محصولی یافت نشد</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* سایدبار فیلتر - sticky */}
            <motion.aside
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 lg:order-2 lg:sticky lg:top-24 h-fit"
            >
              <div className="bg-card rounded-3xl p-8 shadow-xl border">
                <h3 className="text-2xl font-bold mb-8 text-[#4f89c9]">فیلتر محصولات</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium mb-3">نوع محصول</label>
                    <select className="w-full p-4 rounded-2xl border bg-background focus:ring-4 focus:ring-[#4f89c9]/20 focus:border-[#4f89c9] transition">
                      <option value="">همه محصولات</option>
                      <option value="erp">رهان ERP</option>
                      <option value="eco">رهان ECO</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-medium mb-3">سطح سازمانی</label>
                    <select className="w-full p-4 rounded-2xl border bg-background focus:ring-4 focus:ring-[#4f89c9]/20 focus:border-[#4f89c9] transition">
                      <option value="">همه سطوح</option>
                      <option value="small">سطح پایه</option>
                      <option value="medium">سطح حرفه‌ای</option>
                      <option value="enterprise">سطح سازمانی</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}