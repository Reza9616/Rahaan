import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Customer from "@/components/Customer";
import Plan from "@/components/Plan";
import { Footer } from "@/components/Footer";
import { CarouselBasic } from "@/components/CarouselR";
import EcoERP from "@/components/EcoandERP";

export default function Home() {
  return (
  <>
    <main>
      <Hero />
      <CarouselBasic />
      <Service />
      <Plan />
      <EcoERP />
      <Customer />
    </main>
    <Footer />
  </>
  );
}
