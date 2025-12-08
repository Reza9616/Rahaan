import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Banner() {
    return (
        <div 
            className="relative w-full flex justify-between md:h-[70vh] py-4 px-8"
        >
            <div 
                className="absolute inset-0 h-full bg-no-repeat bg-cover md:bg-contain md:bg-left"
                style={{ backgroundImage: "url('./Banner.jpg')" }}
            >
                
            </div>
            
            <div className="max-w-xs p-5 lg:max-w-sm space-y-4 my-auto text-white z-10">
                <h1 className="text-2xl font-bold lg:text-2xl md:text-xl sm:text-lg">
                    به مشاوره نیاز دارید؟
                </h1>
                <p className="mt-2 text-base lg:text-base md:text-sm sm:text-xs">
                    شماره تلفن خود را وارد کنید. کارشناسان فروش با شما تماس خواهند گرفت.
                </p>
                <form className="space-y-4">
                    <Input
                        placeholder="نام و نام خانوادگی"
                        className="w-full h-12 lg:h-12 md:h-11 sm:h-10 bg-white/90 backdrop-blur-sm text-foreground placeholder:text-gray-500 border-0 rounded-xl focus-visible:ring-2 focus-visible:ring-white text-base lg:text-base md:text-sm sm:text-xs"
                    />

                    <div className="relative">
                        <Input
                            type="tel"
                            placeholder="شماره تلفن"
                            className="w-full h-12 lg:h-12 md:h-11 sm:h-10 pr-4 pl-32 bg-white/90 backdrop-blur-sm text-foreground placeholder:text-gray-500 border-0 rounded-xl focus-visible:ring-2 focus-visible:ring-white text-base lg:text-base md:text-sm sm:text-xs"
                        />
                        <Button
                            type="submit"
                            className="absolute left-1 top-1 h-10 lg:h-10 md:h-9 sm:h-8 w-28 lg:w-28 md:w-24 sm:w-20 rounded-l-xl rounded-r-xl bg-primary hover:bg-primary/90 text-white font-medium transition-all text-sm lg:text-base md:text-sm sm:text-xs"
                        >
                            ارسال
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}