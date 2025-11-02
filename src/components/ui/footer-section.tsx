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
import { Facebook, Instagram, Linkedin, Send, Twitter, } from "lucide-react"
import Theme from "../Theme"

function Footerdemo() {

  return (
    <footer className="relative border-t bg-accent text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-2xl font-light tracking-tight">
              <strong className="font-medium">رهان</strong>؛ 
              <br /> 
              تلاقی علم و صنعت
              </h2>
            <p className="mb-6 text-muted-foreground">
              برای اطلاع از آخرین اخبار و پیشنهادات ویژه به خبرنامه ما بپیوندید.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="شماره تماس"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">دسترسی سریع</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                خانه
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                درباره ما
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                خدمات ما
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                محصولات ما
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">ارتباط با ما</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>مشهد، بلوار مدرس، مدرس 8، کوچه زرمهر، ساختمان وکلا، واحد 103</p>
              <p>نیشابور، میدان ایران، کوچه میخک، ساختمان آفرینش، طبقه سوم</p>
              <a href="tel:05142227051">تلفن: 05142227051</a>
              <p>ایمیل: rahaan@gmail.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">ما را دنبال کنید.</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ما را در فیسبوک دنبال کنید.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ما را در توییتر دنبال کنید.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ما را در اینستاگرام دنبال کنید.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>با ما در لینکدین ارتباط برقرار کنید.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Theme />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 1404 گروه نرم افزاری <strong className="font-medium">رهان</strong>.  تمامی حقوق محفوظ است.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              
            </a>
            <a href="#" className="transition-colors hover:text-primary">
             
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }