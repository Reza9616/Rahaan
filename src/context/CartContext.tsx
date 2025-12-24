"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

/* =======================
   Types
======================= */

export interface Module {
  name: string;
  price: number;
  qty: number;
}

export interface Feature {
  name: string;
  price: number;
  count: number;
}

export interface Cart {
  modules: Module[];
  features: Feature[];
}

/* =======================
   Context Type
======================= */

interface CartContextType {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  addToCart: (data: Cart) => void;
  clearCart: () => void;
}

/* =======================
   Context
======================= */

const CartContext = createContext<CartContextType | undefined>(undefined);

/* =======================
   Provider
======================= */

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ modules: [], features: [] });

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) setCart(JSON.parse(stored));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (data: Cart) => {
    setCart(data); // replace current cart
    // localStorage is updated automatically via useEffect
  };

  const clearCart = () => setCart({ modules: [], features: [] });

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

/* =======================
   Hook
======================= */

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
