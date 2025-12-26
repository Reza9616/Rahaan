"use client";
import { ShoppingCart } from "lucide-react";

interface CartIconProps {
  className?: string;
}

export const CartIcon = ({ className }: CartIconProps) => {
  return <ShoppingCart className={className || "w-6 h-6"} />;
};