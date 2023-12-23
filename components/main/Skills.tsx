"use client";

import { Backend_skill, Frontend_skill, Full_stack } from "@/constants";
import React from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillText";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden md:py-[20rem] py-2  z-[45]"
    >
      <div className="w-full flex flex-col items-center justify-center z-[45]">
        <span className="text-white text mb-2">
          Not interested in animations?
        </span>

        <motion.a
          href="https://demetricew20.github.io/"
          target="_blank"
          variants={slideInFromTop}
          className="button-primary text-white text-center rounded-xl md:max-w-[400px] px-2 py-1 cursor-pointer "
        >
          <span className="flex text-white items-center justify-center">
            <SparklesIcon className="text-white mr-2 h-5 w-5" />
            <h1 className="text-[18px]">View unanimated profile</h1>
          </span>
        </motion.a>
      </div>

      <SkillText />

      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillsDataProvider
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            key={`fullstack-skill-data${index}`}
          />
        ))}
      </div>

      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            key={`frontend-skill-data${index}`}
          />
        ))}
      </div>

      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillsDataProvider
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            key={`backend-skill-data${index}`}
          />
        ))}
      </div>

      <div className="h-full w-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute items-center flex justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            muted
            loop
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
