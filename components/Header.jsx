import Link from "next/link";

import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";


const Header = () => {

    return (
        
        <header className="py-8 xl:py-12 text-white">

            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                <h1 className="text-4xl font-semibold text-white">
                   Pasindu<span className="text-accent"> .</span>
                </h1>
                </Link>



                <div className="hidden xl:flex items-center gap-12">
                    <Nav />
                    <Link href="/contact">
                        <Button className="bg-[#1c1c22] text-white border border-white/20 px-8 py-2 text-base hover:bg-white/5">
                            Hire me
                        </Button>
                    </Link>
                </div>



                <div className="xl:hidden">mobile nav</div>



            </div>

        </header>
    );

};


export default Header; 