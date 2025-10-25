import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Customer from "@/components/Customer";
import Plan from "@/components/Plan";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
    <main>
      <Hero />
      <Service />
      <Customer />
      <Plan />
    </main>
    <Footer />
  </>
  );
}
