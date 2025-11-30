import Hero from "@/app/(main)/components/Hero";
import Service from "@/app/(main)/components/Service";
import Plan from "@/app/(main)/components/Plan";
import { Footer } from "@/components/Footer";
import EcoERP from "@/app/(main)/components/EcoandERP";
import ProductDropCardDemo from "@/app/(main)/components/Product";
import Theme from "@/components/Theme";

export default function Home() {
  return (
  <>
    <main className="">
      <Hero />
      <ProductDropCardDemo />
      <Service />
      <Plan />
      <EcoERP />
      <div className="fixed top-25 -right-5 rotate-90">
        <Theme />
      </div>
    </main>
    <Footer />
  </>
  );
}
