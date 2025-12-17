import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";

const products = [
  {
    name: "رهان ERP",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/erp01.jpg",
    slug: "erp",
    levels: [
      { title: "پایه", desc: "مناسب شرکت‌های کوچک با نیازهای مالی و اداری پایه" },
      { title: "حرفه‌ای", desc: "مخصوص سازمان‌های متوسط با ماژول‌های کامل‌تر" },
      { title: "سازمانی", desc: "ویژه هلدینگ‌ها با اتوماسیون کامل و سفارشی‌سازی" },
    ],
  },
  {
    name: "رهان ECO",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/eco01.jpg",
    slug: "Eco",
    levels: [
      { title: "پایه", desc: "مناسب شرکت‌های کوچک با نیازهای مالی و اداری پایه" },
      { title: "حرفه‌ای", desc: "مخصوص سازمان‌های متوسط با ماژول‌های کامل‌تر" },
      { title: "سازمانی", desc: "ویژه هلدینگ‌ها با اتوماسیون کامل و سفارشی‌سازی" },
    ],
  },
  {
    name: "رهان STORE",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/erp01.jpg",
    slug: "storee",
  },
  {
    name: "رهان عمومی",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/erp01.jpg",
    slug: "storee",
  },
  {
    name: "رهان طلا و جواهر",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/erp01.jpg",
    slug: "storee",
  },
  {
    name: "رهان کافه رستوران",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/erp01.jpg",
    slug: "storee",
  },
  {
    name: "رهان پوشاک",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/erp01.jpg",
    slug: "storee",
  },
];

export default function Software() {
  return (
    <>
      <NavigationMenuDemo />

      <main className="bg-background">
        {/* Header */}
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">محصولات نرم‌افزاری رهان</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            انتخاب نرم‌افزار مناسب کسب‌وکار شما، در سه سطح مختلف متناسب با اندازه و نیاز سازمان
          </p>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.slug}
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

                {/* دکمه جزئیات بیشتر */}
                <a
                  href={`/${product.slug}`}
                  className="w-full rounded-xl bg-[#4f89c9] hover:bg-[#3b6fa8] py-3 text-base font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 inline-block text-center"
                >
                  جزئیات بیشتر
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
