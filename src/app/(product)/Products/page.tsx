"use client";
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
import { useEffect, useState } from "react";

interface Product {
  KalaPuID: number;
  KalaName: string;
  KalaCod: number;
  KalaBarCode: string;
  KalaSellEnable: boolean;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('/api/products')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">در حال بارگذاری...</div>;

  const filteredProducts = products.filter(p =>
    p.KalaName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavigationMenuDemo />
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="lg:col-span-1 space-y-6">
          <div className="border rounded-lg p-4 shadow ">
            <h2 className="font-bold mb-2 text-lg">فیلتر محصولات</h2>
            <ProductFilter />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6">
            <input
              type="text"
              placeholder="جستجو محصولات..."
              className="w-full border rounded p-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(p => (
                <div key={p.KalaPuID} className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col">
  <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4">
    <span>تصویر</span>
  </div>
  <h2 className="text-lg font-semibold">{p.KalaName}</h2>
  <p className="text-sm text-gray-500 mb-2">کد محصول: {p.KalaCod}</p>

  <button
    className="mt-auto w-full bg-[#4f89c9] hover:bg-[#4f89c9] text-white py-2 rounded-lg font-semibold transition"
    onClick={() => alert(`${p.KalaName} به سبد خرید اضافه شد!`)}
  >
    افزودن به سبد خرید
  </button>
</div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                محصولی یافت نشد
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

/* فیلتر محصولات ساده */
function ProductFilter() {
  return (
    <div className="space-y-2">
      <div>
        <label>وضعیت فروش:</label>
        <select className="border rounded p-1 w-full">
          <option value="">همه</option> 
          <option value="unavailable">ناموجود</option>
        </select>
      </div>
      <div>
        <label>دسته‌بندی:</label>
        <select className="border rounded p-1 w-full">
          <option value="">همه</option>
          <option value="1">دسته 1</option>
          <option value="2">دسته 2</option>
        </select>
      </div>
    </div>
  );
}
