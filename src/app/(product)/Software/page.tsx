"use client";
import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    name: "رهان ERP",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/erp01.jpg",
    slug: "erp",
  },
  {
    name: "رهان ECO",
    description: "راهکار جامع مدیریت سازمانی ویژه شرکت‌ها و هلدینگ‌ها",
    image: "/eco01.jpg",
    slug: "eco",
  },
  {
    name: "رهان STORE",
    description: "راهکار جامع مدیریت فروشگاه‌ها و کسب‌وکار",
    image: "/erp01.jpg",
    slug: "store",
  },
  {
    name: "رهان عمومی",
    description: "راهکار جامع مدیریت عمومی سازمان‌ها",
    image: "/erp01.jpg",
    slug: "general",
  },
  {
    name: "رهان طلا و جواهر",
    description: "مدیریت فروش و موجودی طلا و جواهر",
    image: "/erp01.jpg",
    slug: "gold",
  },
  {
    name: "رهان کافه رستوران",
    description: "راهکار جامع مدیریت رستوران و کافه‌ها",
    image: "/erp01.jpg",
    slug: "cafe",
  },
  {
    name: "رهان پوشاک",
    description: "سیستم مدیریت فروشگاه‌های پوشاک و لباس",
    image: "/erp01.jpg",
    slug: "clothing",
  },
];

export default function Software() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavigationMenuDemo />
      <main className="bg-background mt-5">
        <section className="max-w-7xl mx-auto px-6 pb-24 flex flex-col-reverse lg:flex-row gap-6">
          <div className="lg:w-3/4">
          <div className="mb-6">
            <Input
              type="text"
              placeholder="جستجو محصولات..."
              className="w-full border rounded p-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <div
                    key={p.slug}
                    className="border rounded-xl p-4 shadow hover:shadow-lg transition overflow-hidden"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-48 w-full object-cover mb-4"
                    />
                    <h2 className="text-lg font-bold">{p.name}</h2>
                    <p className="text-sm text-gray-500 mb-2">{p.description}</p>
                    <Button 
                      size={'sm'} 
                      variant={'secondary'}
                      className="mt-2"
                    >
                      <Link
                        href={`/${p.slug}`}
                      >
                        جزئیات بیشتر
                      </Link>
                    </Button>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500">
                  محصولی یافت نشد
                </div>
              )}
            </div>
          </div>
          <div className="lg:fixed left-20 lg:col-span-1 space-y-6">
            <div className="border rounded-lg p-4 shadow">
              <h2 className="font-bold mb-2 text-lg">فیلتر محصولات</h2>
              <select className="border rounded p-2 w-full mb-2">
                <option value="">همه</option>
                <option value="erp">رهان ERP</option>
                <option value="eco">رهان ECO</option>
              </select>
              <select className="border rounded p-2 w-full">
                <option value="">دسته‌بندی</option>
                <option value="small">سطح پایه</option>
                <option value="medium">سطح حرفه‌ای</option>
                <option value="enterprise">سطح سازمانی</option>
              </select>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
