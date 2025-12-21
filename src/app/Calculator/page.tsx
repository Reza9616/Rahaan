"use client";

import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
import jsPDF from "jspdf";

/* -------------------- Types -------------------- */
interface Module {
  name: string;
  price: number;
}

interface PackageLevel {
  name: string;
  modules: string[];
}

interface Package {
  name: string;
  modules: Module[];
  levels?: PackageLevel[];
}

interface Feature {
  name: string;
  price: number;
  count: number;
}

/* -------------------- Data -------------------- */
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
      { name: "سطح سه", modules: ["حسابداری", "خزانه", "خرید", "فروش", "انبار"] },
      { name: "سطح دو", modules: ["حسابداری", "خزانه", "خرید", "فروش", "انبار","حقوق و دستمزد","پرسنلی","دارایی ثابت"] },
      { name: "سطح یک", modules: ["حسابداری", "خزانه", "خرید", "فروش", "انبار", "حقوق و دستمزد","پرسنلی", "تولید","بهای تمام شده","تعمیرات و نگهداری","باسکول" ,"دارایی ثابت"] },
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
      { name: "سطح سه", modules: ["حسابداری", "خزانه", "خرید", "فروش", "انبار"] },
      { name: "سطح دو", modules: ["حسابداری", "خزانه", "خرید", "فروش", "انبار","حقوق و دستمزد","پرسنلی","دارایی ثابت"] },
      { name: "سطح یک", modules: ["حسابداری", "خزانه", "خرید", "فروش", "انبار", "حقوق و دستمزد","پرسنلی", "تولید","بهای تمام شده","تعمیرات و نگهداری","باسکول" ,"دارایی ثابت"] },
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
  { name: "تعداد کاربران", price: 5000000, count: 0 },
  { name: "سامانه مودیان", price: 6000000, count: 0 },
  { name: "چند شرکت همزمان", price: 3000000, count: 0 },
  { name: "سامانه موبایل", price: 0, count: 0 },
  { name: "خدمات استقرار و آموزش", price: 1000000, count: 0 },
];

/* -------------------- Component -------------------- */
export default function CalculatorPage() {
  const [selectedPackage, setSelectedPackage] = useState<Package>(packages[0]);
  const [selectedLevel, setSelectedLevel] = useState<PackageLevel | null>(
    packages[0].levels ? packages[0].levels[0] : null
  );
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);

  const [today, setToday] = useState("");
  useEffect(() => setToday(new Date().toLocaleDateString()), []);

  useEffect(() => {
    if (selectedLevel) setSelectedModules(selectedLevel.modules);
    else setSelectedModules([]);
  }, [selectedLevel, selectedPackage]);

  const toggleModule = (name: string) =>
    setSelectedModules(prev => prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]);

  const changeFeature = (index: number, delta: number) =>
    setFeatures(prev => prev.map((f, i) => i === index ? { ...f, count: Math.max(0, f.count + delta) } : f));

  const modulesPrice = selectedPackage.modules.filter(m => selectedModules.includes(m.name)).reduce((sum, m) => sum + m.price, 0);
  const featuresPrice = features.reduce((sum, f) => sum + f.price * f.count, 0);
  const totalPrice = modulesPrice + featuresPrice;

  /* -------------------- PDF ساده بدون فونت فارسی -------------------- */
  const generatePDF = () => {
    const doc = new jsPDF({ format: "a4", unit: "pt" });
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 40;

    doc.setFontSize(20);
    doc.text("پیش‌فاکتور نرم‌افزار رهان", pageWidth - 40, y, { align: "right" });

    y += 30;
    doc.setFontSize(12);
    doc.text(`تاریخ: ${today}`, pageWidth - 40, y, { align: "right" });

    y += 20;
    doc.text(`بسته انتخابی: ${selectedPackage.name}`, pageWidth - 40, y, { align: "right" });

    if (selectedLevel) {
      y += 20;
      doc.text(`سطح: ${selectedLevel.name}`, pageWidth - 40, y, { align: "right" });
    }

    y += 30;
    doc.setFontSize(14);
    doc.text("ماژول‌ها:", pageWidth - 40, y, { align: "right" });
    y += 20;
    selectedModules.forEach(m => {
      const mod = selectedPackage.modules.find(mod => mod.name === m);
      doc.text(`${m} - ${mod?.price.toLocaleString()} تومان`, pageWidth - 50, y, { align: "right" });
      y += 20;
    });

    y += 20;
    doc.text("امکانات جانبی:", pageWidth - 40, y, { align: "right" });
    y += 20;
    features.filter(f => f.count > 0).forEach(f => {
      doc.text(`${f.name} ×${f.count} - ${(f.price*f.count).toLocaleString()} تومان`, pageWidth - 50, y, { align: "right" });
      y += 20;
    });

    y += 20;
    doc.setFontSize(16);
    doc.text(`جمع کل: ${totalPrice.toLocaleString()} تومان`, pageWidth - 40, y, { align: "right" });

    doc.save("invoice.pdf");
  };

  return (
    <>
      <NavigationMenuDemo />

      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/Boxes.png" alt="Pricing Calculator" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">محاسبه قیمت نرم‌افزار رهان</h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            بسته و سطح مورد نظر را انتخاب کنید و هزینه نهایی را مشاهده کنید
          </p>
        </div>

        {/* موبایل جمع کل */}
        <aside className="absolute bottom-0 left-0 w-full bg-background/90 border-t p-4 flex justify-between items-center md:hidden">
          <div>
            <div className="text-xs text-muted-foreground">جمع کل</div>
            <div className="font-bold">{totalPrice.toLocaleString()} تومان</div>
          </div>
          <button disabled={totalPrice===0} className={`px-5 py-2 rounded-xl font-medium ${totalPrice===0 ? "bg-muted text-muted-foreground" : "bg-primary text-white"}`}>
            ادامه
          </button>
        </aside>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_320px] gap-10">
        <div className="space-y-14">
          {/* Packages */}
          <section className="text-center space-y-4">
            <h2 className="text-2xl font-bold">انتخاب بسته</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {packages.map(pkg => (
                <div key={pkg.name} onClick={() => setSelectedPackage(pkg)}
                  className={`cursor-pointer w-52 p-5 rounded-2xl border transition-all text-center ${selectedPackage.name===pkg.name ? "bg-primary text-white shadow-lg scale-105" : "bg-background hover:shadow-md hover:scale-105"}`}>
                  <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                  {pkg.levels ? <p className="text-sm text-muted-foreground">دارای سطح‌بندی</p> : <p className="text-sm text-muted-foreground">سطح‌بندی ندارد</p>}
                </div>
              ))}
            </div>
            {selectedPackage.levels && (
              <div className="flex justify-center gap-4 mt-6">
                {selectedPackage.levels.map(lvl => (
                  <div key={lvl.name} onClick={() => setSelectedLevel(lvl)}
                    className={`cursor-pointer px-5 py-3 rounded-xl border transition-all ${selectedLevel?.name===lvl.name ? "bg-primary text-white shadow-lg scale-105" : "bg-muted hover:bg-muted/80 hover:scale-105"}`}>
                    {lvl.name}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Modules */}
          <section className="bg-muted/40 border rounded-2xl p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">ماژول‌ها</h3>
              <span className="text-sm text-muted-foreground">{selectedModules.length} انتخاب شده</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedPackage.modules.map(mod => {
                const active = selectedModules.includes(mod.name);
                return (
                  <button key={mod.name} onClick={() => toggleModule(mod.name)}
                    className={`p-4 rounded-xl border flex justify-between items-center transition ${active ? "bg-primary text-white border-primary shadow-md" : "bg-background hover:bg-muted"}`}>
                    <span>{mod.name}</span>
                    <span className="text-sm">{mod.price.toLocaleString()} تومان</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Features */}
          <section className="bg-muted/40 border rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold">امکانات جانبی</h3>
            {features.map((f,i) => (
              <div key={f.name} className="flex justify-between items-center rounded-xl border p-3 bg-background">
                <span className="text-sm">{f.name} ({f.price.toLocaleString()} تومان)</span>
                <div className="flex items-center gap-3">
                  <button onClick={()=>changeFeature(i,-1)} className="w-8 h-8 rounded-lg bg-muted">−</button>
                  <span>{f.count}</span>
                  <button onClick={()=>changeFeature(i,1)} className="w-8 h-8 rounded-lg bg-muted">+</button>
                </div>
              </div>
            ))}
          </section>

          <button onClick={generatePDF} className="w-full py-3 mt-4 rounded-xl font-medium bg-green-500 text-white hover:opacity-90">دانلود پیش‌فاکتور PDF</button>
        </div>

        {/* Sidebar دسکتاپ */}
        <aside className="hidden md:block sticky top-24 h-[calc(100vh-96px)] overflow-auto">
          <div className="rounded-2xl border bg-background p-6 space-y-5 shadow-sm">
            <h3 className="text-xl font-bold">جمع کل</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between"><span>ماژول‌ها</span><span>{modulesPrice.toLocaleString()} تومان</span></div>
              <div className="flex justify-between"><span>امکانات جانبی</span><span>{featuresPrice.toLocaleString()} تومان</span></div>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>مبلغ نهایی</span>
              <span>{totalPrice.toLocaleString()} تومان</span>
            </div>
            <button disabled={totalPrice===0} className={`w-full py-3 rounded-xl font-medium transition ${totalPrice===0 ? "bg-muted text-muted-foreground" : "bg-primary text-white hover:opacity-90"}`}>
              ادامه فرایند
            </button>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}
