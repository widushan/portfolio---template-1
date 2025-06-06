"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mx-auto">
      {/* SVG Circle - positioned absolutely */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full z-0"
        fill="transparent"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="250"
          cy="250"
          r="200"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
      {/* Image - positioned above the SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative z-10 flex items-center justify-center w-[220px] h-[220px] xl:w-[350px] xl:h-[350px]"
      >
        <Image
          src="/assets/photo.png"
          priority
          width={350}
          height={350}
          quality={100}
          alt=""
          className="object-contain rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Photo;