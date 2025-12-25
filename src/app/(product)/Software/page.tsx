"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ArrowLeft, 
  Sparkles,
  Building2,
  ShoppingBag,
  Coffee,
  Gem,
  Shirt,
  LayoutGrid,
  Leaf,
  Filter,
  X,
  Check
} from "lucide-react";
import Link from "next/link"; 
import { motion, AnimatePresence } from "framer-motion";
import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";

const products = [
  {
    name: "رهان ERP",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها با قابلیت یکپارچه‌سازی کامل",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "erp",
    icon: Building2,
    color: "from-blue-500 to-indigo-600",
    level: "enterprise",
    tags: ["سازمانی", "هلدینگ"]
  },
  {
    name: "رهان ECO",
    description: "سیستم مدیریت زیست‌محیطی و پایداری برای سازمان‌های پیشرو",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    slug: "eco",
    icon: Leaf,
    color: "from-emerald-500 to-teal-600",
    level: "medium",
    tags: ["محیط زیست", "پایداری"]
  },
  {
    name: "رهان STORE",
    description: "راهکار جامع مدیریت فروشگاه‌ها با سیستم صندوق و انبارداری هوشمند",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    slug: "store",
    icon: ShoppingBag,
    color: "from-orange-500 to-amber-600",
    level: "small",
    tags: ["فروشگاه", "خرده‌فروشی"]
  },
  {
    name: "رهان عمومی",
    description: "راهکار جامع مدیریت عمومی سازمان‌ها با انعطاف‌پذیری بالا",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    slug: "general",
    icon: LayoutGrid,
    color: "from-violet-500 to-purple-600",
    level: "medium",
    tags: ["عمومی", "چندمنظوره"]
  },
  {
    name: "رهان طلا و جواهر",
    description: "مدیریت حرفه‌ای فروش، موجودی و قیمت‌گذاری طلا و جواهرات",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    slug: "gold",
    icon: Gem,
    color: "from-yellow-500 to-orange-500",
    level: "medium",
    tags: ["طلا", "جواهرات"]
  },
  {
    name: "رهان کافه رستوران",
    description: "سیستم جامع مدیریت سفارشات، منو و پرسنل کافه و رستوران",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    slug: "cafe",
    icon: Coffee,
    color: "from-rose-500 to-pink-600",
    level: "small",
    tags: ["کافه", "رستوران"]
  },
  {
    name: "رهان پوشاک",
    description: "سیستم مدیریت موجودی، سایزبندی و فروش فروشگاه‌های پوشاک",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    slug: "clothing",
    icon: Shirt,
    color: "from-cyan-500 to-blue-600",
    level: "small",
    tags: ["پوشاک", "مد"]
  },
];

const levels = [
  { id: "all", label: "همه", icon: LayoutGrid },
  { id: "small", label: "پایه", icon: Sparkles },
  { id: "medium", label: "حرفه‌ای", icon: Building2 },
  { id: "enterprise", label: "سازمانی", icon: Building2 },
];

export default function Software() {
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all"); 

  const allTags = [...new Set(products.flatMap(p => p.tags))];
const [selectedTags, setSelectedTags] = useState<string[]>([]);
const toggleTag = (tag: string) => {
  setSelectedTags(prev =>
    prev.includes(tag)
      ? prev.filter(t => t !== tag)
      : [...prev, tag]
  );
};

  const clearFilters = () => {
    setSearch("");
    setSelectedLevel("all");
    setSelectedTags([]);
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesLevel = selectedLevel === "all" || p.level === selectedLevel;
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => p.tags.includes(tag));
    return matchesSearch && matchesLevel && matchesTags;
  });

  const hasActiveFilters = search || selectedLevel !== "all" || selectedTags.length > 0;

  return (
    <>
            <NavigationMenuDemo />
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4f89c9]/5 to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#4f89c9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4f89c9]/10 text-[#4f89c9] text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              مجموعه کامل راهکارهای نرم‌افزاری
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-l from-[#4f89c9] via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                نرم افزار های رهان
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              راهکارهای هوشمند مدیریت کسب‌وکار برای رشد و موفقیت شما
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          
          {/* Products Grid */}
          <div className="order-2 lg:order-1">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mb-8"
            >
              <div className="relative">
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="جستجو در محصولات..."
                  className="pr-14 pl-6 py-7 text-lg rounded-2xl bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-lg shadow-slate-200/50 focus:ring-4 focus:ring-[#4f89c9]/20 focus:border-[#4f89c9] transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              
              {/* Results count */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-slate-500">
                  <span className="font-bold text-[#4f89c9]">{filteredProducts.length}</span> محصول یافت شد
                </p>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-slate-500 hover:text-red-500"
                  >
                    <X className="w-4 h-4 ml-1" />
                    پاک کردن فیلترها
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p, i) => (
                    <motion.div
                      key={p.slug}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    ><Link href={`/software/${p.slug}`} className="block group">
                        <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-[#4f89c9]/20 transition-all duration-500 hover:-translate-y-2">
                          {/* Image */}
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            
                            {/* Icon Badge */}
                            <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg`}>
                              <p.icon className="w-6 h-6 text-white" />
                            </div>
                            
                            {/* Tags */}
                            <div className="absolute bottom-4 right-4 flex gap-2">
                              {p.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-6">
                            <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-[#4f89c9] transition-colors">
                              {p.name}
                            </h2>
                            <p className="text-slate-500 leading-relaxed mb-6 line-clamp-2">
                              {p.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${p.color} text-white text-sm font-semibold shadow-lg group-hover:shadow-xl transition-shadow`}>
                                مشاهده جزئیات
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                              </div>
                              
                              <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                                {levels.find(l => l.id === p.level)?.label}
                              </Badge>
                            </div>
                          </div>
                          
                          {/* Hover Glow Effect */}
                          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${p.color} mix-blend-overlay`} style={{ opacity: 0.05 }} />
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full"
                  >
                    <div className="text-center py-20 bg-white/60 backdrop-blur-sm rounded-3xl">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
                        <Search className="w-10 h-10 text-slate-300" />
                      </div>
                      <p className="text-2xl font-bold text-slate-400 mb-2">محصولی یافت نشد</p>
                      <p className="text-slate-400">فیلترهای خود را تغییر دهید</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 lg:sticky lg:top-8 h-fit space-y-6"
          >
            {/* Level Filter */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4f89c9] to-indigo-600 flex items-center justify-center">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">سطح سازمانی</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {levels.map((level) => (
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
                      <motion.div
                        layoutId="levelIndicator"
                        className="absolute top-2 left-2 w-5 h-5 rounded-full bg-[#4f89c9] flex items-center justify-center"
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                    <level.icon className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-semibold">{level.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-white">
              <h3 className="text-xl font-bold text-slate-800 mb-6">دسته‌بندی سریع</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedTags.includes(tag)
                        ? "bg-gradient-to-r from-[#4f89c9] to-indigo-600 text-white shadow-lg"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-[#4f89c9] to-indigo-600 rounded-3xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">چرا رهان؟</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-white/90">پشتیبانی ۲۴ ساعته</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-white/90">بروزرسانی رایگان</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-white/90">آموزش تخصصی</span>
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