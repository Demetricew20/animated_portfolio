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

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div
        id="about-me"
        className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <motion.div className="flex justify-center items-center md:mr-12">
            <Image
              src="/personal_picture-no_bg.png"
              alt="work icons"
              height={300}
              width={300}
              className="opacity-[.7] rounded-full border-4 border-slate-700"
            />
          </motion.div>

          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Demetrice Williams
            </span>{" "}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I am a highly motivated software engineer from San Antonio, Tx with a
          deep passion for front-end engineering who fully embraces teamwork but
          is very capable of working independently. <br className="mb-5" />
          My strong desire to build, learn, and teach is equally matched by my
          love of software development. I bring strong skills in team building,
          communication, and leadership that will help companies succeed.
          Through my love of software development, I plan to make a positive
          impact wherever and whenever I can.
        </motion.p>

        <div>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-xl max-w-[200px] mr-5 px-2"
          >
            Download Resume
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-xl max-w-[200px] mr-5 px-2"
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
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
