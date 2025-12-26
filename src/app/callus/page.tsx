"use client";

import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <NavigationMenuDemo />

      <main className="relative mt-25">
      
        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14">
          {/* Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-7">
              تیم رهان آماده پاسخ‌گویی به سوالات شما در زمینه طراحی و توسعه
              نرم‌افزارهای سازمانی و راهکارهای اختصاصی است.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">آدرس</h3>
                  <p className="text-muted-foreground leading-6">
                    نیشابور، میدان ایران، کوچه میخک، ساختمان آفرینش، طبقه سوم
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">تلفن</h3>
                  <p className="text-muted-foreground">
                    051-42227051
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">ایمیل</h3>
                  <p className="text-muted-foreground">
                    info@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-64 rounded-2xl overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789!2d51.4215!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0123456789%3A0x123456789abcdef!2sTehran%2C%20Iran!5e0!3m2!1sen!2sus!4v1234567890"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />

            <form className="relative bg-background border rounded-3xl p-8 space-y-5 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">
                ارسال پیام
              </h2>

              <Input placeholder="نام و نام خانوادگی" required />
              <Input type="email" placeholder="ایمیل" required />
              <Input placeholder="موضوع" required />
              <Textarea placeholder="پیام شما" rows={10} required />

              <Button className="w-full">
                ارسال پیام
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
