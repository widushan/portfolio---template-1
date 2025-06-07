"use client";

import React from "react";

import { delay, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup,  } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"


const info = [
    {
        icon: <FaPhoneAlt className="text-2xl text-primary" />,
        title: "Phone",
        description: "+123 456 7890"
    },
    {
        icon: <FaEnvelope className="text-2xl text-primary" />,
        title: "Email",
        description: "test1234@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
        title: "Address",
        description: "123 Main St, City, Country"
    }
];



const Contact = () => {
    return (
        <motion.section
            initial = {{  opacity: 0 }}
            animate = {{
                opacity: 1,
                transition: { duration: 0.5, delay: 2.4, ease: "easeIn" },
            }}
            className = "py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/*Form*/}
                    <div>
                        <form action="">form</form>
                    </div>
                    {/*info*/}
                    <div>info</div>
                </div>
            </div>
        </motion.section>

    );
};


export default Contact;