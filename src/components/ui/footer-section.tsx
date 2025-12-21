"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"
import Theme from "../Theme"
import Link from "next/link"

function Footerdemo() {
  return (
    <footer className="relative bg-gradient-to-br from-[#4f89c9] to-[#3b6fa8] text-white overflow-hidden shadow-xl">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="relative p-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">
            <h2 className="mb-4 text-2xl font-light tracking-tight">
              <strong className="font-medium">رهان</strong>؛ 
              <br /> 
              تلاقی علم و صنعت
            </h2>
            <p className="mb-6 text-white/90">
              برای اطلاع از آخرین اخبار و پیشنهادات ویژه به خبرنامه ما بپیوندید.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="شماره تماس"
                className="pr-12 bg-background"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-foreground text-background hover:scale-110 transition-transform"
              >
                <Send className="h-4 w-4 mr-0.5" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">دسترسی سریع</h3>
            <nav className="space-y-2 text-sm">
              <Link href="#" className="block hover:text-white/80 transition-colors">خانه</Link>
              <Link href="#" className="block hover:text-white/80 transition-colors">درباره ما</Link>
              <Link href="#" className="block hover:text-white/80 transition-colors">خدمات ما</Link>
              <Link href="#" className="block hover:text-white/80 transition-colors">محصولات ما</Link>
            </nav>
          </div>

          <div className="text-white">
            <h3 className="mb-4 text-lg font-semibold">ارتباط با ما</h3>
            <address className="not-italic space-y-2 text-sm text-white/90">
              <p>مشهد، بلوار مدرس، مدرس 8، کوچه زرمهر، ساختمان وکلا، واحد 103</p>
              <p>نیشابور، میدان ایران، کوچه میخک، ساختمان آفرینش، طبقه سوم</p>
              <p>
                <a href="tel:05142227051" className="hover:text-white underline">تلفن: 05142227051</a>
              </p>
              <p>
                <a href="tel:09155526422" className="hover:text-white underline">تلفن: 09155526422</a>
              </p>
              <p>ایمیل: <a href="mailto:rahaan@gmail.com" className="hover:text-white underline">rahaan@gmail.com</a></p>
            </address>
          </div>


          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">ما را دنبال کنید.</h3>
            <div className="mb-6 flex space-x-4">
              {[
                { icon: <Facebook />, label: "Facebook" },
                { icon: <Twitter />, label: "Twitter" },
                { icon: <Instagram />, label: "Instagram" },
                { icon: <Linkedin />, label: "LinkedIn" },
              ].map((social, i) => (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full text-foreground hover:bg-white hover:text-[#4f89c9] transition-all"
                      >
                        {social.icon}
                        <span className="sr-only">{social.label}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>ما را در {social.label} دنبال کنید.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <Theme />
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-center md:flex-row">
          <p className="text-sm text-white/80">
            © 1404 گروه نرم افزاری <strong className="font-medium">رهان</strong>. تمامی حقوق محفوظ است.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white/80 transition-colors"></a>
            <a href="#" className="hover:text-white/80 transition-colors"></a>
            <a href="#" className="hover:text-white/80 transition-colors"></a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
