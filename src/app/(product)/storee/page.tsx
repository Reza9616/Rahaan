import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";

export default function storee() {
  const modules = [
    "مدیریت فروش",
    "مدیریت موجودی کالا",
    "مدیریت مشتریان",
    "مدیریت سفارشات",
    "مدیریت پرداخت‌ها",
    "مدیریت پرسنل",
    "مدیریت تخفیف و کمپین",
    "گزارش‌گیری و تحلیل فروش",
  ];

  const softwareList = [
    { 
      name: "نرم‌افزار پابلیک",
      description:  `نرم‌افزار فروشگاهی رهان، ابزاری جامع و ساده برای مدیریت تمام عملیات‌های روزمره یک فروشگاه است. 
با رابط کاربری بسیار آسان و طراحی کاربرپسند، حتی افرادی که تجربه کمی در کار با سیستم‌های کامپیوتری دارند، 
می‌توانند به راحتی از تمام امکانات نرم‌افزار بهره‌مند شوند. این نرم‌افزار شامل ماژول‌های متنوعی است که 
فرآیندهای فروش، مدیریت موجودی کالا، ثبت سفارشات، مدیریت مشتریان، پیگیری پرداخت‌ها و گزارش‌گیری دقیق 
را در یک سیستم واحد و یکپارچه ارائه می‌دهد.`,
      features: [true,true,true,true,true,false,false,true]
    },  
{
  name: "نرم‌افزار طلا و جواهر فروشی",
  description: `نرم‌افزار فروشگاهی رهان برای طلا و جواهر، یک راهکار جامع و حرفه‌ای است که تمامی نیازهای مدیریت فروشگاه‌های طلا و جواهر را پوشش می‌دهد. این نرم‌افزار با طراحی کاربرپسند و رابط کاربری ساده، امکان ثبت، پیگیری و مدیریت دقیق موجودی طلا، سنگ‌ها و جواهرات را فراهم می‌کند و از خطاهای انسانی در ثبت تراکنش‌ها جلوگیری می‌کند.

با این نرم‌افزار، فروشندگان می‌توانند به راحتی قیمت‌گذاری، تخفیف‌ها، فروش ترکیبی و سفارشات مشتریان را مدیریت کنند و گزارش‌های لحظه‌ای از فروش و موجودی دریافت کنند. همچنین، امکان پیگیری پرداخت‌ها، مدیریت فاکتورها و کنترل سود و زیان به صورت دقیق فراهم شده است.

این سیستم برای جواهر فروشی‌ها ضروری است، زیرا علاوه بر افزایش سرعت و دقت در عملیات روزمره، امنیت کالاها و اطلاعات مشتریان را تضمین می‌کند. نرم‌افزار طلا و جواهر رهان باعث می‌شود صاحبان فروشگاه‌ها تصمیمات مدیریتی بهتری بگیرند، فرآیندهای فروش را بهینه کنند و تجربه خریدی مطمئن و حرفه‌ای برای مشتریان خود فراهم آورند.`,
  features: [true, true, true, true, true, true, true, true]
}, 
    { 
      name: "نرم‌افزار پوشاک",
      description: "مدیریت فروش و موجودی پوشاک و اکسسوری‌ها",
      features: [true,true,true,true,true,true,true,true]
    },
    { 
      name: "نرم‌افزار کافه و رستوران",
      description: "مدیریت سفارشات، میزها و انبار کافه و رستوران",
      features: [true,true,true,true,true,true,false,true]
    },
    { 
      name: "نرم‌افزار سالن‌های زیبایی",
      description: "مدیریت مشتریان، نوبت‌ها و خدمات سالن‌های زیبایی",
      features: [true,false,true,true,false,true,false,true]
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
            alt="Store Software Rahaan"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">نرم‌افزارهای فروشگاهی رهان</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              راهکارهای هوشمند مدیریت فروشگاه‌ها، رستوران‌ها، سالن‌های زیبایی و کسب‌وکارهای کوچک
            </p>
          </div>
        </section>

        {/* معرفی نرم‌افزارها */}
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
          {softwareList.map((software) => (
            <div key={software.name} className="space-y-8">
              <h2 className="text-2xl font-bold">{software.name}</h2>
              <p className="text-muted-foreground leading-7">{software.description}</p>

              {/* جدول ماژول‌ها */}
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3">ماژول</th>
                      <th className="px-4 py-3">دارد / ندارد</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {modules.map((module, idx) => (
                      <tr key={module}>
                        <td className="px-4 py-2">{module}</td>
                        <td className={`px-4 py-2 font-bold ${software.features[idx] ? "text-green-600" : "text-red-600"}`}>
                          {software.features[idx] ? "✔" : "✖"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>
        {/* نظر مشتریان */}
  <section className="bg-muted/40 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      نظر مشتریان درباره ERP رهان
    </h2>

    {/* فقط ۳ کارت نظر مشتری — کاملاً متعادل */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {/* نظر ۱ */}
      <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
        <p className="text-foreground text-base leading-8 mb-6 italic">
          «ERP رهان باعث شد تمامی فرآیندهای مالی و انبار ما یکپارچه شود. گزارش‌گیری دقیق و سرعت بالای سیستم، تصمیم‌گیری مدیریتی را برای ما بسیار ساده‌تر کرده است.»
        </p>
        <div className="border-t pt-6">
          <p className="font-semibold text-foreground">مدیر مالی</p>
          <p className="text-sm text-muted-foreground">
            شرکت بازرگانی آرمان
          </p>
        </div>
      </div>

      {/* نظر ۲ */}
      <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
        <p className="text-foreground text-base leading-8 mb-6 italic">
          «اتوماسیون فرآیندها در ERP رهان باعث کاهش خطاهای انسانی و افزایش شفافیت بین واحدها شده است. پشتیبانی قوی هم از مزایای مهم این نرم‌افزار است.»
        </p>
        <div className="border-t pt-6">
          <p className="font-semibold text-foreground">مدیر فناوری اطلاعات</p>
          <p className="text-sm text-muted-foreground">
            هلدینگ توسعه پایدار
          </p>
        </div>
      </div>

      {/* نظر ۳ */}
      <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
        <p className="text-foreground text-base leading-8 mb-6 italic">
          «ماژول‌های خرید، فروش و حسابداری رهان کاملاً با نیازهای سازمان ما سازگار است. این سیستم نظم و کنترل دقیقی به فرآیندهای اجرایی ما داده است.»
        </p>
        <div className="border-t pt-6">
          <p className="font-semibold text-foreground">مدیرعامل</p>
          <p className="text-sm text-muted-foreground">
            شرکت صنعتی پیشرو
          </p>
        </div>
      </div>
    </div>

    {/* کارت اقدام جداگانه — در مرکز و برجسته */}
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#4f89c9] text-[#4f89c9] to-indigo-700 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          آماده‌اید کسب‌وکارتان را متحول کنید؟
        </h3>
        <p className="text-lg mb-8 opacity-90">
          همین حالا استعلام قیمت بگیرید و بهترین پیشنهاد را برای سازمان خود دریافت کنید.
        </p>
   <button className="bg-white text-[#4f89c9]  px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
         <a
  href="/Calculator"
  className="bg-white text-[#4f89c9] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition inline-block text-center"
>
  استعلام قیمت  
</a>
        </button>
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="font-medium">تیم رهان</p>
          <p className="text-sm opacity-80">همیشه در کنار شما</p>
        </div>
      </div>
    </div>
  </div>
</section>{/* ویدیوی معرفی */}
<section className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-2xl font-bold text-center mb-6">
      ویدیوی معرفی نرم‌افزار ERP رهان
    </h2>
    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
      در این ویدیو با امکانات، ماژول‌ها و مزایای نرم‌افزار ERP رهان به‌صورت
      خلاصه و کاربردی آشنا شوید.
    </p>

    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/XXXXXX/vt/frame"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          title="ویدیوی معرفی ERP رهان"
        />
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </>
  );
}
