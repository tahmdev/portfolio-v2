import React from "react";

interface Props {}
export const SkillsGallery: React.FC<Props> = () => {
  const skills = [
    "html5",
    "css3",
    "react",
    "javascript",
    "typescript",
    "jest",
    "mysql",
  ];
  return (
    <div className="skill-gallery">
      {skills.map((i) => (
        <div className="flex-column">
          <i className={`devicon-${i}-plain colored devicon`}></i>
          <span>{i}</span>
        </div>
      ))}
      <div className="flex-column">
        <i className={`devicon-express-original devicon`}></i>
        <span>express</span>
      </div>
    </div>
  );
};
