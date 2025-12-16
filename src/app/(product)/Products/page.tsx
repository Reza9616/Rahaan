import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { Link } from "lucide-react";

const hardwareProducts = [
  {
    name: "صندوق فروشگاهی",
    description: "فیش پرینتر با سرعت چاپ بالا و مناسب فروشگاه‌ها",
    image: "/safebox.jpg",
    slug: "printer-a",
    specs: [
      { title: "سرعت چاپ", desc: "200 میلی‌متر در ثانیه" },
      { title: "نوع اتصال", desc: "USB و شبکه" },
    ],
  },
  {
    name: "فیش پرینتر مدل B",
    description: "فیش پرینتر جمع و جور با قابلیت چاپ حرارتی",
    image: "/fishprinter.png",
    slug: "printer-b",
    specs: [
      { title: "سرعت چاپ", desc: "150 میلی‌متر در ثانیه" },
      { title: "نوع اتصال", desc: "USB و بلوتوث" },
    ],
  },
  {
    name: "موس حرفه‌ای",
    description: "موس با دقت بالا و طراحی ارگونومیک",
    image: "/mouse.jpg",
    slug: "mouse",
    specs: [
      { title: "نوع حسگر", desc: "اپتیکال با دقت 1600 DPI" },
      { title: "قابلیت اتصال", desc: "USB و بی‌سیم" },
    ],
  },
  {
    name: "بارکد خوان",
    description: "کیبورد با کلیدهای نرم و عمر طولانی",
    image: "/barcod.png",
    slug: "keyboard",
    specs: [
      { title: "نوع اتصال", desc: "USB" },
      { title: "کلیدها", desc: "مقاوم و ضد سایش" },
    ],
  },
];

export default function Products() {
  return (
    <>
      <NavigationMenuDemo />

      <main className="bg-background">
        {/* Header */}
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">محصولات سخت‌افزاری رهان</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تجهیزات سخت‌افزاری رهان شامل فیش پرینتر، موس و کیبورد، مناسب فروشگاه‌ها و کسب‌وکارها
          </p>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {hardwareProducts.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl border bg-background shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
className="h-48 w-full object-cover"
              />

              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>

                <div className="space-y-3">
                  {product.specs.map((spec) => (
                    <div key={spec.title} className="rounded-xl bg-muted/40 p-4">
                      <h3 className="font-semibold">{spec.title}</h3>
                      <p className="text-xs text-muted-foreground">{spec.desc}</p>
                    </div>
                  ))}
                </div>

              <button
  className="w-full rounded-xl bg-[#1877F2] hover:bg-[#1877F2]-400 py-2 text-sm font-medium text-white transition"
 >افزودن به سبد خرید</button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}