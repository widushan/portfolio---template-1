"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';  {/* npm i react-icons */ }



import React from 'react'


const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Resume",
        href: "/resume",
    },
    {
        name: "Work",
        href: "/work",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Pasindu<span className="text-accent"> .</span>
                    </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) =>{
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={`${ link.href === pathname && "text-accent border-b-2 border-accent"} 
                                    text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;