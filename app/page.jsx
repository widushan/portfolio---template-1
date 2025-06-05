import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"; // npm i react-icons
import Link from "next/link";

const Home = () => {
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Side */}
          <div className="text-center xl:text-left">
            <span>Software Engineer</span>
            <h1 className="h1">
              Hello I'm <br /> <span>Pasindu Kavishka Widushan</span>
            </h1>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};


export default Home;
