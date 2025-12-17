'use client';

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface DropItem {
  time: string;
  name: string;
  collection: string;
  imageSrc: string;
  badge?: string;
}

export interface ProductDropCardProps {
  title: string;
  subtitle: string;
  items: DropItem[];
}

export const ProductDropCard = ({
  title,
  subtitle,
  items,
}: ProductDropCardProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsToShow, setItemsToShow] = React.useState(3);
  const [isHovered, setIsHovered] = React.useState(false);

  const sliderRef = React.useRef<HTMLDivElement>(null);
  const isRTL = true;

  /* ---------- Responsive ---------- */
  React.useEffect(() => {
    const updateItemsToShow = () => {
      const w = window.innerWidth;
      if (w >= 1280) setItemsToShow(6);
      else if (w >= 1024) setItemsToShow(5);
      else if (w >= 640) setItemsToShow(3);
      else setItemsToShow(1);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsToShow);
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  /* ---------- Slider ---------- */
  const goToSlide = (index: number) => {
    if (items.length <= itemsToShow) return; // جلوگیری از حرکت وقتی آیتم کم است
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${isRTL ? clamped * 100 : -clamped * 100}%)`;
    }
  };

  /* ---------- Auto play ---------- */
  React.useEffect(() => {
    if (isHovered || items.length <= itemsToShow) return; // توقف اتوپلی اگر آیتم کم است
    const t = setInterval(() => {
      if (canNext) goToSlide(currentIndex + 1);
      else goToSlide(0);
    }, 4500);
    return () => clearInterval(t);
  }, [currentIndex, isHovered, itemsToShow]);

  /* ---------- Render ---------- */
  return (
<Card
  className="relative w-full bg-gradient-to-br from-background to-muted/40 backdrop-blur-md shadow-xl border-none"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <CardHeader className="text-center space-y-2">
    <CardTitle className="text-xl sm:text-2xl font-bold">
      {title}
    </CardTitle>
    <CardDescription>{subtitle}</CardDescription>
  </CardHeader>

  <CardContent className="relative overflow-hidden pb-12">
    <div className="relative">
      {/* Slider */}
      <div
        ref={sliderRef}
        className={`flex gap-6 transition-transform duration-500 ease-out ${
          items.length <= itemsToShow ? "justify-center" : ""
        }`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="group shrink-0 rounded-2xl bg-background/80 backdrop-blur border shadow-md hover:shadow-xl transition-all duration-500"
            style={{
              width: `${100 / itemsToShow}%`,
              minWidth: `${100 / itemsToShow}%`,
            }}
          >
            <div className="relative aspect-square overflow-hidden rounded-t-2xl">
              <img
                src={item.imageSrc}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {item.badge && (
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full shadow">
                  {item.badge}
                </span>
              )}
            </div>

            <div className="p-4 space-y-3">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground">
                {item.collection}
              </p>
              <Button className="w-full rounded-xl">
                مشاهده جزئیات
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </CardContent>

  {/* دکمه‌ها زیر اسلایدر */}
<div className="mt-4 flex justify-center gap-2 z-20 relative">
  {/* دکمه قبلی */}
  <Button
    onClick={() => goToSlide(currentIndex - 1)}
    disabled={!canPrev}
    className="
      w-14 h-14
      bg-primary/95 text-primary-foreground
      rounded-lg
      shadow-lg
      flex items-center justify-center
      hover:scale-110 transition
      z-20
    "
  >
    <ChevronLeft className="w-6 h-6" />
  </Button>

  {/* دکمه بعدی */}
  <Button
    onClick={() => goToSlide(currentIndex + 1)}
    disabled={!canNext}
    className="
      w-14 h-14
      bg-primary/95 text-primary-foreground
      rounded-lg
      shadow-lg
      flex items-center justify-center
      hover:scale-110 transition
      z-20
    "
  >
    <ChevronRight className="w-6 h-6" />
  </Button>
</div>
</Card>

    
  );
};
