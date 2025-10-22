import Image from "next/image";
import WordRotateDemo from "./WordRotate";
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="min-h-screen bg-oneBg relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 py-25">
        <div className="grid sm:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl lg:min-w-115 font-medium text-Paragraph leading-tight">
                        <strong>رهان</strong>، <br /> حسابداری اما <WordRotateDemo />
            </h1>
            <p className="text-Paragraph max-w-md text-sm">
                        ساده و دقیق برای هر کسب‌وکار؛ از ERP سازمانی تا نرم‌افزارهای فروشگاهی؛ راه‌حل‌هایی که مدیریت مالی و عملکرد روزانه‌ی شما را هوشمندتر می‌کنند.
            </p>
            <Button>مشاوره رایگان</Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <figure className="relative">
              <Image
                width={700} 
                height={600}
                className=""
                src="/Rahaan 03.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}