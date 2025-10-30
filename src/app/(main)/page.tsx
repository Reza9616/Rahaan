import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Customer from "@/components/Customer";
import Plan from "@/components/Plan";
import { Footer } from "@/components/Footer";
import EcoERP from "@/components/EcoandERP";
import ProductDropCardDemo from "@/components/Product";

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
    </main>
    <Footer />
  </>
  );
}
