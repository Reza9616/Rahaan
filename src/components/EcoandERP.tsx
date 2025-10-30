import Image from "next/image"
export default function EcoERP() {
    return (
      <>
        <div className="relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="max-w-2xl text-3xl font-light tracking-tight text-pretty sm:text-4xl">
                    <strong className="font-bold">رهان فروشگاهی</strong> 
                    <br /> 
                    کسب و کاری یکپارچه با رهان
                </p>
                <div className="mt-16 aspect-2432/1442 h-144 sm:h-auto">
                    <div 
                        className="absolute -z-10 h-120 -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-t from-blue-100 to-accent opacity-70 w-[200vw]" 
                        aria-hidden="true" 
                    />
                    
                        <Image
                            width={2432}
                            height={1442}
                            alt="رهان اکو"
                            src="/storelaptopp.png"
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
                                width={2432}
                                height={1442}
                                alt="رهان اکو"
                                src="/ecolaptopp.png"
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
                <div 
                    className="absolute -z-10 h-120 -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-t from-blue-100 to-accent opacity-70 w-[200vw]" 
                    aria-hidden="true" 
                />
                
                <Image
                    width={2432}
                    height={1442}
                    alt="رهان ای آر پی"
                    src="/ERPlaptop.png"
                    className="shadow-b"
                />
            </div>
            </div>
        </div>
        </>
    )
}