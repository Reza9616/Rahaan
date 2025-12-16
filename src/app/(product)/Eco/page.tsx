import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";


export default function Eco() {
    return (
        <>

            <NavigationMenuDemo />
            <main className="relative">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <img
                        src="/header2.jpg"
                        alt="ECO Rahaan"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />


                    <div className="relative z-10 text-center text-white px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">نرم افزار های صنعتی و بازرگانی رهان</h1>
                        <p className="max-w-2xl mx-auto m text-lg text-white/90">
                            راهکار یکپارچه مدیریت فرآیندهای سازمانی و هلدینگی
                        </p>
                    </div>
                </section>


                {/* معرفی کلی */}
               <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
  {/* تصویر بالای متن */}
  <div className="relative w-full">
    <div className="absolute -inset-4 bg-lainer-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
    <img
      src="/ECO.png"
      alt="ERP Dashboard"
      className="relative rounded-3xl w-full"
    />
  </div>

  {/* متن توضیحات */}
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">نرم‌افزار صنعتی و بازرگانی رهان</h2>
    <p className="text-muted-foreground leading-7">
      نرم‌افزار صنعتی و بازرگانی رهان یک راهکار سبک و کاربردی است که برای کسب‌وکارهای صنعتی، تولیدی و بازرگانی طراحی شده تا فرآیندهای عملیاتی، خرید، فروش و انبارداری را به شکل ساده و یکپارچه مدیریت کند. این نسخه، با تمرکز بر سرعت، سادگی و بهینه‌سازی فرآیندها، مناسب شرکت‌هایی است که به دنبال افزایش بهره‌وری و کاهش خطاهای انسانی هستند.
    </p>
    <p className="text-muted-foreground leading-7">
      در بخش خرید، امکان تعریف چندین سطح تایید سفارش و مدیریت تأمین‌کنندگان فراهم شده تا فرآیندهای سفارش‌دهی دقیق و قابل پیگیری باشند. بخش فروش با قابلیت ثبت سفارشات، مدیریت قیمت و تخفیف، و پیگیری قراردادها، به تیم فروش کمک می‌کند تا عملکرد شفاف و بهینه داشته باشد. ماژول انبار نیز کنترل موجودی، ورود و خروج کالا، و اتصال مستقیم به خرید و فروش را امکان‌پذیر می‌کند.
    </p>
    <p className="text-muted-foreground leading-7">
      با استفاده از این نرم‌افزار، مدیران و کارکنان می‌توانند گزارش‌های تحلیلی و عملیاتی سریع دریافت کنند، فرآیندهای روزمره و تکراری کاهش یابد و هماهنگی بین واحدهای مختلف سازمان به شکل قابل توجهی بهبود پیدا کند. رابط کاربری ساده و مدرن این سیستم باعث می‌شود کاربران با سطوح مختلف تجربه، به راحتی از آن استفاده کنند.
    </p>
    <p className="text-muted-foreground leading-7">
      این راهکار، گزینه‌ای ایده‌آل برای شرکت‌های صنعتی و بازرگانی کوچک تا متوسط است که می‌خواهند بدون پیچیدگی‌های نرم‌افزارهای سازمانی بزرگ، فرآیندهای خود را شفاف، سریع و کنترل‌شده مدیریت کنند و مسیر رشد و توسعه کسب‌وکارشان را هموارتر کنند.
    </p>
  </div>
</section>


                {/* زیرسیستم‌ها */}
                <section className="bg-muted/40 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-2xl font-bold text-center mb-12">زیرسیستم‌های صنعتی و بازرگانی رهان</h2>


                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {["حسابداری", "مدیریت وجه نقد", "خرید", "فروش", "انبار", "دارایی ثابت", "تولید", "بهای تمام‌شده", "حقوق و دستمزد", "پرسنلی", "تعمیرات و نگهداری"].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border bg-background p-6 shadow-sm hover:shadow-md transition"
                                    >
                                        <h3 className="font-semibold text-lg mb-2">{item}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            مدیریت هوشمند و یکپارچه ماژول {item} در بستر ERP رهان.
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>


                {/* مزایا */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-2xl font-bold text-center mb-12">مزایای صنعتی و بازرگانی رهان</h2>


                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <h3 className="font-semibold">یکپارچگی کامل</h3>
                            <p className="text-muted-foreground text-sm leading-6">
                                تمامی اطلاعات سازمان در یک سامانه متمرکز و هماهنگ مدیریت می‌شود.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-semibold">اتوماسیون فرآیندها</h3>
                            <p className="text-muted-foreground text-sm leading-6">
                                تبدیل فرآیندهای دستی و پیچیده به گردش‌کارهای خودکار و شفاف.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-semibold">مقیاس‌پذیر و امن</h3>
                            <p className="text-muted-foreground text-sm leading-6">
                                مناسب برای شرکت‌های در حال رشد و هلدینگ‌های بزرگ با امنیت بالا.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-2xl font-bold mb-8 text-center">مقایسه ماژول‌ها و امکانات نرم‌افزار</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-center">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3">ماژول</th>
          <th className="px-4 py-3">نسخه ۱</th>
          <th className="px-4 py-3">نسخه ۲</th>
          <th className="px-4 py-3">نسخه ۳</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-4 py-2">حسابداری</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
        </tr>
        <tr>
          <td className="px-4 py-2">خزانه</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
        </tr>
        <tr>
          <td className="px-4 py-2">فروش و بازرگانی</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
        </tr>
        <tr>
          <td className="px-4 py-2">خرید و تدارکات</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
        </tr>
        <tr>
          <td className="px-4 py-2">انبارداری</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
        </tr>
        <tr>
          <td className="px-4 py-2">حقوق دستمزد</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-red-600 font-bold">✖</td>
        </tr>
        <tr>
          <td className="px-4 py-2">پرسنلی</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-red-600 font-bold">✖</td>
        </tr>
        <tr>
          <td className="px-4 py-2">تولید</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-red-600 font-bold">✖</td>
          <td className="px-4 py-2 text-red-600 font-bold">✖</td>
        </tr>
        <tr>
          <td className="px-4 py-2">دارایی ثابت</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-red-600 font-bold">✖</td>
          <td className="px-4 py-2 text-red-600 font-bold">✖</td>
        </tr>
        <tr>
          <td className="px-4 py-2">با اسکول</td>
          <td className="px-4 py-2 text-green-600 font-bold">✔</td>
          <td className="px-4 py-2 text-red-600 font-bold">✖</td>
          <td className="px-4 py-2 text-red-600 font-bold">✖</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
            </main>
            <Footer />
        </>
    );
}