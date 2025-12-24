import React from "react";
import NavigationMenuDemo from "@/components/navbar";
import { Footer } from "@/components/Footer";

export default function ThankYouPage() {
  return (
    <>
      <NavigationMenuDemo />

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ثبت موفقیت‌آمیز!
          </h1>
          <p className="text-gray-700 text-lg">
            بزودی مسئول بازرگانی رهان با شما تماس می‌گیرد.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
