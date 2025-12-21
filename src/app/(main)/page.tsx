import Hero from "@/app/(main)/components/Hero";
import Service from "@/app/(main)/components/Service";
import { Footer } from "@/components/Footer";
import { QuickTickerOptions } from "@/components/quick-tooltip-actions";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Way from "./components/Way";


export default function Home() {
  return (
  <>
    <main>
      <Hero />
      <Way/>
      <Banner2 />
      <Service />
      <Banner /> 
      <div className="fixed top-1/2 -left-12 sm:-left-5 rotate-90 z-50">
        <QuickTickerOptions ticker="AAPL" />
      </div>
    </main>
    <Footer />
  </>
  );
}
