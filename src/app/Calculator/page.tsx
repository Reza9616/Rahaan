"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
import { Check, Minus, Plus, ShoppingCart, X } from "lucide-react";
import Invoice, { InvoiceData } from "@/app/(main)/components/Invoice";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface Module { name: string; price: number; }
interface PackageLevel { name: string; modules: string[]; }
interface Package { name: string; modules: Module[]; levels?: PackageLevel[]; }
interface Feature { name: string; price: number; count: number; max?: number; }

// Data
const packages: Package[] = [
  {
    name: "رهان سازمانی",
    modules: [
      { name: "حسابداری", price: 10000000 },
      { name: "خزانه", price: 14000000 },
      { name: "خرید", price: 30000000 },
      { name: "فروش", price: 35000000 },
      { name: "انبار", price: 25000000 },
      { name: "پرسنلی", price: 15000000 },
      { name: "حقوق و دستمزد", price: 30000000 },
      { name: "تولید", price: 61000000 },
      { name: "باسکول", price: 10000000 },
      { name: "دارایی ثابت", price: 25000000 },
      { name: "تعمیرات و نگهداری", price: 15000000 },
      { name: "بهای تمام شده", price: 55000000 },
    ],
    levels: [
      { name: "سطح سه", modules: ["حسابداری","خزانه","خرید","فروش","انبار"] },
      { name: "سطح دو", modules: ["حسابداری","خزانه","خرید","فروش","انبار","حقوق و دستمزد","پرسنلی","دارایی ثابت"] },
      { name: "سطح یک", modules: ["حسابداری","خزانه","خرید","فروش","انبار","حقوق و دستمزد","پرسنلی","تولید","بهای تمام شده","تعمیرات و نگهداری","باسکول","دارایی ثابت"] },
    ],
  },
  {
    name: "رهان صنعتی و بازرگانی",
    modules: [
      { name: "حسابداری", price: 7000000 },
      { name: "خزانه", price: 12000000 },
      { name: "خرید", price: 8000000 },
      { name: "فروش", price: 9500000 },
      { name: "انبار", price: 8000000 },
      { name: "پرسنلی", price: 10000000 },
      { name: "حقوق و دستمزد", price: 25000000 },
      { name: "تولید", price: 45000000 },
      { name: "باسکول", price: 8000000 },
      { name: "دارایی ثابت", price: 25000000 },
      { name: "بهای تمام شده", price: 55000000 },
    ],
    levels: [
      { name: "سطح سه", modules: ["حسابداری","خزانه","خرید","فروش","انبار"] },
      { name: "سطح دو", modules: ["حسابداری","خزانه","خرید","فروش","انبار","حقوق و دستمزد","پرسنلی","دارایی ثابت"] },
      { name: "سطح یک", modules: ["حسابداری","خزانه","خرید","فروش","انبار","حقوق و دستمزد","پرسنلی","تولید","بهای تمام شده","تعمیرات و نگهداری","باسکول","دارایی ثابت"] },
    ],
  },
  {
    name: "رهان استورها",
    modules: [
      { name: "رهان عمومی", price: 6000000 },
      { name: "رهان طلا و جواهر", price: 35000000 },
      { name: "رهان پوشاک", price: 8000000 },
      { name: "رهان کافه رستوران", price: 12000000 },
      { name: "رهان سالن‌های زیبایی", price: 12000000 },
    ],
  },
];

const initialFeatures: Feature[] = [
  { name: "تعداد کاربران", price: 5000000, count: 1, max: 10 },
  { name: "سامانه مودیان", price: 6000000, count: 0, max: 1 },
  { name: "چند شرکت همزمان", price: 3000000, count: 0 },
  { name: "سامانه موبایل", price: 0, count: 0 },
  { name: "خدمات استقرار و آموزش", price: 1000000, count: 0 },
];

// Constants
const VAT_RATE = 0.1;
const SIDEBAR_WIDTH = 420;
const MOBILE_BREAKPOINT = 'lg';
const ANIMATION_DURATION = 0.3;

// Component
export default function CalculatorPage() {
  // State 
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<PackageLevel | null>(null);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);
  const [showPreview, setShowPreview] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
const handleScroll = useCallback(() => {
  if (!sidebarRef.current || !footerRef.current) return;
  
  const sidebarRect = sidebarRef.current.getBoundingClientRect();
  const footerRect = footerRef.current.getBoundingClientRect();
  const gap = 32;
  const stopPoint = footerRect.top - sidebarRect.height - gap;
  setOffset(Math.max(stopPoint, 0));
}, []);

useEffect(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [handleScroll]);
  // Refs
  const sidebarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  // Hooks
  const router = useRouter();
  const { addToCart } = useCart();

  // Initialization
  useEffect(() => {
    if (packages.length > 0 && !isInitialized) {
      const initialPackage = packages[0];
      setSelectedPackage(initialPackage);
      setSelectedLevel(initialPackage.levels?.[0] ?? null);
      setSelectedModules(initialPackage.levels?.[0]?.modules ?? []);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Module selection
  useEffect(() => {
    if (selectedLevel && selectedPackage) {
      setSelectedModules(selectedLevel.modules);
    } else {
      setSelectedModules([]);
    }
  }, [selectedLevel, selectedPackage]);

  // Sticky sidebar
  useEffect(() => {
    footerRef.current = document.querySelector("footer");
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoized calculations
  const modulesPrice = useMemo(() => 
    selectedPackage?.modules
      ?.filter(m => selectedModules.includes(m.name))
      .reduce((sum, m) => sum + m.price, 0) ?? 0, 
    [selectedPackage, selectedModules]
  );

  const featuresPrice = useMemo(() => 
    features.reduce((sum, f) => sum + f.price * f.count, 0), 
    [features]
  );

  const totalPrice = useMemo(() => modulesPrice + featuresPrice, [modulesPrice, featuresPrice]);
  const vat = useMemo(() => Math.round(totalPrice * VAT_RATE), [totalPrice]);
  const finalTotal = useMemo(() => totalPrice + vat, [totalPrice, vat]);
  
  const currentDate = useMemo(() => new Date().toLocaleDateString("fa-IR"), []);

  // Event handlers
  const toggleModule = useCallback((name: string) => {
    setSelectedModules(prev => 
      prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]
    );
  }, []);

  const changeFeature = useCallback((index: number, delta: number) => {
    setFeatures(prev => prev.map((f, i) => {
      if (i !== index) return f;
      const newCount = f.count + delta;
      if (f.max !== undefined && newCount > f.max) return f;
      return { ...f, count: Math.max(0, newCount) };
    }));
  }, []);

  const handlePackageSelect = useCallback((pkg: Package) => {
    setSelectedPackage(pkg);
    setSelectedLevel(pkg.levels?.[0] ?? null);
  }, []);

  const handleLevelSelect = useCallback((level: PackageLevel) => {
    setSelectedLevel(level);
  }, []);

  const openPreview = useCallback(() => {
    if (!selectedPackage) return;

    const invoice: InvoiceData = {
      date: currentDate,
      number: `RAH-${Date.now().toString().slice(-6)}`,
      items: [
        ...selectedModules.map(m => {
          const mod = selectedPackage.modules.find(mod => mod.name === m);
          return { desc: m, qty: 1, price: mod?.price || 0 };
        }),
        ...features.filter(f => f.count > 0).map(f => ({ 
          desc: `${f.name} × ${f.count}`, 
          qty: 1, 
          price: f.price * f.count 
        })),
        { desc: "مالیات بر ارزش افزوده (۱۰%)", qty: 1, price: vat }
      ],
      total: finalTotal
    };
    
    setShowPreview(true);
  }, [selectedPackage, selectedModules, features, currentDate, vat, finalTotal]);

  const proceedToCart = useCallback(() => {
    if (!selectedPackage || totalPrice === 0) return;

    const cartItem = {
      packageName: selectedPackage.name,
      modules: selectedModules.map(name => {
        const mod = selectedPackage.modules.find(m => m.name === name)!;
        return { ...mod, qty: 1 };
      }),
      features: features.filter(f => f.count > 0).map(f => ({
        name: f.name,
        price: f.price,
        count: f.count
      })),
      total: finalTotal,
      date: currentDate
    };

    addToCart(cartItem);
    router.push("/CartPage");
  }, [selectedPackage, selectedModules, features, totalPrice, finalTotal, currentDate, addToCart, router]);

  const closePreview = useCallback(() => {
    setShowPreview(false);
  }, []);

  // Loading state
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <motion.div 
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-[#4f89c9]/20 border-t-[#4f89c9] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600">در حال بارگذاری...</p>
        </motion.div>
      </div>
    );
  }

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: ANIMATION_DURATION }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
  };

  return (
    <>
      <NavigationMenuDemo />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
          
          {/* Main Content */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12 lg:space-y-16"
          >
            
            {/* Package Selection */}
            <section className="text-center">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-[#4f89c9] to-indigo-600 bg-clip-text text-transparent"
              >
                انتخاب بسته نرم‌افزاری
              </motion.h1>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {packages.map((pkg, index) => {
                  const isSelected = selectedPackage?.name === pkg.name;
                  return (
                    <motion.div
                      key={pkg.name}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => handlePackageSelect(pkg)}
                      className={`relative cursor-pointer rounded-3xl p-6 lg:p-8 border-2 transition-all duration-300 group ${
                        isSelected 
                          ? "bg-[#4f89c9] text-white border-[#4f89c9] shadow-2xl scale-105" 
                          : "bg-white border-slate-200 hover:border-[#4f89c9]/50 hover:shadow-xl"
                      }`}
                      style={{
                        background: isSelected 
                          ? "linear-gradient(135deg, #4f89c9 0%, #667eea 100%)"
                          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
                      }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">{pkg.name}</h3>
                        <p className="text-sm lg:text-base opacity-80">
                          {pkg.levels ? "دارای سطح‌بندی" : "بدون سطح‌بندی"}
                        </p>
                        <p className="text-xs lg:text-sm opacity-60 mt-1">
                          {pkg.modules.length} ماژول
                        </p>
                      </div>
                      
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute top-4 left-4 w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center"
                        >
                          <Check className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Level Selection */}
              <AnimatePresence mode="wait">
                {selectedPackage?.levels && (
                  <motion.div 
                    key="levels"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-wrap justify-center gap-3 lg:gap-4 mt-8"
                  >
                    {selectedPackage.levels.map((level, index) => {
                      const isActive = selectedLevel?.name === level.name;
                      return (
                        <motion.button
                          key={level.name}
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => handleLevelSelect(level)}
                          className={`px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-bold text-base lg:text-lg transition-all ${
                            isActive 
                              ? "bg-[#4f89c9] text-white shadow-lg" 
                              : "bg-white border-2 border-slate-200 hover:border-[#4f89c9] hover:shadow-md"
                          }`}
                          style={{
                            background: isActive 
                              ? "linear-gradient(135deg, #4f89c9 0%, #667eea 100%)"
                              : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
                          }}
                        >
                          {level.name}
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Modules Selection */}
            <motion.section 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100/50 p-6 lg:p-8"
            >
              <div className="flex flex-wrap justify-between items-center mb-6 lg:mb-8 gap-4">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl lg:text-3xl font-bold text-slate-800"
                >
                  ماژول‌های انتخابی
                </motion.h2>
                <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xl text-slate-500 font-medium"
                >
                  {selectedModules.length} ماژول
                </motion.span>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
              >
{selectedPackage?.modules.map((module) => {
  const isActive = selectedModules.includes(module.name);
  return (
    <motion.button
      key={module.name}
      layout
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={() => toggleModule(module.name)}
      className={`relative p-4 lg:p-6 rounded-2xl border-2 overflow-hidden transition-all duration-300 group ${
        isActive 
          ? "text-white border-[#4f89c9] shadow-lg" 
          : "bg-slate-50 border-slate-200 hover:border-[#4f89c9] hover:shadow-md"
      }`}
      style={{
        background: isActive 
          ? "linear-gradient(135deg, #4f89c9 0%, #667eea 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
      }}
    >
      <div className="relative z-10 flex justify-between items-center">
        <span className={`font-semibold text-base lg:text-lg leading-tight ${isActive ? 'text-white' : 'text-slate-800'}`}>
          {module.name}
        </span>
        <span className={`text-sm lg:text-base opacity-80 font-medium ${isActive ? 'text-white/90' : 'text-slate-600'}`}>
          {module.price.toLocaleString()} تومان
        </span>
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            className="absolute top-3 right-3 w-6 h-6 lg:w-7 lg:h-7 bg-white/20 rounded-full flex items-center justify-center"
          >
            <Check className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
})}
       </motion.div>
            </motion.section>

            {/* Features Selection */}
            <motion.section 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100/50 p-6 lg:p-8"
            >
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-slate-800"
              >
                امکانات جانبی
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 lg:space-y-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    layout
                    variants={buttonVariants}
                    whileHover="hover"
                    className="flex justify-between items-center bg-slate-50/80 rounded-2xl p-4 lg:p-6 border border-slate-200/50"
                  >
                    <div className="flex-1">
                      <span className="font-semibold text-base lg:text-lg text-slate-800">
                        {feature.name}
                      </span>
                      {feature.price > 0 && (
                        <span className="text-slate-500 ml-3 text-sm lg:text-base">
                          ({feature.price.toLocaleString()} تومان)
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 lg:gap-4">
                      <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => changeFeature(index, -1)}
                        disabled={feature.count === 0}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
                      </motion.button>
                      
                      <motion.span
                        layout
                        className="w-12 lg:w-16 text-center text-2xl lg:text-3xl font-bold text-[#4f89c9]"
                      >
                        {feature.count}
                      </motion.span>
                      
                      <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => changeFeature(index, 1)}
                        disabled={feature.max !== undefined && feature.count >= feature.max}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#4f89c9] text-white shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, #4f89c9 0%, #667eea 100%)"
                        }}
                      >
                        <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

          </motion.section>

          {/* Sticky Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <motion.div
              ref={sidebarRef}
              className="sticky top-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 lg:p-8 border border-slate-100/50 space-y-6 lg:space-y-8"
              style={{ transform: `translateY(${offset}px)` }}
            >
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-[#4f89c9] to-indigo-600 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800">خلاصه سفارش</h3>
              </motion.div>

              {/* Price Breakdown */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 lg:space-y-5 text-base lg:text-lg"
              >
                <div className="flex justify-between py-2">
                  <span className="text-slate-600">ماژول‌ها</span>
                  <span className="font-semibold text-slate-800">
                    {modulesPrice.toLocaleString()} تومان
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-600">امکانات جانبی</span>
                  <span className="font-semibold text-slate-800">
                    {featuresPrice.toLocaleString()} تومان
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-600">مالیات (۱۰٪)</span>
                  <span className="font-semibold text-slate-800">
                    {vat.toLocaleString()} تومان
                  </span>
                </div>
              </motion.div>

              {/* Total */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border-t-2 pt-4 lg:pt-6"
              >
                <div className="flex justify-between items-center text-2xl lg:text-3xl font-black mb-4">
                  <span className="text-slate-700">مبلغ قابل پرداخت</span>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gradient-to-r from-[#4f89c9] to-indigo-600 bg-clip-text text-transparent"
                  >
                    {finalTotal.toLocaleString()} تومان
                  </motion.span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={proceedToCart}
                  disabled={totalPrice === 0}
                  className="w-full py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-[#4f89c9] to-indigo-600 text-white font-bold text-lg lg:text-xl shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #4f89c9 0%, #667eea 100%)"
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  ادامه فرایند خرید
                </motion.button>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={openPreview}
                  className="w-full py-3 lg:py-4 rounded-2xl border-2 border-[#4f89c9] text-[#4f89c9] font-bold text-base lg:text-lg hover:bg-[#4f89c9]/5 transition-all flex items-center justify-center gap-2"
                >
                  <div className="w-5 h-5">
                    📋
                  </div>
                  پیش‌نمایش فاکتور
                </motion.button>
              </div>
            </motion.div>
          </motion.aside>

        </div>

        {/* Mobile Bottom Bar */}
        <AnimatePresence>
          {totalPrice > 0 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-4 lg:p-6 z-40"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-800">مبلغ قابل پرداخت</span>
                  <span className="text-xl font-black text-[#4f89c9]">
                    {finalTotal.toLocaleString()} تومان
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={openPreview}
                    className="flex-1 py-3 rounded-xl border border-[#4f89c9] text-[#4f89c9] font-bold text-sm hover:bg-[#4f89c9]/5 transition-all"
                  >
                    پیش‌نمایش
                  </motion.button>
                  
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={proceedToCart}
                    disabled={totalPrice === 0}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#4f89c9] to-indigo-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, #4f89c9 0%, #667eea 100%)"
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    خرید
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Invoice Preview Modal */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: ANIMATION_DURATION }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closePreview}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-800">پیش‌نمایش فاکتور</h3>
                    <motion.button
                      whileHover={{ scale: 0.95 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closePreview}
                      className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <X className="w-6 h-6 text-slate-500" />
                    </motion.button>
                  </div>
                  
                  <div className="max-h-[70vh] overflow-y-auto">
                    <Invoice 
                      data={{
                        date: currentDate,
                        number: `RAH-${Date.now().toString().slice(-6)}`,
                        items: [
                          ...selectedModules.map(m => {
                            const mod = selectedPackage!.modules.find(mod => mod.name === m);
                            return { desc: m, qty: 1, price: mod?.price || 0 };
                          }),
                          ...features.filter(f => f.count > 0).map(f => ({ 
                            desc: `${f.name} × ${f.count}`, 
                            qty: 1, 
                            price: f.price * f.count 
                          })),
                          { desc: "مالیات بر ارزش افزوده (۱۰%)", qty: 1, price: vat }
                        ],
                        total: finalTotal
                      }} 
                    />
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 pt-6 border-t border-slate-200"
                  >
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={closePreview}
                      className="w-full py-4 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                    >
                      <X className="w-5 h-5" />
                      بستن پیش‌نمایش
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}