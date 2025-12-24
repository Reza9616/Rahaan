"use client";

import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  KalaPuID: number;
  KalaName: string;
  KalaCod: number;
  KalaBarCode: string;
  KalaSellEnable: boolean;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => { setProducts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(p =>
    p.KalaName.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <>
        <NavigationMenuDemo />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-muted-foreground">در حال بارگذاری...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavigationMenuDemo />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-[#4f89c9] mb-12"
          >
            فروشگاه محصولات
          </motion.h1>

          <div className="grid lg:grid-cols-[340px_1fr] gap-12">
            {/* سایدبار فیلتر */}
            <motion.aside
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <div className="bg-card rounded-3xl p-8 shadow-2xl border">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#4f89c9]">
                  <Filter className="w-7 h-7" /> فیلتر محصولات
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium mb-3">جستجو</label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        placeholder="نام محصول..."
                        className="pl-12 py-6 rounded-2xl"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>
                  <ProductFilter />
                </div>
              </div>
            </motion.aside>

            {/* لیست محصولات */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p, i) => (
                      <motion.div
                        key={p.KalaPuID}
                        layout
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 80 }}
                        whileHover={{ y: -12 }}
                        className="group bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                      >
                        <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-6xl font-thin text-gray-400">
                            تصویر
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                        </div>
                        <div className="p-7">
                          <h2 className="text-xl font-bold mb-3 text-[#4f89c9] line-clamp-2">{p.KalaName}</h2>
                          <p className="text-muted-foreground mb-6">کد: {p.KalaCod}</p>
                          <Button
                            onClick={() => alert(`${p.KalaName} به سبد خرید اضافه شد!`)}
                            className="w-full py-6 text-lg font-semibold bg-[#4f89c9] hover:bg-[#4f89c9]/90 rounded-2xl flex items-center justify-center gap-3"
                          >
                            <ShoppingCart className="w-5 h-5" />
                            افزودن به سبد خرید
                          </Button>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full text-center text-2xl text-muted-foreground py-20"
                    >
                      محصولی یافت نشد
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProductFilter() {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-lg font-medium mb-3">وضعیت فروش</label>
        <select className="w-full p-4 rounded-2xl border bg-background focus:ring-4 focus:ring-[#4f89c9]/20">
          <option value="">همه</option>
          <option value="available">موجود</option>
          <option value="unavailable">ناموجود</option>
        </select>
      </div>
      <div>
        <label className="block text-lg font-medium mb-3">دسته‌بندی</label>
        <select className="w-full p-4 rounded-2xl border bg-background focus:ring-4 focus:ring-[#4f89c9]/20">
          <option value="">همه دسته‌ها</option>
          <option value="1">دسته ۱</option>
          <option value="2">دسته ۲</option>
        </select>
      </div>
    </div>
  );
}