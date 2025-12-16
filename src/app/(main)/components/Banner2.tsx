import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Banner2() {
    return (<div
  style={{ backgroundImage: "url('/section.png')" }}
  className="w-full bg-cover bg-center py-16 px-8"
>
            <div className="max-w-lg mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-white/90 mb-4">
                    چرا رهان ؟
                </h2>
                <p className="text-white/90 text-base mb-6">
                    ما بهترین مشاوره و خدمات را ارائه می‌دهیم تا شما بتوانید تصمیمات هوشمندانه‌تری بگیرید.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white/90">
                        <Check className="w-5 h-5   text-white/90" />
                        مشاوره تخصصی و شخصی‌سازی شده
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                        <Check className="w-5 h-5 text-white/90" />
                        پاسخگویی سریع به نیازهای شما
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                        <Check className="w-5 h-5 text-white/90" />
                        تضمین کیفیت خدمات ارائه شده
                    </div>
                </div>
            </div>
            
             
        </div>
    );
}