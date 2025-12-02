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
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const startPos = React.useRef(0);
  const currentTranslate = React.useRef(0);
  const prevTranslate = React.useRef(0);
  const animationID = React.useRef<number | null>(null);

  const isRTL = true;
  // React.useMemo(() => {
  //   return document.documentElement.dir === 'rtl' || 
  //          getComputedStyle(document.documentElement).direction === 'rtl';
  // }, []);

  React.useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsToShow(6);
      if (width >= 640) setItemsToShow(5);
      else if (width >= 540) setItemsToShow(3);
      else setItemsToShow(1);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsToShow);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const goToSlide = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    
    const translateValue = isRTL 
      ? clampedIndex * 100 
      : clampedIndex * -100;

    currentTranslate.current = translateValue;
    prevTranslate.current = translateValue;
    setSliderPosition();
  };

  const handlePrev = () => goToSlide(currentIndex - 1);
  const handleNext = () => goToSlide(currentIndex + 1);

  const setSliderPosition = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate.current}%)`;
    }
  };

  const animation = () => {
    setSliderPosition();
    if (isDragging.current) {
      animationID.current = requestAnimationFrame(animation);
    }
  };

  const touchStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;

    isDragging.current = true;
    startPos.current = getPositionX(e);
    prevTranslate.current = currentTranslate.current;
    sliderRef.current.style.transition = 'none';

    if ('cancelable' in e && e.cancelable) {
      e.preventDefault();
    }

    animationID.current = requestAnimationFrame(animation);
  };

  const touchMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !sliderRef.current) return;

    const currentPosition = getPositionX(e);
    const diff = currentPosition - startPos.current;

    const sliderWidth = sliderRef.current.offsetWidth;
    const translateDiff = (diff / sliderWidth) * 100;

    currentTranslate.current = prevTranslate.current + (isRTL ? translateDiff : -translateDiff);

    if ('cancelable' in e && e.cancelable) {
      e.preventDefault();
    }
  };

  const touchEnd = () => {
    if (!isDragging.current || !sliderRef.current) return;

    cancelAnimationFrame(animationID.current!);
    isDragging.current = false;
    sliderRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';

    const movedBy = currentTranslate.current - prevTranslate.current;

    const threshold = 20;

    let shouldGoNext = false;
    let shouldGoPrev = false;

    if (isRTL) {
      shouldGoNext = movedBy > threshold && currentIndex < maxIndex;
      shouldGoPrev = movedBy < -threshold && currentIndex > 0;
    } else {
      shouldGoNext = movedBy < -threshold && currentIndex < maxIndex;
      shouldGoPrev = movedBy > threshold && currentIndex > 0;
    }

    if (shouldGoNext) {
      goToSlide(currentIndex + 1);
    } else if (shouldGoPrev) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(currentIndex);
    }
  };

  const getPositionX = (e: React.MouseEvent | React.TouchEvent): number => {
    return 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  };

  React.useEffect(() => {
    goToSlide(currentIndex);
  }, [itemsToShow, isRTL]);

  return (
    <Card className="w-full mx-auto overflow-hidden bg-accent" dir="rtl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base sm:text-2xl">{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="دراپ قبلی"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="دراپ بعدی"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 cursor-grab active:cursor-grabbing select-none"
          style={{ touchAction: 'pan-y' }}
          onMouseDown={touchStart}
          onMouseMove={touchMove}
          onMouseUp={touchEnd}
          onMouseLeave={touchEnd}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="shrink-0 rounded-lg border bg-card text-card-foreground transition-transform duration-300 hover:-translate-y-5"
              style={{
                width: `${100 / itemsToShow}%`,
                minWidth: `${100 / itemsToShow}%`,
              }}
            >
              <div className="flex flex-col justify-between h-full space-y-3">
                <p className="text-sm text-muted-foreground">{item.time}</p>
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col xl:flex-row justify-between items-center gap-2 mt-auto">
                  <div className="text-center lg:text-right p-3">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.collection}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};