import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../data/ProjectData";

interface Props {
  data: Project;
}
export const ProjectCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="project-card-wrapper">
      <h2>{data.title}</h2>
      <img src={data.img[0].img} alt={data.img[0].alt} />
      <p>
        {data.text.summary}
        <Link to={`/projects/${data.links.more}`}> Read more </Link>
      </p>
      <div className="project-card-links">
        <a className="primary-btn" href={data.links.demo}>
          Demo
        </a>
        <a className="secondary-btn" href={data.links.code}>
          Github
        </a>
      </div>
    </div>
  );
};
