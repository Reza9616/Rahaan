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
            <Image 
                width={45} 
                height={35}
                className="mt-0.5"
                src="/LogoType.png"
                alt=""
            />
        </div>
    )
}