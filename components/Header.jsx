import Link from "next/link";

import Nav from "@/components/Nav";


const Header = () => {

    return (
        
        <header className="py-8 xl:py-12 text-white">

            <div className="container mx-auto">
                <Link href="/">
                <h1 className="text-4xl font-semibold text-white">
                   Pasindu<span className="text-accent"> .</span>
                </h1>
                </Link>
                <Nav />
            </div>

        </header>
    );

};


export default Header; 