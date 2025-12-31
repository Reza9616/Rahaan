import Hero from "@/app/(main)/components/Hero";
import Service from "@/app/(main)/components/Service";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Way from "./components/Way";
import WorkProcess from "./components/WorkProcess";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <main
        className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
        dir="rtl"
      >
        <Hero />
        <WorkProcess />
        <Banner2 />
        <Service />
        <Banner />
        <Way />
      </main>

      <Footer />
    </>
  );
}
