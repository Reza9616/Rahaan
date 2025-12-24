"use client";

import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { Trash2, Minus, Plus, CreditCard } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, setCart, clearCart } = useCart();
  const router = useRouter();

  const removeItem = (name: string, type: "module" | "feature") => {
    setCart(prev => ({
      ...prev,
      modules: type === "module" ? prev.modules.filter(m => m.name !== name) : prev.modules,
      features: type === "feature" ? prev.features.filter(f => f.name !== name) : prev.features,
    }));
  };

  const changeQty = (name: string, delta: number, type: "module" | "feature") => {
    setCart(prev => {
      const updated = { ...prev };
      if (type === "module") {
        updated.modules = updated.modules.map(m => 
          m.name === name ? { ...m, qty: Math.max(1, m.qty + delta) } : m
        );
      } else {
        updated.features = updated.features.map(f => 
          f.name === name ? { ...f, count: Math.max(1, f.count + delta) } : f
        );
      }
      return updated;
    });
  };

  const total = 
    cart.modules.reduce((sum, m) => sum + m.price * m.qty, 0) +
    cart.features.reduce((sum, f) => sum + f.price * f.count, 0);

  const totalItems = cart.modules.reduce((sum, m) => sum + m.qty, 0) + cart.features.reduce((sum, f) => sum + f.count, 0);

  const allItems = [
    ...cart.modules.map(m => ({ ...m, type: "module" as const, quantity: m.qty })),
    ...cart.features.map(f => ({ ...f, type: "feature" as const, quantity: f.count }))
  ];

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/me", { credentials: "include" });
      if (!res.ok || !(await res.json()).authenticated) {
        router.push("/login");
      } else {
        router.push("/checkout");
      }
    } catch {
      router.push("/login");
    }
  };

  return (
    <>
      <NavigationMenuDemo />

      <main className="max-w-7xl mx-auto px-4 py-14">
        <h1 className="text-3xl font-bold mb-8 text-[#4f89c9]">سبد خرید شما</h1>

        {totalItems === 0 ? (
          <div className="text-center py-20 text-lg text-gray-500">سبد خرید شما خالی است.</div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-10">
            {/* جدول آیتم‌ها */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-right">
                    <th className="py-4 px-6 text-lg font-semibold">محصول</th>
                    <th className="py-4 px-6 text-lg font-semibold">قیمت واحد</th>
                    <th className="py-4 px-6 text-lg font-semibold">تعداد</th>
                    <th className="py-4 px-6 text-lg font-semibold">جمع</th>
                    <th className="py-4 px-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {allItems.map(item => (
                      <motion.tr
                        key={item.name + item.type}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-5 px-6 font-medium text-lg">{item.name}</td>
                        <td className="py-5 px-6 text-[#4f89c9] font-medium">
                          {item.price.toLocaleString()} تومان
                        </td>
                        <td className="py-5 px-6">
                          <div className="flex items-center justify-center gap-3 border rounded-xl overflow-hidden w-fit mx-auto">
                            <button
                              onClick={() => changeQty(item.name, -1, item.type)}
                              className="p-3 bg-muted hover:bg-muted/80 transition-transform active:scale-95"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => changeQty(item.name, 1, item.type)}
                              className="p-3 bg-[#4f89c9] text-white hover:bg-[#4f89c9]/90 transition-transform active:scale-95"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                        <td className="py-5 px-6 font-bold text-[#4f89c9]">
                          {(item.price * item.quantity).toLocaleString()} تومان
                        </td>
                        <td className="py-5 px-6">
                          <button
                            onClick={() => removeItem(item.name, item.type)}
                            className="p-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-transform active:scale-95"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* خلاصه سفارش */}
            <aside className="border rounded-3xl p-8 bg-card shadow-xl h-fit flex flex-col justify-between lg:sticky lg:top-24">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">خلاصه سفارش</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-lg">
                    <span>تعداد آیتم‌ها:</span>
                    <span className="font-semibold">{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-4 border-t">
                    <span>جمع کل:</span>
                    <span className="text-[#4f89c9]">{total.toLocaleString()} تومان</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-2xl bg-green-600 text-white text-lg font-bold flex justify-center items-center gap-3 hover:bg-green-700 transition active:scale-95"
                >
                  <CreditCard className="w-6 h-6" /> ادامه پرداخت
                </button>
                <button
                  onClick={clearCart}
                  className="w-full py-4 rounded-2xl bg-red-500 text-white text-lg font-bold hover:bg-red-600 transition active:scale-95"
                >
                  خالی کردن سبد خرید
                </button>
              </div>
            </aside>
          </div>
        )}
      </main>

      {/* Bottom Bar موبایل */}
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t shadow-2xl p-5 flex justify-between items-center z-50"
        >
          <div>
            <div className="text-sm text-muted-foreground">جمع کل</div>
            <div className="text-2xl font-bold text-[#4f89c9]">{total.toLocaleString()} تومان</div>
          </div>
          <button
            onClick={handleCheckout}
            className="px-8 py-4 rounded-2xl bg-[#4f89c9] text-white font-bold text-lg flex items-center gap-3 active:scale-95 transition"
          >
            <CreditCard className="w-6 h-6" /> پرداخت
          </button>
        </motion.div>
      )}

      <Footer />
    </>
  );
}