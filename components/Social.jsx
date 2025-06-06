import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';


const socials = [
    {
        name: "Facebook",
        href: "/",
        icon: <FaFacebook />,
    },
    {
        name: "Whatsapp",
        href: "/",
        icon: <FaWhatsapp />,
    },
    {
        name: "Linkedin",
        href: "/",
        icon: <FaLinkedin />,
    },
    {
        name: "Github",
        href: "/",
        icon: <FaGithub />,
    },

]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={`flex items-center gap-6 ${containerStyles}`}>
      {socials.map((item, index) => {
        return (
            <Link key={index} href={item.href} className={iconStyles}>
                {item.icon}
            </Link>
        );
      })}
    </div>
   );
};

export default Social