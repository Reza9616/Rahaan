import Image from "next/image";
export default function Logo(){
    return (
        <div className="flex items-center gap-2">
            <Image 
                width={35} 
                height={35}
                className=""
                src="/Rahaan.png"
                alt=""
            />
            <span className="text-2xl font-bold">رهان</span>
        </div>
    )
}