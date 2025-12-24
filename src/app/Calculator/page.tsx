"use client";
import { useState, useEffect, useRef } from "react";
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
import { Check, Minus, Plus } from "lucide-react";
import Invoice, { InvoiceData } from "@/app/(main)/components/Invoice";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

/* -------------------- Types & Data -------------------- */
interface Module { name: string; price: number; }
interface PackageLevel { name: string; modules: string[]; }
interface Package { name: string; modules: Module[]; levels?: PackageLevel[]; }
interface Feature { name: string; price: number; count: number; max?: number; }

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

/* -------------------- Component -------------------- */
export default function CalculatorPage() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<PackageLevel | null>(null);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);
  const [previewData, setPreviewData] = useState<InvoiceData | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);
  const router = useRouter();
  const { addToCart } = useCart(); // اضافه شده برای افزودن به سبد خرید

  useEffect(() => {
    if (packages.length > 0) {
      setSelectedPackage(packages[0]);
      setSelectedLevel(packages[0].levels?.[0] ?? null);
      setSelectedModules(packages[0].levels?.[0]?.modules ?? []);
    }
  }, []);

  useEffect(() => {
    if (selectedLevel && selectedPackage) {
      setSelectedModules(selectedLevel.modules);
    } else {
      setSelectedModules([]);
    }
  }, [selectedLevel, selectedPackage]);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");
    const onScroll = () => {
      if (!sidebarRef.current || !footerRef.current) return;
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const footerRect = footerRef.current.getBoundingClientRect();
      const gap = 32;
      const stopPoint = footerRect.top - sidebarRect.height - gap;
      setOffset(stopPoint < 0 ? stopPoint : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleModule = (name: string) =>
    setSelectedModules(prev => prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]);

  const changeFeature = (index: number, delta: number) =>
    setFeatures(prev =>
      prev.map((f, i) => {
        if (i !== index) return f;
        const newCount = f.count + delta;
        if (f.max !== undefined && newCount > f.max) return f;
        return { ...f, count: Math.max(0, newCount) };
      })
    );

  if (!selectedPackage) return <div className="text-center py-20">در حال بارگذاری...</div>;

  const modulesPrice = selectedPackage.modules.filter(m => selectedModules.includes(m.name)).reduce((sum, m) => sum + m.price, 0);
  const featuresPrice = features.reduce((sum, f) => sum + f.price * f.count, 0);
  const totalPrice = modulesPrice + featuresPrice;
  const currentDate = new Date().toLocaleDateString("fa-IR");

  const openPreview = () => {
    const vat = Math.round(totalPrice * 0.1);
    const finalTotal = totalPrice + vat;
    const invoice: InvoiceData = {
      date: currentDate,
      number: `RAH-${Date.now().toString().slice(-6)}`,
      items: [
        ...selectedModules.map(m => {
          const mod = selectedPackage.modules.find(mod => mod.name === m);
          return { desc: m, qty: 1, price: mod?.price || 0 };
        }),
        ...features.filter(f => f.count > 0).map(f => ({ desc: `${f.name} × ${f.count}`, qty: 1, price: f.price * f.count })),
        { desc: "مالیات بر ارزش افزوده (۱۰%)", qty: 1, price: vat }
      ],
      total: finalTotal
    };
    setPreviewData(invoice);
  };

  // -------------------- تابع ادامه فرایند خرید --------------------
const proceedToCart = () => {
  addToCart({
    modules: selectedModules.map(name => {
      const mod = selectedPackage!.modules.find(m => m.name === name)!;
      return { ...mod, qty: 1 };
    }),
    features: features.filter(f => f.count > 0).map(f => ({
      name: f.name,
      price: f.price,
      count: f.count
    })),
  });

  router.push("/CartPage");
};

  return (
    <>
      <NavigationMenuDemo />

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/Boxes.png" alt="Pricing Calculator" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">محاسبه قیمت نرم‌افزار رهان</h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow">بسته و ماژول‌های دلخواه خود را انتخاب کنید</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 grid md:grid-cols-[1fr_380px] gap-8 md:gap-12">
        <div className="space-y-12">

          {/* Package Selection */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-bold" style={{color:"#4f89c9"}}>انتخاب بسته نرم‌افزاری</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {packages.map(pkg => {
                const isSelected = selectedPackage?.name === pkg.name;
                return (
                  <div
                    key={pkg.name}
                    onClick={() => { setSelectedPackage(pkg); setSelectedLevel(pkg.levels?.[0] ?? null); }}
                    className={`cursor-pointer flex flex-col justify-between w-full h-full p-5 md:p-6 rounded-2xl border transition-transform duration-300 ${isSelected ? "bg-[#4f89c9] text-white border-[#4f89c9] shadow-lg scale-105" : "bg-card border-muted hover:shadow-lg hover:scale-105"}`}
                  >
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1">{pkg.name}</h3>
                      <p className="text-sm md:text-base opacity-80">{pkg.levels ? "دارای سطح‌بندی" : "بدون سطح‌بندی"}</p>
                    </div>
                    {isSelected && <Check className="absolute top-3 right-3 w-6 h-6 md:w-7 md:h-7" />}
                  </div>
                );
              })}
            </div>

            {selectedPackage?.levels && (
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-3">
                {selectedPackage.levels.map(lvl => {
                  const isActive = selectedLevel?.name === lvl.name;
                  return (
                    <button
                      key={lvl.name}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-3 md:px-5 py-1 md:py-2 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base transition-all ${isActive ? "bg-[#4f89c9] text-white shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                    >
                      {lvl.name}
                    </button>
                  );
                })}
              </div>
            )}
          </section>

          {/* Modules */}
          <section className="bg-card border rounded-3xl p-6 md:p-8 shadow-lg">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold">ماژول‌های انتخابی</h3>
              <span className="text-muted-foreground">{selectedModules.length} ماژول</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedPackage.modules.map(mod => {
                const active = selectedModules.includes(mod.name);
                return (
                  <button
                    key={mod.name}
                    onClick={() => toggleModule(mod.name)}
                    className={`relative overflow-hidden p-4 md:p-6 rounded-2xl border-2 transition-all duration-500 group ${active ? "bg-[#4f89c9] text-white border-[#4f89c9] shadow-lg" : "bg-background hover:shadow-md border-muted"}`}
                  >
                    <div className={`absolute inset-0 bg-[#4f89c9] transition-transform duration-500 ${active ? "translate-x-0" : "-translate-x-full"}`} />
                    <div className="relative flex justify-between items-center">
                      <span className="font-medium text-base md:text-lg">{mod.name}</span>
                      <span className="text-sm md:text-base opacity-80">{mod.price.toLocaleString()} تومان</span>
                    </div>
                    {active && <Check className="absolute top-2 left-2 w-5 h-5 md:w-6 md:h-6" />}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Features */}
          <section className="bg-card border rounded-3xl p-6 md:p-8 shadow-lg space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold">امکانات جانبی</h3>
            {features.map((f, i) => (
              <div key={f.name} className="flex justify-between items-center bg-background rounded-2xl p-3 md:p-5 border">
                <span className="font-medium">
                  {f.name}{f.price > 0 && <span className="text-sm md:text-base text-muted-foreground mr-2">({f.price.toLocaleString()} تومان)</span>}
                </span>
                <div className="flex items-center gap-2 md:gap-4">
                  <button onClick={() => changeFeature(i, -1)} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition"><Minus className="w-4 h-4 md:w-5 md:h-5" /></button>
                  <span className="w-8 md:w-12 text-center font-bold text-base md:text-lg">{f.count}</span>
                  <button onClick={() => changeFeature(i, 1)} disabled={f.max !== undefined && f.count >= f.max} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#4f89c9] text-white hover:bg-[#4f89c9]/90 flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"><Plus className="w-4 h-4 md:w-5 md:h-5" /></button>
                </div>
              </div>
            ))}
          </section>

          {/* Preview */}
          <div className="space-y-4">
            {previewData && (
              <div className="mt-6">
                <Invoice data={previewData} />
                <button onClick={openPreview} className="w-full py-4 md:py-5 rounded-2xl font-bold text-white bg-[#4f89c9] hover:bg-[#4f89c9]/90 transition shadow-lg text-lg md:text-xl mt-4">افزودن به سبد خرید</button>
              </div>
            )}
          </div>

        </div>

        {/* Sidebar */}
        <aside className="hidden md:block relative">
          <div
            ref={sidebarRef}
            className="rounded-3xl border bg-card p-6 md:p-8 shadow-xl space-y-6 md:space-y-8 w-72 transition-transform duration-300"
            style={{ transform: `translateY(${offset}px)` }}
          >
            <h3 className="text-xl md:text-2xl font-bold">خلاصه سفارش</h3>
            <div className="space-y-2 md:space-y-4 text-base md:text-lg">
              <div className="flex justify-between"><span className="text-muted-foreground">ماژول‌ها</span><span>{modulesPrice.toLocaleString()} تومان</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">امکانات جانبی</span><span>{featuresPrice.toLocaleString()} تومان</span></div>
            </div>
            <div className="border-t-2 pt-4 md:pt-6">
              <div className="flex justify-between text-lg md:text-2xl font-bold">
                <span>مبلغ نهایی</span>
                <span>{totalPrice.toLocaleString()} تومان</span>
              </div>
            </div>
<button
  disabled={totalPrice === 0}
  onClick={proceedToCart}
  className="w-full py-3 md:py-5 rounded-2xl font-bold text-lg md:text-xl bg-[#4f89c9] text-white shadow-2xl hover:scale-105"
>
  ادامه فرایند خرید
</button>
          </div>
        </aside>

      </main>
      <Footer />
    </>
  );
}
