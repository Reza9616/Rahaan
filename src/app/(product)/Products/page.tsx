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
<p className="text-sm text-muted-foreground">
{product.description}
</p>
</div>

 

 
<button
  className="w-full rounded-xl bg-[#4f89c9] hover:bg-[#1877F2]-400 py-2 text-sm font-medium text-white transition"
 >جزییات بیشتر</button>
 </div>
</div>
))}
</section>
      </main>

      <Footer />
    </>
  );
}
