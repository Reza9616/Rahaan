import Image from "next/image"
export default function EcoERP() {
    return (
        <>
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="max-w-2xl text-3xl font-light tracking-tight text-pretty text-gray-900 sm:text-4xl">
                <strong className="font-bold">رهان اکو</strong> 
                <br />
                راه حلی منسجم برای امور مربوط به حسابداری
            </p>
            <div className="relative mt-16 aspect-2432/1442 h-144 sm:h-auto sm:w-[calc(var(--container-7xl)-calc(var(--spacing)*16))]">
                <div className="absolute -inset-2 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] ring-1 shadow-xs ring-black/5" />
                <Image
                    width={2432}
                    height={1442}
                    alt=""
                    src="/ECO.png"
                    className="h-full rounded-xl ring-1 shadow-2xl ring-black/10"
                />
            </div>
            </div>
        </div>
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="max-w-2xl text-3xl font-light tracking-tight text-pretty text-gray-900 sm:text-4xl">
                <strong className="font-bold">رهان ERP</strong> 
                <br /> 
            راه حلی منسجم برای امور مربوط به حسابداری و سازمانی
            </p>
            <div className="relative mt-16 aspect-2432/1442 h-144 sm:h-auto sm:w-[calc(var(--container-7xl)-calc(var(--spacing)*16))]">
                <div className="absolute -inset-2 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] ring-1 shadow-xs ring-black/5" />
                <Image
                    width={2432}
                    height={1442}
                    alt=""
                    src="/ERP.png"
                    className="h-full rounded-xl ring-1 shadow-2xl ring-black/10"
                />
            </div>
            </div>
        </div>
        </>
    )
}