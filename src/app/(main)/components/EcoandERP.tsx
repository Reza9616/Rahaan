import { Container } from "@/components/ui/Container"
import Image from "next/image"
export default function EcoERP() {
  return (
    <>
        <Container className="hidden relative before:-z-10 before:bg-[url(./layout.png)] before:bg-no-repeat before:absolute before:inset-0">
            <Container className="space-y-18">
                <p className="max-w-2xl text-3xl font-light tracking-tight text-pretty sm:text-4xl">
                    <strong className="font-bold">رهان فروشگاهی</strong> 
                    <br /> 
                    کسب و کاری یکپارچه با رهان
                </p>

            <div className="flex flex-col lg:flex-row lg:gap-x-3 items-center mt-auto">
                <img width={600} src="store.png" alt="" />
                <p className="text-white text-xl leading-10 max-w-lg text-center">
                    نسخه ای متفاوت و با رابط کاربری فوق العاده آسان یک تیر و دو نشان افزایش سرعت عملیات های روتین فروشگاهی و افزایش دقت و گزارشات جامع <br />
                </p>
            </div>
            </Container>
        </Container>
        
        <div className="relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="max-w-2xl text-3xl font-light tracking-tight text-pretty sm:text-4xl">
                    <strong className="font-bold">رهان فروشگاهی</strong> 
                    <br /> 
                    کسب و کاری یکپارچه با رهان
                </p>
                <div className="mt-16 sm:aspect-2432/1442 h-144 sm:h-auto">
                    <div className="absolute -z-10 h-120 -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-t from-blue-100 to-accent opacity-70 w-[200vw]" 
                        aria-hidden="true" 
                    />
                    
                        <Image
                            width={1000}
                            height={700}
                            alt="رهان اکو"
                            src="/store.png"
                            className=""
                        />
                </div>
            </div>
        </div>

        <div className="relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="max-w-2xl text-3xl font-light tracking-tight text-pretty sm:text-4xl">
                <strong className="font-bold">رهان صنعتی</strong> 
                <br />
                شرکتی یکپارچه با رهان
                </p>
                <div className="mt-16 aspect-2432/1442 h-144 sm:h-auto">
                    <div 
                        className="absolute -z-10 h-120 -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-t from-blue-100 to-accent opacity-70 w-[200vw]" 
                        aria-hidden="true" 
                    />
                        <Image
                            width={1000}
                            height={700}
                            alt="رهان اکو"
                            src="/ECO.png"
                            className=""
                        />
                    </div>
            </div>
        </div>

        <div className="relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="max-w-2xl text-3xl font-light tracking-tight text-pretty  sm:text-4xl">
                <strong className="font-bold">رهان ERP</strong> 
                <br /> 
                سازمانی یکپارچه با رهان
            </p>
            <div className="mt-16 aspect-2432/1442 h-144 sm:h-auto">
                <div className="absolute -z-10 h-120 -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-t from-blue-100 to-accent opacity-70 w-[200vw]" 
                    aria-hidden="true" 
                />
                
                <Image
                    width={1000}
                    height={700}
                    alt="رهان ای آر پی"
                    src="/ERP.png"
                    className="shadow-b"
                />
            </div>
            </div>
        </div>
        </>
  )
}