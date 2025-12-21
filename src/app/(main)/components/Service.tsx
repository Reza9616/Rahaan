'use client'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/button';
import Image from "next/image"; 
import Link from 'next/link';

export default function SecondaryFeatures() {

  return (
    <section
      id="service"
      aria-label="Features of Rahaan Product"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="flex flex-col sm:flex-row gap-8 py-12 items-center">
          <div className="sm:w-1/2 w-full flex justify-center">
              <Image
                src="/ErpShadow.png"
                width={600}
                height={400}
                alt="رهان ERP"
                className="w-full h-auto rounded-lg   object-cover"
              />
          </div>
          <div className="sm:w-1/2 w-full flex flex-col space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-xl">رهان ERP</h4>
              <p className="text-muted-foreground">برای شرکت‌ها و سازمان‌ها</p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              نرم افزار های ERP رهان شامل یازده زیر سیستم مجزا و تخصصی از قبیل حسابداری، مدیریت وجه نقد، خرید، فروش، انبار، دارایی ثابت، تولید، بهای تمام شده، حقوق دستمزد، پرسنلی و تعمیرات و نگهداری می‌باشد که در کنار یکدیگر تمام فرآیندهای اداری سازمان و هلدینگ شما را به سادگی مدیریت خواهد کرد.
            </p>
            <Button asChild variant="outline" className="w-fit px-6">
              <Link href="/erp">مشاهده بیشتر</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 py-12 items-center">
          <div className="sm:w-1/2 w-full flex flex-col space-y-6 order-2 sm:order-1">
            <div className="space-y-2">
              <h4 className="font-semibold text-xl">رهان صنعتی</h4>
              <p className="text-muted-foreground">برای حسابداران و مدیران مالی</p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              گزینه‌ای هوشمندانه برای مدیرانی که می‌خواهند از چالش‌ها و مشکلات ساختاری فاصله بگیرند و با نگاهی آینده‌محور، مسیر رشد پایدار و توسعه سازمانی را انتخاب کنند. این راهکار با تمرکز بر بهینه‌سازی فرآیندها، افزایش بهره‌وری و ایجاد شفافیت در تصمیم‌گیری‌ها، به مدیران کمک می‌کند تا کنترل بهتری بر منابع و عملکرد سازمان خود داشته باشند.
            </p>
            <Button asChild variant="outline" className="w-fit px-6">
              <Link href="/Eco">مشاهده بیشتر</Link>
            </Button>
          </div>

          {/* تصویر */}
          <div className="sm:w-1/2 w-full flex justify-center order-1 sm:order-2">
            <Image
              src="/EcoShadow.png"
              width={600}
              height={400}
              alt="رهان صنعتی"
              className="w-full h-auto rounded-lg  object-cover"
            />
          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-8 py-12 items-center">
          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/storeShadow.png"
              width={600}
              height={400}
              alt="رهان فروشگاهی"
              className="w-full h-auto rounded-lg  object-cover"
            />
          </div>

          <div className="sm:w-1/2 w-full flex flex-col space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-xl">رهان فروشگاهی</h4>
              <p className="text-muted-foreground">برای فروشگاه‌ها و کسب‌وکارهای کوچک</p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              رهان فروشگاهی، راهکاری ساده، هوشمند و مقرون‌به‌صرفه برای فروشگاه‌ها و کسب‌وکارهای کوچک است که به شما کمک می‌کند مدیریت فروش، موجودی کالا و مشتریان را به شکلی یکپارچه و بدون پیچیدگی انجام دهید. این نرم‌افزار با رابط کاربری روان و کاربرپسند طراحی شده تا حتی بدون دانش فنی خاص، به‌راحتی قابل استفاده باشد.
            </p>
            <Button asChild variant="outline" className="w-fit px-6">
              <Link href="/storee">مشاهده بیشتر</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
