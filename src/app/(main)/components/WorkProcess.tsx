import { Headset, Lightbulb, Settings, Trophy } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "مشاوره تخصصی",
      description: "بررسی نیازهای کسب‌وکار شما و ارائه مشاوره شخصی‌سازی‌شده توسط کارشناسان رهان.",
      icon: <Headset className="w-10 h-10 text-white" />,
    },
    {
      number: "02",
      title: "طراحی استراتژی",
      description: "تدوین راهکارهای یکپارچه ERP و مالی متناسب با فرآیندهای سازمانی شما.",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
    },
    {
      number: "03",
      title: "پیاده‌سازی و اجرا",
      description: "نصب، تنظیم و آموزش نرم‌افزارهای رهان با تمرکز بر بهینه‌سازی فرآیندها.",
      icon: <Settings className="w-10 h-10 text-white" />,
    },
    {
      number: "04",
      title: "نتیجه و پشتیبانی",
      description: "دستیابی به مدیریت هوشمند، بهره‌وری بالاتر و پشتیبانی مداوم برای رشد پایدار.",
      icon: <Trophy className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-blue-600 mb-2">// فرآیند کاری ما</p>
        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">فرآیند کاری اثبات‌شده رهان</h2>

        <div className="flex flex-col items-center justify-center md:flex-row md:gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center relative">
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

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -left-1/2 w-full h-0.5 bg-gray-300 translate-x-1/2" 
                     style={{ width: 'calc(50% + 2rem)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}