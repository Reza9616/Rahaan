'use client'

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import WordRotateDemo from "@/components/WordRotate"
import { Button } from "@/components/ui/button"

const textContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
}

const textItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

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
    <section ref={sectionRef} className="min-h-[85vh] bg-accent relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* ================== Text ================== */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }} // 🔑 toggle on scroll
            className="space-y-8 text-right"
          >
            <motion.h1 variants={textItem} className="text-4xl lg:text-6xl font-light leading-tight text-primary/80">
              <strong className="font-semibold text-primary">رهان</strong>، <br />
              حسابداری اما <WordRotateDemo />
            </motion.h1>

            <motion.p variants={textItem} className="text-muted-foreground max-w-lg text-base lg:text-lg leading-relaxed">
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
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }} // 🔑 toggle on scroll
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-3xl transition-transform duration-300 ease-out"
            >
              {/* Glow */}
              <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary/40 blur-3xl rounded-[45px] -z-10"
              />

              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/header2.jpg"
                  alt="رهان - نرم‌افزار حسابداری هوشمند"
                  width={1250}
                  height={1000}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
