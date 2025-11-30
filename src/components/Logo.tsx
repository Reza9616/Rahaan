'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Logo() {
    const text = "رهان";
    const [show, setShow] = useState(false);

    return (
        <div className="flex items-center gap-x-2">
        <motion.div
            whileTap={{ scale: 0.6 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2">
            <Image 
                width={35} 
                height={35}
                className=""
                src="/Rahaan.png"
                alt=""
                priority
            />
        </motion.div>
        <motion.span 
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
        </motion.span>
        </div>
    )
}