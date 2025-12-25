"use client";

import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Filter, X } from "lucide-react";
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
    fetch("/api/products")
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(p =>
    p.KalaName.toLowerCase().includes(search.toLowerCase())
  );

  const hasActiveFilters = search.length > 0;

  return (
    <>
      <NavigationMenuDemo />

      <main
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
        dir="rtl"
      >
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4f89c9]/5 to-transparent" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#4f89c9]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-l from-[#4f89c9] via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  فروشگاه محصولات
                </span>
              </h1>
              <p className="text-xl text-slate-600">
                لیست کامل کالاهای قابل فروش
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">

            {/* Products */}
            <div className="order-2 lg:order-1">
              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="relative">
                  <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    placeholder="جستجو در محصولات..."
                    className="pr-14 pl-6 py-7 text-lg rounded-2xl bg-white/80 backdrop-blur border shadow-lg"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-slate-500">
                    <span className="font-bold text-[#4f89c9]">
                      {filteredProducts.length}
                    </span>{" "}
                    کالا یافت شد
                  </p>

                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearch("")}
                      className="text-slate-500 hover:text-red-500"
                    >
                      <X className="w-4 h-4 ml-1" />
                      پاک کردن جستجو
                    </Button>
                  )}
                </div>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {loading ? (
                    <motion.p className="col-span-full text-center text-xl text-slate-400 py-20">
                      در حال بارگذاری...
                    </motion.p>
                  ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((p, i) => (
                      <motion.div
                        key={p.KalaPuID}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all"
                      >
                        <div className="h-56 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 text-3xl">
                          تصویر
                        </div>

                        <div className="p-6">
                          <h2 className="text-xl font-bold text-[#4f89c9] mb-2 line-clamp-2">
                            {p.KalaName}
                          </h2>
                          <p className="text-slate-500 mb-6">
                            کد کالا: {p.KalaCod}
                          </p>

                          <Button
                            className="w-full py-6 rounded-2xl bg-[#4f89c9] hover:bg-[#4f89c9]/90 text-lg font-semibold flex gap-3"
                            onClick={() =>
                              alert(`${p.KalaName} به سبد خرید اضافه شد`)
                            }
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
                      className="col-span-full text-center text-2xl text-slate-400 py-20"
                    >
                      محصولی یافت نشد
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 lg:sticky lg:top-8 h-fit"
            >
              <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4f89c9] to-indigo-600 flex items-center justify-center">
                    <Filter className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">فیلترها</h3>
                </div>

                <ProductFilter />
              </div>
            </motion.aside>
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
        <label className="block mb-2 font-medium">وضعیت فروش</label>
        <select className="w-full p-4 rounded-2xl border bg-background focus:ring-4 focus:ring-[#4f89c9]/20">
          <option>همه</option>
          <option>موجود</option>
          <option>ناموجود</option>
        </select>
      </div>
    </div>
  );
}
