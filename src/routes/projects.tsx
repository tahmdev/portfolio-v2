import React from "react";
import { ProjectCard } from "../components/ProjectCard";

interface Props {}
export const Projects: React.FC<Props> = () => {
  return (
    <div className="project-wrapper container">
      <h1>Projects</h1>
      <div className="project-grid">
        {dummyData.map((data, idx) => (
          <ProjectCard key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};
