// app/about/page.tsx
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";

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
      <main className="relative">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="/header2.jpg"
            alt="About Us"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">درباره ما</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              ما در رهان، با تکیه بر دانش فنی و تجربه تخصصی، راهکارهای نرم‌افزاری یکپارچه برای کسب‌وکارها طراحی می‌کنیم و به آن‌ها کمک می‌کنیم فرآیندهای سازمانی خود را هوشمندتر و سریع‌تر مدیریت کنند.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">شرکت نرم‌افزاری رهان</h2>
            <p className="text-muted-foreground leading-7">
              شرکت رهان با تمرکز بر توسعه نرم‌افزارهای سازمانی و راهکارهای ERP، از سال ۱۳۹۷ فعالیت خود را آغاز کرده است. تیم ما متشکل از هفت نفر متخصص است که هر کدام در حوزه کاری خود مسئولیت دارند و مطابق با منشور اخلاقی شرکت، به صورت هماهنگ و حرفه‌ای فعالیت می‌کنند.
            </p>
            <p className="text-muted-foreground leading-7">
              در طول شش سال گذشته، ما فرصت داشته‌ایم چندین نرم‌افزار تخصصی برای انواع کسب‌وکارها طراحی و توسعه دهیم؛ از سازمان‌ها و هلدینگ‌ها گرفته تا فروشگاه‌ها و وب‌سایت‌ها. هدف ما همواره ایجاد راهکارهایی است که هم ساده و کاربردی باشند و هم نیازهای پیچیده‌ی سازمان‌ها را برطرف کنند.
            </p>
            <p className="text-muted-foreground leading-7">
              تیم ما متشکل از متخصصان تحلیل سیستم، توسعه نرم‌افزار، طراحی رابط کاربری و پشتیبانی است که با همکاری نزدیک، تجربه‌ای مطمئن و پایدار برای مشتریان خلق می‌کنند. ما باور داریم تکنولوژی زمانی ارزشمند است که پیچیدگی‌ها را حذف و بهره‌وری را افزایش دهد.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src="Team.jpg"
              alt="Our Team"
              className="relative rounded-3xl shadow-lg"
            />
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">مسیر رشد رهان</h2>
          <div className="relative border-l-2 border-blue-300 ml-4">
            {timeline.map((step, idx) => (
              <div key={idx} className="mb-10 ml-6 relative">
                <div className="absolute -left-5 top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
