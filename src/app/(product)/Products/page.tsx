import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { Link } from "lucide-react";

const hardwareProducts = [
  {
    name: "صندوق فروشگاهی",
    description: "فیش پرینتر با سرعت چاپ بالا و مناسب فروشگاه‌ها",
    image: "/safebox.jpg",
    slug: "printer-a",
   
  },
  {
    name: "فیش پرینتر مدل B",
    description: "فیش پرینتر جمع و جور با قابلیت چاپ حرارتی",
    image: "/fishprinter.png",
    slug: "printer-b",
   
  },
  {
    name: "موس حرفه‌ای",
    description: "موس با دقت بالا و طراحی ارگونومیک",
    image: "/mouse.jpg",
    slug: "mouse",
    
  },
  {
    name: "بارکد خوان",
    description: "کیبورد با کلیدهای نرم و عمر طولانی",
    image: "/barcod.png",
    slug: "keyboard",
    
  },
];

export default function Products() {
  return (
    <>
      <NavigationMenuDemo />

      <main className="bg-background">
        {/* Header */}
        <section className="py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">محصولات سخت‌افزاری رهان</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            تجهیزات سخت‌افزاری رهان شامل فیش پرینتر، موس و کیبورد، مناسب فروشگاه‌ها و کسب‌وکارها
          </p>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hardwareProducts.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl overflow-hidden bg-gradient-to-b from-white to-gray-100 border shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 md:h-64 w-full object-cover rounded-t-3xl"
              />

              <div className="p-6 space-y-5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{product.name}</h2>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">{product.description}</p>
                </div>

                 

                <button
                  className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 hover:brightness-110 shadow-lg py-3 text-sm md:text-base font-medium text-white transition-all"
                >
                  جزییات بیشتر
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
