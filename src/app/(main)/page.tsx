import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Customer from "@/components/Customer";
import Plan from "@/components/Plan";
import { Footer } from "@/components/Footer";
import EcoERP from "@/components/EcoandERP";
import ProductDropCardDemo from "@/components/Product";
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
