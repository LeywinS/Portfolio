"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ src, title, description, link }) => {
  return (
    <div className="cursor-pointer relative rounded-lg shadow-lg border border-[#2A0E61] pb-5">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        {title === "MERN BLOG" && (
          <p className="text-white">
            Pour le blog il faut attendre entre 45s et 1min pour que le site ce
            lance completement
          </p>
        )}
        <div className="absolute z-[20]  px-[5px]">
          <div className=" text-[15px] font-medium text-center text-gray-300">
            <a
              className="text-white cursor-pointer"
              target="_blank"
              href={link}
            >
              Lien vers le site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
