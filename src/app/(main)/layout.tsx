import { Analytics } from "@vercel/analytics/next"
import NavigationMenuDemo from "@/components/navbar"
import Shape from "@/components/Shape";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Shape />
      <NavigationMenuDemo />
      {children}
      <Analytics />
    </>
  );
}