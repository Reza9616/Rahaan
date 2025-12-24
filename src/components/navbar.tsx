"use client";
import {
  GlobeIcon,
  LayersIcon,
  Users,
  MenuIcon,
  XIcon,
} from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  type NavItemType,
} from "@/components/ui/navigation-menu";

import { usePathname } from "next/navigation";
import Logo from "./Logo";

export const productLinks: NavItemType[] = [
  {
    title: "محصولات نرم افزاری",
    href: "/Software",
    description: "مشاهده لیست محصولات نرم افزاری",
    icon: GlobeIcon,
  },
  {
    title: "محصولات سخت افزاری",
    href: "/Products",
    description: "مشاهده لیست محصولات سخت افزاری",
    icon: LayersIcon,
  },
  {
    title: "استعلام قیمت",
    href: "/Calculator",
    description: "محاسبه قیمت",
    icon: LayersIcon,
  },
];

export const companyLinks: NavItemType[] = [
  {
    title: "درباره ما",
    href: "/about",
    description: "درباره داستان و تیم ما",
    icon: Users,
  },
  {
    title: "مقالات",
    href: "/blogpage",
    description: "مطالب آموزشی",
    icon: Users,
  },
];

export default function NavigationMenuDemo() {
  return (
    <div className="relative w-full bg-accent px-3 py-4 lg:px-12">
      <div className="sticky top-0 z-50 mx-auto h-14 w-full rounded-lg">
        <div className="flex h-full items-center justify-between">

          <div className="flex items-center gap-x-6">
            <Logo />
            <DesktopMenu />
          </div>

          <div className="flex items-center gap-2">
            <Button className="text-xs sm:text-sm" >
             <a href="/checkout"> دمو رایگان
</a>            </Button>
  
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <NavigationMenu dir="rtl" className="hidden lg:block">
      <NavigationMenuList className="gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                className={`
                  relative px-4 py-3 text-sm font-medium
                  transition-colors duration-300
                  ${isActive ? "text-[#4f89c9]" : "text-muted-foreground"}
                  hover:text-[#4f89c9]
                `}
              >
                {item.title}

                {/* underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-0.5 w-full
                    bg-[#4f89c9] rounded-full
                    transition-transform duration-300
                    ${isActive ? "scale-x-100" : "scale-x-0"}
                  `}
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}


function MobileNav() {
  const sections = [
    { title: "محصولات", list: productLinks },
    { title: "رهان", list: companyLinks },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden rounded-full"
        >
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        showClose={false}
        className="w-full p-0 bg-background rtl"
      >
        {/* header */}
        <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b px-4 bg-background">
          <span className="text-base font-bold">منو</span>
          <SheetClose asChild>
            <Button size="icon" variant="ghost">
              <XIcon className="size-5" />
            </Button>
          </SheetClose>
        </div>

        {/* content */}
        <div className="overflow-y-auto px-4 py-6 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground">
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.list.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <a
                        href={link.href}
                        className="flex w-full rounded-2xl px-4 py-4 text-base font-medium transition hover:bg-muted"
                      >
                        {link.title}
                      </a>
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
