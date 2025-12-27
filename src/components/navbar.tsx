"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { CartIcon } from "./CartIcon";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X as XIcon, Check } from "lucide-react";
import { useCart } from "@/context/CartContext"; // حتما CartProvider دور اپلیکیشن باشه

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { cart } = useCart(); // گرفتن سبد خرید

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "صفحه اصلی", href: "/" },
    { title: "محصولات نرم افزاری", href: "/Software" },
    { title: "محصولات سخت افزاری", href: "/Products" },
    { title: "درباره ما", href: "/about" },
    { title: "مقالات", href: "/blogpage" }, 
    { title: "تماس با ما", href: "/callus" },
  ];

  // تعداد کل آیتم‌ها
  const totalItems = cart.modules.reduce((acc, m) => acc + m.qty, 0);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#4f89c9] shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* لوگو */}
        <div className={`transition-all duration-500 ${scrolled ? "scale-90" : "scale-100"}`}>
          رهان
        </div>

        {/* منوی دسکتاپ */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors duration-300 font-medium text-sm ${
                scrolled ? "text-white hover:text-white/80" : "text-[#4f89c9] hover:text-[#4f89c9]/80"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* آیکون‌ها */}
        <div className="flex items-center gap-4 relative">
          <Link href="/CartPage" className="relative">
            <CartIcon
              className={`transition-colors duration-300 ${scrolled ? "text-white" : "text-[#4f89c9]"}`}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          <Button
            variant="ghost"
            className={`transition-colors duration-300 ${
              scrolled ? "text-white border-white" : "text-[#4f89c9] border-[#4f89c9]"
            }`}
          >
            دمو رایگان
          </Button>

          {/* موبایل */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-white" : "text-[#4f89c9]"}`}
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#4f89c9] text-white w-full py-4 px-6 transition-all duration-300">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 px-4 rounded hover:bg-[#3b6cb3]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
