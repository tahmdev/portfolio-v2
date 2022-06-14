import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projectData } from "../data/ProjectData";

interface Props {}
export const Projects: React.FC<Props> = () => {
  return (
    <div className="project-wrapper container">
      <h1>Projects</h1>
      <div className="project-grid">
        {projectData.map((data, idx) => (
          <ProjectCard key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};
