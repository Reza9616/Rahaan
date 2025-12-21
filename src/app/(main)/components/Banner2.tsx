import { Check } from "lucide-react";

export default function Banner2() {
    return (<div
  style={{ backgroundImage: "url('/section.png')" }}
  className="w-full md:bg-cover bg-left md:bg-center py-16 px-8 relative"
>
            <div className="max-w-lg mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-background mb-4">
                    چرا رهان ؟
                </h2>
                <p className="text-muted text-base mb-6">
                    ما بهترین مشاوره و خدمات را ارائه می‌دهیم تا شما بتوانید تصمیمات هوشمندانه‌تری بگیرید.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-background">
                        <Check className="w-5 h-5 text-background" />
                        مشاوره تخصصی و شخصی‌سازی شده
                    </div>
                    <div className="flex items-center gap-2 text-background">
                        <Check className="w-5 h-5 text-background" />
                        پاسخگویی سریع به نیازهای شما
                    </div>
                    <div className="flex items-center gap-2 text-background">
                        <Check className="w-5 h-5 text-background" />
                        تضمین کیفیت خدمات ارائه شده
                    </div>
                </div>
            </div>
        </div>
    );
}