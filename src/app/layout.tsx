import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const Ekraan = localFont({
  src: [
    {
      path: './fonts/Ekraan-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Ekraan-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap', 
})

export const metadata: Metadata = {
  title: "رهان",
  description: "حسابداری، اما آسان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Ekraan.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}
