"use client";

{/* Count command    ---->    npm i react-countup */}
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import React from 'react'



const stats = [
    { num: 12, text: "Years of Experience", icon: "👨‍💻" },
    { num: 26, text: "Projects Completed", icon: "📁" },
    { num: 10, text: "Technologies Mastered", icon: "🛠️" },
    { num: 500, text: "Code Commits", icon: "💻" },
]

const Stats = () => {
  return (

    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item, index) => {
                    return (
                        <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start bg-slate-800 px-2 py-2 rounded-10px'
                            key={index}>
                            <CountUp 
                                end={item.num}
                                duration={5}
                                delay={2}
                                className='text-4xl xl:text-6xl font-extrabold'
                            />
                            <span className='text-2xl xl:text-3xl'>{item.icon}</span>
                            <p className={`${
                                item.text.length < 15 ? "max-w-[100px] xl:max-w-[200px]" : "max-w-[150px] xl:max-w-[250px]"
                            } leading-snug text-white/80 font-medium`}>{item.text}</p>
                            
                            
                        </div>
                    );

                })}
            </div>
        </div>
    </section>
  );
};

export default Stats;