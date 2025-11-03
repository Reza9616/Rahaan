'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface AnimatedImageSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  gradientColor?: string;
}

export default function AnimatedImageSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  gradientColor = 'blue-100',
}: AnimatedImageSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="mt-16">
      <p className="max-w-2xl text-3xl font-light tracking-tight text-pretty sm:text-4xl">
        <strong className="font-bold">{title}</strong>
        <br />
        {subtitle}
      </p>

      <div className="mt-16 aspect-2432/1442 sm:h-auto relative">
        <div
          className={`absolute -z-10 h-40 sm:h-60 md:h-100 -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-b from-accent to-${gradientColor} opacity-70 w-[200vw]`}
          aria-hidden="true"
        />

        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 400, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            width={1000}
            height={700}
            alt={imageAlt}
            src={imageSrc}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}