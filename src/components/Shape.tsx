import Image from "next/image"

export default function Shape() {
    return (
        <div className="relative z-10 hidden lg:block">
            <Image 
                src={'/shape.png'}
                width={1000}
                height={200}
                alt=""
                className="absolute left-0 lg:w-180 xl:w-230 2xl:w-290"
            />
        </div>
    )
}