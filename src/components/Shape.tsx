import Image from "next/image"

export default function Shape() {
    return (
        <div className="relative z-10 hidden lg:block">
            <Image 
                src={'/shape1.png'}
                width={1500}
                height={250}
                alt=""
                className="absolute left-0 top-30 lg:w-170 xl:w-220 2xl:w-270 h-140"
            />
        </div>
    )
}