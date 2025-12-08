'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Logo() {
    const text = "رهان";
    const [show, setShow] = useState(false);

    return (
        <div className="flex items-center gap-x-1">
        <motion.div
            whileTap={{ scale: 0.6 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2 mt-1">
            <Image 
                width={35} 
                height={35}
                className=""
                src="/Logo/Rahaan.png"
                alt=""
                priority
            />
        </motion.div>
        <div>
            <img src="Logo/LogoTypeDark.png" className="h-8 dark:hidden" alt="" />
            <img src="Logo/LogoType III.png" className="h-8 hidden dark:block" alt="" />
        </div>
        {/* <motion.span 
            onHoverStart={() => setShow(true)}
            onHoverEnd={() => setShow(false)}
            className="cursor-pointer text-2xl font-semibold"
        >
            {show ? [...text].map((letter, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        transition={{ delay: i * 0.1 }}
                    >
                        {letter}
                    </motion.span>
                ))
            : text}
        </motion.span> */}
        </div>
    )
}