"use client";


import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaNextJs, FaFlutter, FaPython, FaPhp, FaCsharp, FaJava, FaCplus, FaTailwindcss} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

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
}


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
}

const Resume = () => {
    return <div>Resume Page</div>
}

export default Resume;