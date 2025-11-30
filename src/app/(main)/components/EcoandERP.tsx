import AnimatedImageSection from '@/components/ui/AnimatedImageSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function StorePage() {
  return (
    <>
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-32">

        <AnimatedImageSection
          title="رهان فروشگاهی"
          subtitle="کسب و کاری یکپارچه با رهان"
          imageSrc="/store.png"
          imageAlt="رهان استور"
          gradientColor="blue-100"
        />

        <AnimatedImageSection
          title="رهان صنعتی"
          subtitle="شرکتی یکپارچه با رهان"
          imageSrc="/ECO.png"
          imageAlt="رهان صنعتی"
          gradientColor="blue-100"
        />

        <AnimatedImageSection
          title="رهان ERP"
          subtitle="سازمانی یکپارچه با رهان"
          imageSrc="/ERP.png"
          imageAlt="رهان ERP"
          gradientColor="blue-100"
        />

      </div>
    </div>

    <div className="py-40 px-6 sm:px-20 lg:px-30">
      <section className="flex flex-col space-y-15 items-center">
        <strong className="text-center text-2xl sm:text-4xl font-medium">مدیریت مالی آسون‌تر از همیشه! همین امروز شروع کن.</strong>
        <Button>مشاهده دمو</Button>
      </section>

      <section className="max-w-xl mx-auto">
        <Image 
          src={"/Boxes.png"}
          width={1400}
          height={1400}
          alt=""
          className="drop-shadow-2xl transition-all"
        />
      </section>
    </div>

    </>
  );
}