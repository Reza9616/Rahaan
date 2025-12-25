"use client";

import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  const timeline = [
    {
      title: "شروع فعالیت",
      description:
        "از سال ۱۳۹۷، تیم هفت نفره ما فعالیت خود را در زمینه توسعه نرم‌افزارهای سازمانی آغاز کرد.",
    },
    {
      title: "توسعه نرم‌افزارهای متعدد",
      description:
        "طی شش سال گذشته، چندین نرم‌افزار تخصصی برای سازمان‌ها، هلدینگ‌ها، فروشگاه‌ها و وب‌سایت‌ها طراحی شده است.",
    },
    {
      title: "تمرکز بر تجربه مشتری",
      description:
        "هر مرحله از توسعه نرم‌افزار، مطابق منشور اخلاقی تیم و با هدف خلق تجربه مطمئن و پایدار برای مشتریان انجام می‌شود.",
    },
    {
      title: "ماموریت و چشم‌انداز",
      description:
        "رهان با راهکارهای نوآورانه و انعطاف‌پذیر، مسیر رشد و موفقیت کسب‌وکارها را هموار می‌کند.",
    },
  ];

  return (
    <>
      <NavigationMenuDemo />

      <main
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
        dir="rtl"
      >
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4f89c9]/10 to-transparent" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#4f89c9]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-black mb-6"
            >
              <span className="bg-gradient-to-l from-[#4f89c9] via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                درباره رهان
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed"
            >
              ما در رهان، با تکیه بر دانش فنی و تجربه تخصصی، راهکارهای نرم‌افزاری
              یکپارچه برای کسب‌وکارها طراحی می‌کنیم.
            </motion.p>
          </div>
        </section>

        {/* Content */}
       {/* Content Section with Background Image */}
<section className="relative overflow-hidden">
  {/* background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url(/Aboutus.jpg)" }}
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-black/30" />

  <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center text-white">
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold">
        شرکت نرم‌افزاری رهان
      </h2>

      <p className="text-white/90 leading-8">
        شرکت رهان با تمرکز بر توسعه نرم‌افزارهای سازمانی و راهکارهای ERP،
        از سال ۱۳۹۷ فعالیت خود را آغاز کرده است. تیم ما متشکل از هفت نفر
        متخصص است که هر کدام در حوزه کاری خود مسئولیت دارند.
      </p>

      <p className="text-white/85 leading-8">
        طی شش سال گذشته، ما فرصت طراحی و توسعه نرم‌افزارهای تخصصی برای
        سازمان‌ها، هلدینگ‌ها، فروشگاه‌ها و وب‌سایت‌ها را داشته‌ایم.
      </p>

      <p className="text-white/85 leading-8">
        ما باور داریم تکنولوژی زمانی ارزشمند است که پیچیدگی‌ها را حذف و
        بهره‌وری را افزایش دهد.
      </p>
    </motion.div>

    {/* optional image/card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="hidden lg:block"
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
        <h3 className="text-xl font-bold mb-4 text-[#cfe5ff]">
          چرا رهان؟
        </h3>
        <ul className="space-y-3 text-white/90">
          <li>• تجربه عملیاتی</li>
          <li>• راهکارهای هوشمندانه</li>
          <li>• پشتیبانی متعهدانه</li>
          <li>• وب اپلیکیشن رهان</li>
          <li>• هوش مصنوعی رهان</li>
        </ul>
      </div>
    </motion.div>
  </div>
</section>

        {/* Timeline */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-16">
            مسیر رشد رهان
          </h2>

          <div className="relative border-r-2 border-[#4f89c9]/30 pr-6">
            {timeline.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mb-12 relative"
              >
                <div className="absolute -right-[14px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#4f89c9] to-indigo-600 border-4 border-white shadow-lg" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
