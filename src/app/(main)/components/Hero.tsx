'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import WordRotateDemo from "@/components/WordRotate";
import { Button } from '@/components/ui/button';
import { Container } from "@/components/ui/Container";
import { Link } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-[85vh] bg-accent relative overflow-hidden">
      <Container className="px-6 lg:px-10 py-25">
        <div className="grid lg:grid-cols-[35%_65%] gap-x-12 items-center space-y-8">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-light lg:min-w-115 text-primary/80 leading-tight">
              <strong className="font-semibold text-primary">
                رهان
                </strong>، <br /> حسابداری اما <WordRotateDemo />
            </h1>
            <p className="text-muted-foreground max-w-md text-sm">
  در <strong>داده پرداز آتی الگوریتم</strong>،<strong>رهان</strong> راهکارهایی ساده و دقیق برای هر کسب‌وکار ارائه می‌دهد؛ از ERP سازمانی تا نرم‌افزارهای فروشگاهی، ابزارهایی که مدیریت مالی و تصمیم‌گیری‌های روزانه‌ی شما را هوشمندانه‌تر و مؤثرتر می‌کنند.
</p>
         
<Button asChild   className="w-fit px-6">
        <a href="/callus">تماس با ما</a>
      </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <motion.figure 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                scale: { type: 'spring', visualDuration: 0.8, bounce: 0.5 },
              }}
              className="relative z-10">
              <Image
                width={1050} 
                height={700}
                className=""
                src="/header2.jpg"
                alt=""
                priority
              />
            </motion.figure>
          </div>
        </div>
      </Container>
    </div>
  )
}