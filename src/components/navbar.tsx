"use client";

import { GlobeIcon, LayersIcon, Users, Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";

export const productLinks = [
  { title: "محصولات نرم افزاری", href: "/Software", description: "مشاهده لیست محصولات نرم افزاری", icon: GlobeIcon },
  { title: "محصولات سخت افزاری", href: "/Products", description: "مشاهده لیست محصولات سخت افزاری", icon: LayersIcon },
  { title: "استعلام قیمت", href: "/Calculator", description: "محاسبه قیمت", icon: LayersIcon },
];

export const companyLinks = [
  { title: "درباره ما", href: "/about", description: "درباره داستان و تیم ما", icon: Users },
  { title: "مقالات", href: "/blogpage", description: "مطالب آموزشی", icon: Users },
];

const sections = [
  { title: "محصولات", list: productLinks },
  { title: "رهان", list: companyLinks },
];

function DesktopMenu() {
  const pathname = usePathname();
  const navItems = [
    { title: "صفحه اصلی", href: "/" },
    { title: "محصولات نرم افزاری", href: "/Software" },
    { title: "محصولات سخت افزاری", href: "/Products" },
    { title: "درباره ما", href: "/about" },
    { title: "مقالات", href: "/blogpage" },
    { title: "قیمت‌ها", href: "/Calculator" },
    { title: "تماس با ما", href: "/callus" },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-4 py-2 text-sm font-medium transition-colors ${
              isActive ? "text-[#4f89c9]" : "text-muted-foreground hover:text-[#4f89c9]"
            }`}
          >
            {item.title}
            {isActive && (
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#4f89c9] rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full p-0 bg-background" dir="rtl">
        <div className="flex h-14 items-center justify-between border-b px-4">
          <span className="font-bold">منو</span>
          <SheetClose asChild>
            <Button size="icon" variant="ghost">
              <XIcon className="h-5 w-5" />
            </Button>
          </SheetClose>
        </div>

        <div className="overflow-y-auto px-4 py-6 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.list.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link href={link.href} className="flex items-center gap-3 rounded-2xl px-4 py-4 text-base font-medium hover:bg-muted transition">
                        {link.icon && <link.icon className="h-5 w-5 text-[#4f89c9]" />}
                        <span>{link.title}</span>
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function NavigationMenuDemo() {
  return (
    <div className="relative w-full bg-accent px-4 py-4 lg:px-12">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <DesktopMenu />
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="text-sm">
            <a href="/checkout">دمو رایگان</a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </div>
  );
}