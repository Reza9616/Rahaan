import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const Lahzeh = localFont({
  src: [
    {
      path: './fonts/Lahzeh-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './fonts/Lahzeh-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/Lahzeh-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/Lahzeh-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Lahzeh-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Lahzeh-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/Lahzeh-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Lahzeh-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/Lahzeh-Black.ttf',
      weight: '900',
      style: 'normal'
    }
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
      <body className={`${Lahzeh.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}
