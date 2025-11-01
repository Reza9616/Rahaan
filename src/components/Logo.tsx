'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo(){
    return (
        <div className="flex items-center gap-x-2">
        <motion.div
            whileHover={{ scale: 1.2}}
            animate={{ rotate: 360 }}
            transition={{ duration: 1}}
            className="flex items-center gap-2">
            <Image 
                width={35} 
                height={35}
                className=""
                src="/Rahaan.png"
                alt=""
            />
        </motion.div>
        <span className="text-2xl font-semibold">رهان</span>
        </div>
    )
}