import Hero from "@/app/(main)/components/Hero";
import Service from "@/app/(main)/components/Service";
import Plan from "@/app/(main)/components/Plan";
import { Footer } from "@/components/Footer";
import ProductDropCardDemo from "@/app/(main)/components/Product";
import { QuickTickerOptions } from "@/components/quick-tooltip-actions";
import Banner from "./components/Banner";


export default function Home() {
  return (
  <>
    <main>
      <Hero />
      <ProductDropCardDemo />
      <Service />
      <Banner />
      <Plan />
      <div className="fixed top-1/2 -left-5 rotate-90 z-50">
        <QuickTickerOptions ticker="AAPL" />
      </div>
    </main>
    <Footer />
  </>
  );
}
