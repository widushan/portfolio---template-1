import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"; // npm i react-icons
import Link from "next/link";
import Header from "@/components/Header";
import Social from "@/components/Social";

const Home = () => {
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Side */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6 mt-2">
              Hello I'm <br /> <span className="text-accent">Pasindu Kavishka Widushan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excellent at crafting elegant digital experience and I am proficient in various programming languages, 
              frameworks and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};


export default Home;
