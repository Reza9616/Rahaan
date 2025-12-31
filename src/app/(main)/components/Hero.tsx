'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Shield,
  Zap,
  Users,
  Globe2,
  ArrowLeft,
  Check,
  Sparkles,
  Building2,
  Store,
  Package,
} from 'lucide-react';

/* ---------------- Floating Card ---------------- */

type FloatingCardProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down';
};

function FloatingCard({
  children,
  delay = 0,
  direction = 'up',
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 100 : -100, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{
        duration: 1,
        delay,
        type: 'spring',
        stiffness: 50,
      }}
      whileHover={{
        y: -20,
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="transform-gpu"
      style={{ perspective: '1000px' }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Globe 3D ---------------- */

function Globe3D() {
  return (
    <motion.div
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="relative w-64 h-64 mx-auto"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full opacity-80 blur-2xl" />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-4 bg-gradient-to-br from-[#4f89c9] to-cyan-500 rounded-full shadow-2xl"
      >
        <Globe2 className="absolute inset-0 m-auto w-32 h-32 text-white/40" />
      </motion.div>
    </motion.div>
  );
}

/* ---------------- Hero ---------------- */

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 mb-8"
        >
          <Sparkles className="w-5 h-5" />
          نسل جدید نرم‌افزار حسابداری
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black text-white mb-6"
        >
          <span className="bg-gradient-to-l from-cyan-400 via-[#4f89c9] to-cyan-400 bg-clip-text text-transparent">
            رهان
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-12"
        >
          حسابداری اما آسان
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-20"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-[#4f89c9] text-white px-12 py-6 text-lg rounded-full shadow-2xl shadow-cyan-500/50"
          >
           <a href="/callus">شروع کنید</a> 
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FloatingCard delay={0.2}>
            <Card icon={TrendingUp} title="رشد سریع" />
          </FloatingCard>

          <FloatingCard delay={0.4} direction="down">
            <Card icon={Shield} title="امنیت کامل" />
          </FloatingCard>

          <FloatingCard delay={0.6}>
            <Card icon={Zap} title="سرعت بالا" />
          </FloatingCard>
        </div>

        {/* Globe */}
       <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    <div className="text-3xl font-bold text-white">1000+</div>
    <div className="text-sm text-cyan-200 mt-1">مشتری فعال سازمانی</div>
  </div>

  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    <div className="text-3xl font-bold text-white">99.9%</div>
    <div className="text-sm text-cyan-200 mt-1">پایداری سیستم</div>
  </div>
</div>
      </motion.div>
    </section>
  );
}

/* ---------------- Small Card ---------------- */

function Card({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-[#4f89c9] rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-cyan-100">
        کسب‌وکار خود را با ابزارهای هوشمند توسعه دهید
      </p>
    </div>
  );
}
