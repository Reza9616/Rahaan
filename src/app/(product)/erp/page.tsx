import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
 

export default function Erp() {
  return (
  <>
   
  <NavigationMenuDemo/>
<main className="relative">
{/* Hero Section */}
<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
<img
src="/header2.jpg"
alt="ERP Rahaan"
className="absolute inset-0 h-full w-full object-cover"
/>
<div className="absolute inset-0 bg-black/60" />


<div className="relative z-10 text-center text-white px-6">
<h1 className="text-4xl md:text-5xl font-bold mb-4">نرم‌افزار ERP رهان</h1>
<p className="max-w-2xl mx-auto text-lg text-white/90">
راهکار یکپارچه مدیریت فرآیندهای سازمانی و هلدینگی
</p>
</div>
</section>


{/* معرفی کلی */} 

<section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
  
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">ERP رهان چیست؟</h2>
    <p className="text-muted-foreground leading-7">
      نرم‌افزار ERP رهان یک راهکار جامع و یکپارچه است که به‌طور ویژه برای سازمان‌های تجاری و دولتی طراحی شده است تا تمامی فرآیندهای اداری، مالی، عملیاتی و پشتیبانی را در یک سیستم واحد مدیریت کند. این نرم‌افزار با ارائه ماژول‌های تخصصی برای بخش‌های خرید، فروش، انبار، حسابداری، حقوق و دستمزد، دارایی‌های ثابت، تدارکات و مدیریت پروژه، امکان کنترل و نظارت دقیق بر تمامی فعالیت‌های سازمان را فراهم می‌آورد.
    </p>
    <p className="text-muted-foreground leading-7">
      در بخش خرید، نرم‌افزار امکان تعریف چندین سطح تاییدکننده را فراهم می‌کند تا فرآیند تأیید سفارشات با رعایت ساختار سازمانی و سیاست‌های داخلی انجام شود. در بخش فروش، قابلیت مدیریت سفارش‌ها، قیمت‌گذاری پویا، تخفیف‌ها و قراردادها، همراه با امکان ثبت چند مرحله‌ای تأیید، فرآیند فروش را شفاف و دقیق می‌سازد. ماژول انبار نیز به شما امکان پیگیری موجودی، مدیریت ورود و خروج کالا، و اتصال مستقیم به سیستم خرید و فروش را می‌دهد تا هماهنگی بین واحدها بهینه شود.
    </p>
    <p className="text-muted-foreground leading-7">
      با ERP رهان، سازمان‌ها می‌توانند به سادگی گزارش‌های تحلیلی و مالی جامع دریافت کنند، تصمیم‌گیری‌های مدیریتی را سریع‌تر و مبتنی بر داده انجام دهند و فرآیندهای تکراری و دستی را کاهش دهند. رابط کاربری کاربرپسند و مدرن این سیستم، امکان استفاده آسان برای کارکنان با سطوح مختلف دانش را فراهم کرده و سازگاری با استانداردهای ERP جهانی اطمینان می‌دهد که سازمان‌ها از بهترین شیوه‌های مدیریت بهره‌مند شوند.
    </p>
    <p className="text-muted-foreground leading-7">
      این نرم‌افزار، گزینه‌ای ایده‌آل برای سازمان‌های بزرگ و هلدینگ‌هاست که به دنبال افزایش بهره‌وری، کاهش خطاهای انسانی و ایجاد شفافیت در تمامی سطوح مدیریتی هستند. با رهان ERP، مسیر رشد سازمانی و توسعه پایدار هموارتر و قابل پیش‌بینی‌تر می‌شود.
    </p>
    <p className="text-muted-foreground leading-7">
      این سامانه با تمرکز بر اتوماسیون اداری، فرآیندهای پیچیده را ساختارمند کرده و با حذف فعالیت‌های تکراری، دقت، شفافیت و بهره‌وری سازمان را افزایش می‌دهد.
    </p>
  </div>
</section>


{/* زیرسیستم‌ها */}
<section className="bg-muted/40 py-20">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-bold text-center mb-12">زیرسیستم‌های ERP رهان</h2>


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
<h2 className="text-2xl font-bold text-center mb-12">مزایای ERP رهان</h2>


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