"use client";

import React from "react";
import { useState } from "react";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel  } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"


const info = [
    {
        icon: <FaPhoneAlt className="text-2xl text-accent" />,
        title: "Phone",
        description: "+123 456 7890"
    },
    {
        icon: <FaEnvelope className="text-2xl text-accent" />,
        title: "Email",
        description: "test1234@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt className="text-2xl text-accent" />,
        title: "Address",
        description: "123 Main St, City, Country"
    }
];



const Contact = () => {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleServiceChange = (value) => {
        setForm({ ...form, service: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                setResult({ success: true, message: "Message sent successfully!" });
                setForm({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });
            } else {
                setResult({ success: false, message: data.message || "Something went wrong." });
            }
        } catch (err) {
            setResult({ success: false, message: "Something went wrong." });
        }
        setLoading(false);
    };

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
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">Have questions or want to work together? Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

                            {/*Inputs*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" value={form.firstname} onChange={handleChange} type="text" placeholder="First Name" />
                                <Input name="lastname" value={form.lastname} onChange={handleChange} type="text" placeholder="Last Name" />
                                <Input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" />
                                <Input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Phone" />
                            </div>

                            <Select value={form.service} onValueChange={handleServiceChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="web-development">Web Development</SelectItem>
                                        <SelectItem value="app-development">App Development</SelectItem>
                                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                        <SelectItem value="seo-optimization">SEO Optimization</SelectItem>
                                        <SelectItem value="graphic-design">Graphic Design</SelectItem>
                                        <SelectItem value="programming">Programming Projects</SelectItem>
                                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Type Your Message"
                                className="h-[200px]"
                            />

                            <Button className="max-w-40" size="md" type="submit" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                            {result && (
                                <div className={result.success ? "text-green-500" : "text-red-500"}>
                                    {result.message}
                                </div>
                            )}
                        </form>
                    </div>
                    {/*info*/}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul>
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6 mb-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]  bg-[#27272c] rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>

    );
};


export default Contact;