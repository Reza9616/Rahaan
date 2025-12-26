'use client'

import { GlobeIcon, LayersIcon, Users, BarChart, PlugIcon, FileText } from "lucide-react"
import { motion } from "framer-motion"

type Solution = {
  title: string
  description: string
  icon: React.ReactNode
}

const solutions: Solution[] = [
  {
    title: "راهکار تهیه صورت‌های مالی",
    description: "نرم افزار تهیه صورت‌های مالی مجموعه ما به طور شفاف و دقیق اطلاعات مالی را گزارش می‌دهد.",
    icon: <FileText className="w-12 h-12 text-[#4f89c9]" />,
  },
  {
    title: "راهکار برنامه ریزی منابع سازمان (ERP)",
    description: "راهکارهای یکپارچه ERP تعامل و هماهنگی بین واحدها را ساده و جریان کار را روان می‌کند.",
    icon: <LayersIcon className="w-12 h-12 text-[#4f89c9]" />,
  },
  {
    title: "راهکار حسابداری مدیریت",
    description: "نرم افزار مدیریت حسابداری با تمرکز بر گزارش‌ها و تحلیل‌های مالی، تصمیم‌گیری مدیریتی را آسان می‌کند.",
    icon: <BarChart className="w-12 h-12 text-[#4f89c9]" />,
  },
  {
    title: "راهکار سیستم‌های تولید",
    description: "کنترل کیفیت و مدیریت تولید در بخش تولید به کمک نرم افزارها بهینه‌سازی می‌شود.",
    icon: <PlugIcon className="w-12 h-12 text-[#4f89c9]" />,
  },
  {
    title: "راهکار مدیریت تعهدی",
    description: "حسابداری تعهدی، ثبت دقیق رویدادها و معاملات در زمان وقوع را ممکن می‌سازد.",
    icon: <GlobeIcon className="w-12 h-12 text-[#4f89c9]" />,
  },
  {
    title: "راهکار منابع انسانی",
    description: "مدیریت منابع انسانی و امور پرسنلی با دقت و کارآمدی بالاتر انجام می‌شود.",
    icon: <Users className="w-12 h-12 text-[#4f89c9]" />,
  },
]

export default function Way() {
  return (
    <div className="bg-accent py-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="bg-background p-6 rounded-lg text-right cursor-pointer"
          >
            {/* Icon with subtle hover scale */}
            <motion.div
              className="flex justify-center mb-4 rounded-full"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
            >
              {item.icon}
            </motion.div>

            <h3 className="text-center text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-center text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
