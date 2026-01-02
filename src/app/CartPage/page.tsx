"use client";

import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import {
  Trash2,
  Minus,
  Plus,
  CreditCard,
  ShoppingCart,
  Package,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CartPage() {
  const { cart, setCart, clearCart } = useCart();
  const router = useRouter();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const removeItem = (name: string, type: "module" | "feature") => {
    setCart((prev) => ({
      ...prev,
      modules:
        type === "module"
          ? prev.modules.filter((m) => m.name !== name)
          : prev.modules,
      features:
        type === "feature"
          ? prev.features.filter((f) => f.name !== name)
          : prev.features,
    }));
  };

  const changeQty = (name: string, delta: number, type: "module" | "feature") => {
    setCart((prev) => {
      const updated = { ...prev };
      if (type === "module") {
        updated.modules = updated.modules.map((m) =>
          m.name === name ? { ...m, qty: Math.max(1, m.qty + delta) } : m
        );
      } else {
        updated.features = updated.features.map((f) =>
          f.name === name ? { ...f, count: Math.max(1, f.count + delta) } : f
        );
      }
      return updated;
    });
  };

  const total =
    cart.modules.reduce((s, m) => s + m.price * m.qty, 0) +
    cart.features.reduce((s, f) => s + f.price * f.count, 0);

  const totalItems =
    cart.modules.reduce((s, m) => s + m.qty, 0) +
    cart.features.reduce((s, f) => s + f.count, 0);

  const allItems = [
    ...cart.modules.map((m) => ({
      ...m,
      type: "module" as const,
      quantity: m.qty,
    })),
    ...cart.features.map((f) => ({
      ...f,
      type: "feature" as const,
      quantity: f.count,
    })),
  ];

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const res = await fetch("/api/me", { credentials: "include" });
      const authData = await res.json();

      if (!res.ok || !authData.authenticated) {
        router.push("/login");
      } else {
        router.push("/checkout");
      }
    } catch (err) {
      router.push("/login");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      <NavigationMenuDemo />

      <main
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 pb-32 lg:pb-20"
        dir="rtl"
      >
        {/* Header */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4f89c9]/5 to-transparent" />
          <div className="absolute top-10 right-20 w-72 h-72 bg-[#4f89c9]/10 rounded-full blur-3xl animate-pulse" />

          <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4f89c9] to-indigo-600 flex items-center justify-center shadow-lg">
                  <ShoppingCart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-black text-[#4f89c9]">
                    سبد خرید شما
                  </h1>
                  <p className="text-slate-500 mt-1">{totalItems} محصول در سبد خرید</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* محتوا */}
        <section className="max-w-7xl mx-auto px-4 md:px-6">
          {totalItems === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-inner"
                >
                  <ShoppingCart className="w-16 h-16 text-slate-300" />
                </motion.div>
                <h2 className="text-3xl font-bold text-slate-800 mb-3">
                  سبد خرید خالی است
                </h2>
                <p className="text-slate-500 mb-8 text-lg">
                  محصولی در سبد خرید شما وجود ندارد
                </p>
                <button
                  onClick={() => router.push("/")}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4f89c9] to-indigo-600 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all font-bold"
                >
                  <Package className="w-5 h-5" />
                  مشاهده محصولات
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_400px] gap-8">
              {/* لیست محصولات */}
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {allItems.map((item, index) => (
                    <motion.div
                      key={item.name + item.type}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="relative"
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white hover:shadow-2xl transition-all duration-300 group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#4f89c9]/20 to-transparent rounded-3xl pointer-events-none" />
                        <div className="flex flex-col sm:flex-row items-start gap-6 relative">
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="relative flex-shrink-0"
                          >
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#4f89c9]/10 to-indigo-500/10 flex items-center justify-center shadow-lg">
                              <Package className="w-12 h-12 text-[#4f89c9]" />
                            </div>
                            <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#4f89c9] to-indigo-600 text-white text-xs font-bold shadow-lg">
                              {item.type === "module" ? "ماژول" : "ویژگی"}
                            </div>
                          </motion.div>

                          <div className="flex-1 w-full">
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#4f89c9] transition-colors">
                                  {item.name}
                                </h3>
                                <p className="text-lg font-semibold text-[#4f89c9]">
                                  {item.price.toLocaleString()} تومان
                                </p>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeItem(item.name, item.type)}
                                className="p-3 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white rounded-xl transition-all shadow-md"
                              >
                                <Trash2 className="w-5 h-5" />
                              </motion.button>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                              <div className="flex items-center gap-1 bg-slate-100 rounded-2xl p-1 shadow-inner">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => changeQty(item.name, -1, item.type)}
                                  className="w-10 h-10 flex items-center justify-center bg-white rounded-xl hover:bg-slate-200 transition-colors shadow-sm"
                                >
                                  <Minus className="w-4 h-4 text-slate-700" />
                                </motion.button>
                                <motion.span
                                  key={item.quantity}
                                  initial={{ scale: 1.3, color: "#4f89c9" }}
                                  animate={{ scale: 1, color: "#1e293b" }}
                                  className="w-14 text-center font-bold text-lg"
                                >
                                  {item.quantity}
                                </motion.span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => changeQty(item.name, 1, item.type)}
                                  className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#4f89c9] to-indigo-600 rounded-xl hover:from-[#4f89c9]/90 hover:to-indigo-600/90 transition-all shadow-sm"
                                >
                                  <Plus className="w-4 h-4 text-white" />
                                </motion.button>
                              </div>

                              <div className="flex-1 sm:text-left">
                                <p className="text-xs text-slate-500 mb-1">جمع کل</p>
                                <motion.p
                                  key={item.price * item.quantity}
                                  initial={{ scale: 1.1 }}
                                  animate={{ scale: 1 }}
                                  className="text-2xl font-black text-[#4f89c9]"
                                >
                                  {(item.price * item.quantity).toLocaleString()} تومان
                                </motion.p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {totalItems > 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <button
                      onClick={clearCart}
                      className="w-full sm:w-auto px-8 py-4 border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-5 h-5" />
                      پاک کردن همه محصولات
                    </button>
                  </motion.div>
                )}
              </div>

              {/* خلاصه سفارش */}
              <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:sticky lg:top-8 h-fit">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4f89c9] to-indigo-600 flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">خلاصه سفارش</h3>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center justify-between py-4 border-b border-slate-200">
                      <span className="text-slate-600 font-medium">تعداد محصولات</span>
                      <span className="font-bold text-lg text-slate-800">{totalItems}</span>
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-slate-200">
                      <span className="text-slate-600 font-medium">هزینه ارسال</span>
                      <span className="font-bold text-green-600">رایگان</span>
                    </div>

                    <div className="flex items-center justify-between py-6 bg-gradient-to-r from-[#4f89c9]/10 to-indigo-600/10 rounded-2xl px-6">
                      <span className="text-lg font-bold text-slate-800">جمع کل</span>
                      <div className="text-left">
                        <motion.p key={total} initial={{ scale: 1.2, color: "#4f89c9" }} animate={{ scale: 1, color: "#4f89c9" }} className="text-3xl font-black">
                          {total.toLocaleString()}
                        </motion.p>
                        <p className="text-sm text-slate-500">تومان</p>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full py-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-50"
                  >
                    {isCheckingOut ? (
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <CreditCard className="w-6 h-6" />
                        ادامه و پرداخت
                        <Sparkles className="w-5 h-5 absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                  </motion.button>

                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>پرداخت امن و مطمئن</span>
                  </div>
                </div>
              </motion.aside>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
