'use client'

import { Button } from '@/components/ui/button'
import Image from "next/image"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SecondaryFeatures() {

  const features = [
    {
      title: "رهان ERP",
      subtitle: "برای شرکت‌ها و سازمان‌ها",
      description:
        "نرم افزار های ERP رهان شامل یازده زیر سیستم مجزا و تخصصی از قبیل حسابداری، مدیریت وجه نقد، خرید، فروش، انبار، دارایی ثابت، تولید، بهای تمام شده، حقوق دستمزد، پرسنلی و تعمیرات و نگهداری می‌باشد که در کنار یکدیگر تمام فرآیندهای اداری سازمان و هلدینگ شما را به سادگی مدیریت خواهد کرد.",
      img: "/ErpShadow.png",
      link: "/erp",
      reverse: false,
    },
    {
      title: "رهان صنعتی",
      subtitle: "برای حسابداران و مدیران مالی",
      description:
        "گزینه‌ای هوشمندانه برای مدیرانی که می‌خواهند از چالش‌ها و مشکلات ساختاری فاصله بگیرند و با نگاهی آینده‌محور، مسیر رشد پایدار و توسعه سازمانی را انتخاب کنند. این راهکار با تمرکز بر بهینه‌سازی فرآیندها، افزایش بهره‌وری و ایجاد شفافیت در تصمیم‌گیری‌ها، به مدیران کمک می‌کند تا کنترل بهتری بر منابع و عملکرد سازمان خود داشته باشند.",
      img: "/EcoShadow.png",
      link: "/Eco",
      reverse: true,
    },
    {
      title: "رهان فروشگاهی",
      subtitle: "برای فروشگاه‌ها و کسب‌وکارهای کوچک",
      description:
        "رهان فروشگاهی، راهکاری ساده، هوشمند و مقرون‌به‌صرفه برای فروشگاه‌ها و کسب‌وکارهای کوچک است که به شما کمک می‌کند مدیریت فروش، موجودی کالا و مشتریان را به شکلی یکپارچه و بدون پیچیدگی انجام دهید. این نرم‌افزار با رابط کاربری روان و کاربرپسند طراحی شده تا حتی بدون دانش فنی خاص، به‌راحتی قابل استفاده باشد.",
      img: "/storeShadow.png",
      link: "/storee",
      reverse: false,
    },
  ]

  return (
    <section
      id="service"
      aria-label="Features of Rahaan Product"
      className="py-16 sm:py-20 bg-accent"
    >
      <div className="max-w-7xl mx-auto px-6">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className={`flex flex-col sm:flex-row gap-8 py-12 items-center ${
              feature.reverse ? "sm:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Image */}
            <div className="sm:w-1/2 w-full flex justify-center overflow-hidden rounded-lg">
              <Image
                src={feature.img}
                width={600}
                height={400}
                alt={feature.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="sm:w-1/2 w-full flex flex-col space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-xl">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.subtitle}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
              <Button asChild variant="outline" className="w-fit px-6">
                <Link href={feature.link}>مشاهده بیشتر</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
