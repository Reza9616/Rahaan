import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";

export default function StoreSoftware() {
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
      </main>

      <Footer />
    </>
  );
}
