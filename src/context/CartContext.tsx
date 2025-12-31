"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Module {
  name: string;
  price: number;
  qty: number;
  puid: number; 
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

interface CartContextType {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  addModuleToCart: (module: Module) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ modules: [], features: [] });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) setCart(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addModuleToCart = (module: Module) => {
    setCart(prev => {
      const existing = prev.modules.find(m => m.name === module.name);
      let updatedModules;
      if (existing) {
        updatedModules = prev.modules.map(m =>
          m.name === module.name ? { ...m, qty: m.qty + 1 } : m
        );
      } else {
        updatedModules = [...prev.modules, { ...module, qty: 1 }];
      }
      return { ...prev, modules: updatedModules };
    });
  };

  const clearCart = () => setCart({ modules: [], features: [] });

  return (
    <CartContext.Provider value={{ cart, setCart, addModuleToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
