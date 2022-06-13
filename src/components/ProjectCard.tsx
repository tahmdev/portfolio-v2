import React from "react";
import { Link } from "react-router-dom";

interface Props {
  data: any;
}
export const ProjectCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="project-card-wrapper">
      <h2>{data.title}</h2>
      <img src={data.img} />

      <p>
        {" "}
        {data.text.summary}{" "}
        <Link to={`projects/${data.links.more}`}> Read more! </Link>{" "}
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
