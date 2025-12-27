'use client'

import Image from 'next/image'
import { motion, type Variants, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import WordRotateDemo from '@/components/WordRotate'
import { Button } from '@/components/ui/button'

const textContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
}

const textItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 14 } },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  /* ===== Scroll Parallax for Image ===== */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [20, -20])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.03])

  /* ===== Mouse Tilt ===== */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = imageRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * 6
    const rotateY = ((x - centerX) / centerX) * -6
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  }

  const handleMouseLeave = () => {
    const card = imageRef.current
    if (!card) return
    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`
  }

  return (
    <section
      ref={sectionRef}
      className="mt-25 min-h-[85vh] bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -40, 0], rotate: [0, 45, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 60, 0], rotate: [0, -90, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-gradient-to-tl from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-sky-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* ================== Text ================== */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-8 text-right"
          >
            <motion.h1
              variants={textItem}
              className="text-4xl lg:text-6xl font-light leading-tight text-primary/80"
            >
              <strong className="font-semibold text-primary">رهان</strong>، <br />
              حسابداری اما <WordRotateDemo />
            </motion.h1>

            <motion.p
              variants={textItem}
              className="text-muted-foreground max-w-lg text-base lg:text-lg leading-relaxed"
            >
              در <strong>داده پرداز آتی الگوریتم</strong>، <strong>رهان</strong> راهکارهایی ساده و دقیق برای هر کسب‌وکار ارائه می‌دهد؛ از ERP سازمانی تا نرم‌افزارهای فروشگاهی، ابزارهایی که مدیریت مالی و تصمیم‌گیری‌های روزانه‌ی شما را هوشمندانه‌تر و مؤثرتر می‌کنند.
            </motion.p>

            <motion.div variants={textItem} initial={false}>
              <Button asChild size="lg" className="px-8 py-6 text-lg">
                <a href="/callus">تماس با ما</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* ================== Image ================== */}
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-3xl transition-transform duration-300 ease-out"
            >
              {/* Animated Gradient Orbs */}
              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-sky-400/40 to-cyan-500/40 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ rotate: [360, 0], scale: [1, 1.15, 1], x: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-blue-400/40 to-teal-500/40 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl -z-10"
              />

              {/* Floating Dots */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-3 h-3 bg-blue-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 w-4 h-4 bg-cyan-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 right-5 w-2 h-2 bg-cyan-500 rounded-full"
              />

              {/* Main Image */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                <Image
                  src="/header2.jpg"
                  alt="رهان - نرم‌افزار حسابداری هوشمند"
                  width={1250}
                  height={1000}
                  priority
                  className="w-full h-auto object-contain rounded-[3rem]"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
