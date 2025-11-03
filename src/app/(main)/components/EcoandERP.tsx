import AnimatedImageSection from '@/components/ui/AnimatedImageSection';

export default function StorePage() {
  return (
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
  );
}