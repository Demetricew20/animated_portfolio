import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-[10rem] py-20"
    >
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
