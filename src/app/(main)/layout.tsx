import { Analytics } from "@vercel/analytics/next"
import NavigationMenuDemo from "@/components/navbar"
import Shape from "@/components/Shape";
import { CartProvider } from "@/context/CartContext";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <CartProvider>
      <NavigationMenuDemo />
      {children}
      <Analytics />
      </CartProvider>
    </>
  );
}