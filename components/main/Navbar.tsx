import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/5 bg-[#03001417] backdrop-blur-md z-50 md:px-10">
      <div className="w-full h-full flex  items-center justify-between m-auto md:px-10 px-5">
        <a href="#about" className="h-auto w-auto items-center hidden md:flex">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-spin-slow"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Software Engineer
          </span>
        </a>

        <div className="w-[500px] h-full flex items-center justify-between gap-5">
          <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e]  px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about" className="cursor-pointer">
              About
            </a>
          </div>
          <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e] md:px-[20px] px-[30px] py-[10px] rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
          </div>
          <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e]  px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex gap-5 hidden md:flex">
          {Socials.map((social, index) => (
            <a key={index} href={social.link} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                key={`social-${index}`}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
