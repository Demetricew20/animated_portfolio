"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Resume, Socials } from "@/constants";

const HeroContent = () => {
  return (
    <motion.div
      id="about"
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center md:px-20 px-10 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <motion.div className="flex justify-center items-center md:mr-12 mr-4 md:mt-0 mt-[8rem]">
            <Image
              src="/personal_picture-no_bg.png"
              alt="work icons"
              height={300}
              width={300}
              className="opacity-[.7] rounded-full border-4 border-purple-900"
            />
          </motion.div>

          <div className="flex gap-5 md:hidden justify-center items-center mr-[2rem] pb-2">
            {Socials.map((social, index) => (
              <a key={index} href={social.link} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  key={`social-${index}`}
                  width={36}
                  height={36}
                />
              </a>
            ))}
          </div>

          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Demetrice Williams
            </span>{" "}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400  my-5 max-w-[600px]"
        >
          I am a highly motivated software engineer from San Antonio, Tx with a
          deep passion for front-end engineering who fully embraces teamwork but
          is very capable of working independently.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-gray-400 mb-5"
        >
          My strong desire to build, learn, and teach is equally matched by my
          love of software development. I bring strong skills in team building,
          communication, and leadership that will help companies succeed.
          Through my love of software development, I plan to make a positive
          impact wherever and whenever I can.
        </motion.p>

        <div className="md:flex-row flex-col flex gap-5 md:w-auto w-full">
          <motion.a
            href={Resume.link}
            target="_blank"
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-xl md:max-w-[200px] px-2"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-xl md:max-w-[200px] px-2"
          >
            Contact Me
          </motion.a>

          <motion.a
            href="https://d-portfolio-ef478.firebaseapp.com/"
            target="_blank"
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-white text-center cursor-pointer rounded-xl md:max-w-[400px] px-2"
          >
            <span className="flex text-white items-center justify-center">
              <SparklesIcon className="text-white mr-2 h-5 w-5" />
              <h1 className="text[-13px]">Visit 3d Portfolio</h1>
            </span>
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center lg:flex hidden"
      >
        <Image
          src="/astronaut.svg"
          alt="work icons"
          height={650}
          width={650}
          className="opacity-[.5]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
