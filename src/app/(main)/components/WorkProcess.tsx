'use client'

import { Headset, Lightbulb, Settings, Trophy } from "lucide-react"
import { motion, type Variants } from "framer-motion"

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "مشاوره تخصصی",
      description:
        "بررسی نیازهای کسب‌وکار شما و ارائه مشاوره شخصی‌سازی‌شده توسط کارشناسان رهان.",
      icon: <Headset className="w-10 h-10 text-white" />,
    },
    {
      number: "02",
      title: "طراحی استراتژی",
      description:
        "تدوین راهکارهای یکپارچه ERP و مالی متناسب با فرآیندهای سازمانی شما.",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
    },
    {
      number: "03",
      title: "پیاده‌سازی و اجرا",
      description:
        "نصب، تنظیم و آموزش نرم‌افزارهای رهان با تمرکز بر بهینه‌سازی فرآیندها.",
      icon: <Settings className="w-10 h-10 text-white" />,
    },
    {
      number: "04",
      title: "نتیجه و پشتیبانی",
      description:
        "دستیابی به مدیریت هوشمند، بهره‌وری بالاتر و پشتیبانی مداوم برای رشد پایدار.",
      icon: <Trophy className="w-10 h-10 text-white" />,
    },
  ]

  /* ===== Framer Motion Variants ===== */
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  }

  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
          فرآیند کاری اثبات‌شده رهان
        </h2>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center md:gap-8 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="flex flex-col items-center relative md:flex-1 cursor-pointer"
            >
              {/* Circle + Icon */}
              <div className="relative">
                <div className="w-24 h-24 bg-[#1e90ff] rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-[#1e3a8a] text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#1e3a8a] mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
