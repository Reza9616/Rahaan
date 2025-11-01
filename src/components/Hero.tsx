'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import WordRotateDemo from "./WordRotate";
import { Button } from '@/components/ui/button';
import { Container } from "./ui/Container";

export default function Hero() {
  return (
    <div className="min-h-screen bg-accent relative overflow-hidden">
      <Container className="px-6 lg:px-10 py-25">
        <div className="grid lg:grid-cols-[35%_65%] gap-x-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-light lg:min-w-115 text-primary/80 leading-tight">
              <strong className="font-semibold text-primary">رهان</strong>، <br /> حسابداری اما <WordRotateDemo />
            </h1>
            <p className="text-muted-foreground max-w-md text-sm">
              ساده و دقیق برای هر کسب‌وکار؛ از ERP سازمانی تا نرم‌افزارهای فروشگاهی؛ راه‌حل‌هایی که مدیریت مالی و تصمیمات روزانه‌ی شما را دقیق‌تر می‌کنند.
            </p>
            <Button>مشاوره رایگان</Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <motion.figure 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                scale: { type: 'spring', visualDuration: 0.8, bounce: 0.5 },
              }}
              className="relative">
              <Image
                width={850} 
                height={600}
                className=""
                src="/header2.jpg"
                alt=""
              />
            </motion.figure>
          </div>
        </div>
      </Container>
    </div>
  )
}