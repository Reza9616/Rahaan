"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Clock, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer"; 
import NavigationMenuDemo from "@/components/navbar";
export default function ThankYouPage() {
  return (
    <>
       <NavigationMenuDemo/>
    
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden" dir="rtl">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="bg-white/80 backdrop-blur-xl shadow-2xl shadow-emerald-100/50 rounded-3xl p-10 md:p-14 max-w-lg text-center border border-white/60">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-8 relative"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-amber-400" />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-l from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4"
            >
              ثبت موفقیت‌آمیز!
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8"
            >
              از اعتماد شما سپاسگزاریم. بزودی مسئول بازرگانی رهان با شما تماس می‌گیرد.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <div className="flex items-center gap-3 bg-emerald-50 px-5 py-3 rounded-xl">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm">تماس تلفنی</span>
              </div>
              <div className="flex items-center gap-3 bg-teal-50 px-5 py-3 rounded-xl">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm">حداکثر ۲۴ ساعت</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative dots */}
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-60" />
        <div className="absolute top-40 left-1/3 w-3 h-3 bg-teal-300 rounded-full opacity-40" />
        <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-amber-400 rounded-full opacity-50" />
 
    </main>   
      <Footer />
    </>
  );
}