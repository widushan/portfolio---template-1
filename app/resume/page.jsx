"use client";


import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPhp, SiCsharp, SiFlutter, SiCplusplus } from "react-icons/si";
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
    description: "I have experience in web and mobile app development with AI/ML integration, using diverse technologies. I’ve worked with cross-functional teams to deliver quality software on time.",
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
        { icon: <img src="/assets/skills/html5.png" alt="" className="w-14 h-14" />, name: "HTML5" },
        { icon: <img src="/assets/skills/css3.png" alt="" className="w-14 h-14" />, name: "CSS3" },
        { icon: <img src="/assets/skills/jsc.png" alt="" className="w-14 h-14" />, name: "JavaScript" },
        { icon: <img src="/assets/skills/react.png" alt="" className="w-14 h-14" />, name: "React" },
        { icon: <img src="/assets/skills/nxtjs.png" alt="" className="w-14 h-14" />, name: "Next.js" },
        { icon: <img src="/assets/skills/tailwind.png" alt="" className="w-14 h-14" />, name: "Tailwind CSS" },
        { icon: <img src="/assets/skills/python.png" alt="" className="w-14 h-14" />, name: "Python" },
        { icon: <img src="/assets/skills/php.png" alt="" className="w-14 h-14" />, name: "PHP" },
        { icon: <img src="/assets/skills/c-sharp.png" alt="" className="w-14 h-14" />, name: "C#" },
        { icon: <img src="/assets/skills/java.png" alt="" className="w-14 h-14" />, name: "Java" },
        { icon: <img src="/assets/skills/c-plus-plus.png" alt="" className="w-14 h-14" />, name: "C++" },
        { icon: <img src="/assets/skills/flutter.png" alt="" className="w-14 h-14" />, name: "Flutter" },
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
                <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px] ">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                    </TabsList>

                    
                    <div className="min-h-[80vh] w-full">

                        {/*about*/}
                        <TabsContent value="about" className="w-full">About Me</TabsContent>



                        {/*Education*/}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>



                        {/*Skills*/}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skilllist.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger className= "w-full h-[100px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                                            <motion.div
                                                                whileHover={{ scale: 1.2 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                                                className=""
                                                            >
                                                                {skill.icon}
                                                            </motion.div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-[#232329] text-white/80 capitalize">
                                                            {skill.name}
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>



                        {/*Experience*/}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>



                    </div>

                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;