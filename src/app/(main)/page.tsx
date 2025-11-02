import Hero from "@/app/(main)/components/Hero";
import Service from "@/app/(main)/components/Service";
import Customer from "@/app/(main)/components/Customer";
import Plan from "@/app/(main)/components/Plan";
import { Footer } from "@/components/Footer";
import EcoERP from "@/app/(main)/components/EcoandERP";
import ProductDropCardDemo from "@/app/(main)/components/Product";
import Theme from "@/components/Theme";

export default function Home() {
  return (
  <>
    <main>
      <Hero />
      <ProductDropCardDemo />
      <Service />
      <Plan />
      <EcoERP />
      <Customer />
      <div className="fixed bottom-5 right-5">
        <Theme />
      </div>
    </main>
    <Footer />
  </>
  );
}
