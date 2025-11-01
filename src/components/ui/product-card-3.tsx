'use client'
import * as React from "react";

import { motion, useMotionValue, useTransform, useSpring  } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const itemsToShow = 3;

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < items.length - itemsToShow;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xRange = [0, 600]
  const yRange = [0, 600]

  const translateX = useTransform(x, xRange, [20, -20])
  const translateY = useTransform(y, yRange, [20, -20])

  const springX = useSpring(translateX, { stiffness: 100, damping: 15 })
  const springY = useSpring(translateY, { stiffness: 100, damping: 15 })


  return (
    <Card className="w-full max-w-7xl mx-auto overflow-hidden bg-accent">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base sm:text-2xl">{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant='ghost'
              size="icon"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous drop"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant='ghost'
              size="icon"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next drop"
              className=""
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full rounded-lg border bg-card p-4 text-card-foreground"
              style={{ flexBasis: `calc((100% / ${itemsToShow}) - (${(itemsToShow - 1) * 16}px / ${itemsToShow}))` }}
            >
              <div className="flex flex-col justify-between h-full space-y-3">
                <p className="text-sm text-muted-foreground"></p>
                <motion.div 
                onPointerMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  x.set(e.clientX - rect.left)
                  y.set(e.clientY - rect.top) }}
                  onPointerLeave={() => {
                    x.set(200) // وسط تصویر
                    y.set(200)
                  }}
                  whileHover={{ scale: 1.5 }}
                  className="w-30 sm:w-full overflow-hidden rounded-md bg-muted hover:shadow-2xl">
                  <motion.img
                    src={item.imageSrc}
                    alt={item.name}
                    className="h-full w-full object-contain object-cover"
                    style={{
                      scale: 1.5,
                      x: springX,
                      y: springY,
                      transition: "transform 0.1s ease-out"
                    }}
                  />
                </motion.div>
                <div className="flex flex-col lg:flex-row space-y-2 justify-between items-center mt-auto">
                <div className="flex lg:block justify-between w-full">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.collection}
                  </p>
                </div>
                <Button size={'sm'} variant={'outline'} className="w-full lg:w-fit">مشخصات</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};