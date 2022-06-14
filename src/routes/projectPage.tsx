import React from "react";
import { Project } from "../data/ProjectData";

export const ProjectPage: React.FC<Project> = ({ img, title, text, links }) => {
  return <div> {title} </div>;
};
