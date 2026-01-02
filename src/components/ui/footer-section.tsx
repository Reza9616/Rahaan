"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Send, Twitter, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import Link from "next/link"; // ✅ react-router-dom حذف شد، Next.js Link استفاده می‌کنیم

// ====== Variants ======
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }, // رشته درست
  },
};

// ===== Footer Component ======
export default function FooterDemo() {
  return (
    <footer className="relative bg-gradient-to-br from-[#4f89c9] via-[#4080c0] to-[#3b6fa8] text-white overflow-hidden" dir="rtl">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
        />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-4"
              >
                <h2 className="text-2xl font-light tracking-tight flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Sparkles className="w-6 h-6 text-yellow-300" />
                  </motion.span>
                  <strong className="font-bold">رهان</strong>؛ تلاقی علم و صنعت
                </h2>
              </motion.div>
              <p className="mb-6 text-white/90 text-sm leading-relaxed">
                برای اطلاع از آخرین اخبار و پیشنهادات ویژه به خبرنامه ما بپیوندید.
              </p>
              <form className="relative group">
                <Input
                  type="tel"
                  placeholder="شماره تماس خود را وارد کنید"
                  className="pr-12 bg-white/90 border-white/30 text-gray-800 placeholder:text-gray-500 focus:bg-white transition-all"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute left-1 top-1 h-8 w-8 rounded-full bg-[#4f89c9] text-white hover:bg-[#3b6fa8] hover:scale-110 transition-all shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 text-xl font-bold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-[#0F2854] rounded-full" />
              دسترسی سریع
            </h3>
            <nav className="space-y-3 text-sm">
              {["خانه", "درباره ما", "خدمات ما", "محصولات ما"].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                  <Link href="#" className="block hover:text-[#0F2854] transition-colors duration-300 text-white/90 hover:text-white font-medium group">
                    <span className="inline-block group-hover:ml-2 transition-all">←</span> {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="text-white">
            <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
              <div className="w-1 h-6 bg-[#0F2854] rounded-full" />
              ارتباط با ما
            </h3>
            <address className="not-italic space-y-4 text-sm text-white/90">
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#0F2854]" />
                <p>مشهد، بلوار مدرس، مدرس 8، کوچه زرمهر، ساختمان وکلا، واحد 103</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#0F2854]" />
                <p>نیشابور، میدان ایران، کوچه میخک، ساختمان آفرینش، طبقه سوم</p>
              </div>
              <a href="tel:05142227051" className="flex items-center gap-2 hover:text-[#0F2854] transition-colors">
                <Phone className="w-4 h-4 text-[#0F2854]" /> 05142227051
              </a>
              <a href="mailto:rahaan@gmail.com" className="flex items-center gap-2 hover:text-[#0F2854] transition-colors">
                <Mail className="w-4 h-4 text-[#0F2854]" /> rahaan@gmail.com
              </a>
            </address>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
              <div className="w-1 h-6 bg-[#0F2854] rounded-full" />
              ما را دنبال کنید
            </h3>
            <div className="flex gap-3 flex-wrap">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/10 border-white/30 text-white backdrop-blur-sm hover:text-white transition-all shadow-lg"
                >
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-center md:flex-row"
        >
          <p className="text-sm text-white/80">
            © 1404 گروه نرم‌افزاری <strong className="font-bold text-[#0F2854]">رهان</strong>. تمامی حقوق محفوظ است.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
