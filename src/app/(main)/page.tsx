import Service from "@/components/Service";
import Hero from "@/components/Hero";
import Customer from "@/components/Customer";
import Finance from "@/components/Finance";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
    <main>
      <Hero />
      <Service />
      <Customer />
      <Finance />
    </main>
    <Footer />
  </>
  );
}
