import { LinkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  projectLink: string;
  deployLink: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  projectLink,
  deployLink,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg md:w-[25rem] lg:w-[30rem] lg:h-[27rem] shadow-lg border border-[#2a0e61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="opacity-70 h-[250px]"
      />

      <div className="relative py-4 px-2">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 ">{description}</p>
      </div>

      <span className="text-white text-2xl flex absolute bottom-2 gap-4 left-2 z-[100]">
        <a href={projectLink} target="_blank">
          <LinkIcon width={25} height={25} />
        </a>

        <a href={deployLink} target="_blank" className="cursor-pointer">
          <RxGithubLogo />
        </a>
      </span>
    </div>
  );
};

export default ProjectCard;
