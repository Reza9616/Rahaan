import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { Link } from "lucide-react";


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
image: "/erp01.jpg",
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
levels: [
{ title: "پایه", desc: "مناسب شرکت‌های کوچک با نیازهای مالی و اداری پایه" },
{ title: "حرفه‌ای", desc: "مخصوص سازمان‌های متوسط با ماژول‌های کامل‌تر" },
{ title: "سازمانی", desc: "ویژه هلدینگ‌ها با اتوماسیون کامل و سفارشی‌سازی" },
],
},
{
name: "رهان عمومی",
description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
image: "/erp01.jpg",
levels: [
{ title: "پایه", desc: "مناسب شرکت‌های کوچک با نیازهای مالی و اداری پایه" },
{ title: "حرفه‌ای", desc: "مخصوص سازمان‌های متوسط با ماژول‌های کامل‌تر" },
{ title: "سازمانی", desc: "ویژه هلدینگ‌ها با اتوماسیون کامل و سفارشی‌سازی" },
],
}, 
{
name: "رهان طلا و جواهر",
description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
image: "/erp01.jpg",
levels: [
{ title: "پایه", desc: "مناسب شرکت‌های کوچک با نیازهای مالی و اداری پایه" },
{ title: "حرفه‌ای", desc: "مخصوص سازمان‌های متوسط با ماژول‌های کامل‌تر" },
{ title: "سازمانی", desc: "ویژه هلدینگ‌ها با اتوماسیون کامل و سفارشی‌سازی" },
],
},
{
name: "رهان کافه رستوران",
description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
image: "/erp01.jpg",
levels: [
{ title: "پایه", desc: "مناسب شرکت‌های کوچک با نیازهای مالی و اداری پایه" },
{ title: "حرفه‌ای", desc: "مخصوص سازمان‌های متوسط با ماژول‌های کامل‌تر" },
{ title: "سازمانی", desc: "ویژه هلدینگ‌ها با اتوماسیون کامل و سفارشی‌سازی" },
],
},
{
name: "رهان پوشاک",
description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
image: "/erp01.jpg",
levels: [
{ title: "پایه", desc: "مناسب شرکت‌های کوچک با نیازهای مالی و اداری پایه" },
{ title: "حرفه‌ای", desc: "مخصوص سازمان‌های متوسط با ماژول‌های کامل‌تر" },
{ title: "سازمانی", desc: "ویژه هلدینگ‌ها با اتوماسیون کامل و سفارشی‌سازی" },
],
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


<div className="space-y-3">
{product.levels.map((level) => (
<div
key={level.title}
className="rounded-xl bg-muted/40 p-4"
>
<h3 className="font-semibold">سطح {level.title}</h3>
<p className="text-xs text-muted-foreground">
{level.desc}
</p>
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