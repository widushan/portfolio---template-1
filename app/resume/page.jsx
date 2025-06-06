"use client";


import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaNextJs, FaFlutter, FaPython, FaPhp, FaCsharp, FaJava, FaCplus, FaTailwindcss} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

import React from "react";



const about = {
    title: "About Me",
    description: "I am a passionate software engineer with expertise in web, mobile development and AI/ML with various programming frameworks technologies. With a strong background in computer science and a knack for problem-solving, I love creating innovative solutions that enhance user experiences and drive business success.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Pasindu Kavishka Widushan"
        },
        {
            fieldName: "Phone",
            fieldValue: "+9471 234 5678"
        },
        {
            fieldName: "Age",
            fieldValue: "20"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Sri Lankan"
        },
        {
            fieldName: "Email",
            fieldValue: "kavishka.widushan@pm.me"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Sinhala"
        },
    ]
};



const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "I have worked on various projects, ranging from web development to mobile applications, utilizing a wide range of technologies and frameworks. My experience includes collaborating with cross-functional teams, managing project timelines, and delivering high-quality software solutions.",
    items: [
        {
            company: "Tech Solutions Ltd.",
            position: "Software Engineer",
            duration: "Jan 2025 - Present",
        },
        {
            company: "Innovatech Inc.",
            position: "Full Stack Developer",
            duration: "Jun 2024 - Jan 2025"
        },
        {
            company: "Axios PVT LTD",
            position: "AI/ML Intern",
            duration: "Jan 2024 - May 2024"
        }

    ]
};



const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "I hold a Bachelor's degree in Computer Science from the University of Colombo, where I gained a solid foundation in software development principles, algorithms, and data structures. My academic journey has equipped me with the skills necessary to tackle complex programming challenges and develop efficient solutions.",
    items: [
        {
            institution: "SLTC Research University",
            degree: "BSc in Software Engineering",
            duration: "2022 - 2026",
        },
        {
            institution: "IIT",
            degree: "AI/ML Engineering Certification ",
            duration: "Jun 2025 - Sep 2025"
        }

    ]
};



const skills = {
    title: "My Skills",
    description: "I possess a diverse skill set that includes web development, mobile app development, AI/ML, and more. I am proficient in various programming languages and frameworks, allowing me to adapt to different project requirements and deliver high-quality solutions.",
    skilllist: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <FaCsharp />,
            name: "C#",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaCplus />,
            name: "C++",
        },
        {
            icon: <FaFlutter />,
            name: "Flutter",
        },
    ],
};



const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" }, }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList>
                        <TabsTrigger>About Me</TabsTrigger>
                        <TabsTrigger>Experience</TabsTrigger>
                        <TabsTrigger>Education</TabsTrigger>
                        <TabsTrigger>Skills</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;