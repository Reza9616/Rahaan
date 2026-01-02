"use client";

import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { Search, ShoppingCart, Filter, Check, Building2, Sparkles, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useCart, Module } from "@/context/CartContext";

interface Product {
  KalaPuID: number;
  KalaName: string;
  KalaCod: number;
  KalaType: number;
  KalaGroup: number;
  Price: number;
  image?: string; // اختیاری
}

const PRODUCT_TYPES = [
  { id: 1, label: "سازمانی" },
  { id: 2, label: "شرکتی" },
  { id: 3, label: "فروشگاهی" },
];

const PRODUCT_TAGS = [
  { id: 10, label: "موبایل" },
  { id: 20, label: "نرم‌افزار" },
  { id: 30, label: "سرویس" },
];

const LEVELS = [
  { id: "all", label: "همه", icon: LayoutGrid },
  { id: "small", label: "پایه", icon: Sparkles },
  { id: "medium", label: "حرفه‌ای", icon: Building2 },
  { id: "enterprise", label: "سازمانی", icon: Building2 },
];

export default function ProductsPage() {
  const { cart, setCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [type, setType] = useState<number | null>(null);
  const [tag, setTag] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState("all");

  // ===== اضافه کردن محصول به سبد خرید =====
  const addModuleToCart = (product: Product) => {
    const module: Module = {
      name: product.KalaName,
      price: product.Price,
      qty: 1,
      puid: product.KalaPuID,
    };

    setCart(prev => {
      // بررسی تکراری بودن محصول
      const existing = prev.modules.find(m => m.puid === module.puid);
      const updatedModules = existing
        ? prev.modules.map(m => m.puid === module.puid ? { ...m, qty: m.qty + 1 } : m)
        : [...prev.modules, module];

      return { ...prev, modules: updatedModules };
    });
  };

  // ===== بارگذاری محصولات =====
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (type) params.append("type", type.toString());
    if (tag) params.append("tag", tag.toString());
    if (selectedLevel && selectedLevel !== "all") params.append("level", selectedLevel);

    fetch(`/api/getallproduct?${params.toString()}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
  }, [type, tag, selectedLevel]);

  const filtered = products.filter(p =>
    p.KalaName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavigationMenuDemo />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4f89c9]/5 to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#4f89c9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="mt-10 max-w-7xl mx-auto px-6 pt-20 pb-12 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4f89c9]/10 text-[#4f89c9] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-[#4f89c9]" /> مجموعه کامل قطعات سخت افزاری
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-l from-[#4f89c9] via-[#4f89c9] to-[#4f89c9] bg-clip-text text-transparent">رهان</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#4f89c9] max-w-3xl mx-auto leading-relaxed">قطعات سخت افزاری</p>
          </motion.div>
        </div>
      </section>

      <main dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-6 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_340px] gap-10">

          {/* ===== Products Grid ===== */}
          <div>
            <div className="relative mb-8">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="جستجو در محصولات..."
                className="pr-12 py-6 rounded-2xl bg-white shadow"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {loading ? (
                  <p className="col-span-full text-center text-slate-400 py-20">در حال بارگذاری...</p>
                ) : filtered.length ? (
                  filtered.map(p => (
                    <motion.div
                      key={p.KalaPuID}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                      className="relative bg-white rounded-3xl shadow-lg transition-all"
                    >
                      {p.Price > 0 && (
                        <div className="absolute top-4 left-4 bg-emerald-500 text-white text-sm font-bold px-4 py-1 rounded-xl">
                          {p.Price.toLocaleString("fa-IR")} تومان
                        </div>
                      )}
                  <div className="relative overflow-hidden rounded-t-3xl group cursor-pointer">
  <img 
    src={p.image || "https://img.freepik.com/premium-photo/computer-components-black-background_160097-299.jpg"} // عکس واقعی پیش‌فرض
    alt={p.KalaName}
    className="w-full h-48 object-cover transition-all duration-300 group-hover:brightness-90 group-hover:scale-105"
  />
  
  {/* حاشیه گرادیانت مشکی از پایین هنگام hover */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

  {/* توضیحات روی حاشیه هنگام hover */}
  <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
    <p className="font-semibold">{p.KalaName}</p>
    <p className="text-xs opacity-90">کد کالا: {p.KalaCod}</p>
  </div>
</div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-[#4f89c9] mb-2">{p.KalaName}</h3>
                        <p className="text-sm text-slate-500 mb-4">کد کالا: {p.KalaCod}</p>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addModuleToCart(p)}
                          className="w-full py-5 rounded-2xl bg-[#4f89c9] text-white flex gap-2 justify-center font-semibold"
                        >
                          <ShoppingCart className="w-5 h-5" /> افزودن به سبد خرید
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="col-span-full text-center text-slate-400 py-20">محصولی یافت نشد</p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ===== Filters Sidebar ===== */}
          <aside className="sticky top-8 h-fit space-y-6">
            {/* نوع و دسته‌بندی */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white">
              <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                <Filter className="text-[#4f89c9]" /> فیلتر محصولات
              </h4>
              <div className="mb-6">
                <h5 className="font-bold mb-2">نوع محصول</h5>
                <div className="grid grid-cols-2 gap-3">
                  {PRODUCT_TYPES.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`p-3 rounded-xl border text-sm font-semibold ${
                        type === t.id ? "border-[#4f89c9] bg-[#4f89c9]/10 text-[#4f89c9]" : "border-slate-200 text-slate-600"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                  <button onClick={() => setType(null)} className="col-span-2 text-sm text-slate-400 hover:text-red-500">
                    حذف فیلتر نوع
                  </button>
                </div>
              </div>

              <div>
                <h5 className="font-bold mb-2">دسته‌بندی</h5>
                <div className="flex flex-wrap gap-2">
                  {PRODUCT_TAGS.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTag(t.id)}
                      className={`px-4 py-2 rounded-xl text-sm ${
                        tag === t.id ? "bg-gradient-to-l from-[#4f89c9] to-indigo-600 text-white shadow" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                {tag && (
                  <button onClick={() => setTag(null)} className="mt-2 text-sm text-slate-400 hover:text-red-500">
                    حذف فیلتر دسته‌بندی
                  </button>
                )}
              </div>
            </div>

            {/* Levels */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4f89c9] to-indigo-600 flex items-center justify-center">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">سطح سازمانی</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {LEVELS.map(level => {
                  const LevelIcon = level.icon;
                  return (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`relative p-4 rounded-2xl border-2 transition-all duration-300 ${
                        selectedLevel === level.id
                          ? "border-[#4f89c9] bg-[#4f89c9]/10 text-[#4f89c9]"
                          : "border-slate-200 hover:border-[#4f89c9]/50 text-slate-600"
                      }`}
                    >
                      {selectedLevel === level.id && (
                        <motion.div layoutId="levelIndicator" className="absolute top-2 left-2 w-5 h-5 rounded-full bg-[#4f89c9] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                      <LevelIcon className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-semibold">{level.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </>
  );
}
