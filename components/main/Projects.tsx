"use client";

import { Project_data } from "@/constants";
import React, { useEffect, useRef } from "react";
// @ts-ignore
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current != null) {
      videoRef.current.playbackRate = 0.475;
    }
  });
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center ">
        {Project_data.map((project, index) => (
          <ProjectCard
            src={project.src}
            key={`project-${index}`}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      <div className="h-full w-full absolute justify-center flex items-center bg-transparent">
        <div className="w-full h-[600px] z-[-10] opacity-70 absolute items-center flex bg-transparent justify-center bg-cover">
          <video
            ref={videoRef}
            className="w-full h-auto"
            preload="false"
            playsInline
            muted
            loop
            autoPlay
            src="/planet.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
