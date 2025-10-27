import Image from "next/image";
import WordRotateDemo from "./WordRotate";
import { Button } from '@/components/ui/button';
import { Container } from "./ui/Container";

export default function Hero() {
  return (
    <div className="min-h-screen bg-accent relative overflow-hidden">
      <Container className="px-6 lg:px-10 py-25">
        <div className="grid sm:grid-cols-[25%_75%] gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl lg:min-w-115 text-primary leading-tight">
              <strong>رهان</strong>، <br /> حسابداری اما <WordRotateDemo />
            </h1>
            <p className="text-muted-foreground max-w-md text-sm">
              ساده و دقیق برای هر کسب‌وکار؛ از ERP سازمانی تا نرم‌افزارهای فروشگاهی؛ راه‌حل‌هایی که مدیریت مالی و تصمیمات روزانه‌ی شما را دقیق‌تر می‌کنند.
            </p>
            <Button>مشاوره رایگان</Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <figure className="relative">
              <Image
                width={850} 
                height={600}
                className=""
                src="/head.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}