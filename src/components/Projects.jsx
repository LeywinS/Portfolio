import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Project1.png"
          title="MERN BLOG"
          description="Blog en utilisant la MERN Stack."
          link="https://blogmernstack.onrender.com/"
        />
        <ProjectCard
          src="/Project2.png"
          title="FILM DB"
          description="Site internet afin de trouver tout les films que l'on souhiate!"
          link="https://movie-app-vffd.vercel.app/"
        />
        <ProjectCard
          src="/port.png"
          title="PortFolio Website"
          description="PortFolio WebSite."
          link="#"
        />
      </div>
    </div>
  );
};

export default Projects;
