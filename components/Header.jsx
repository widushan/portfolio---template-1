import Link from "next/link";

import Nav from "@/components/Nav";


const Header = () => {

    return (
        
        <header className="py-8 xl:py-12 text-white">

            <div className="container  mx-auto">
                <Link href="/">
                <h1>
                   Pasindu<span> .</span>
                </h1>
                </Link>
                <Nav />
            </div>

        </header>
    );

};


export default Header; 