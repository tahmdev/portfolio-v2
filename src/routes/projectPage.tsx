import { Link } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { Project } from "../data/ProjectData";

export const ProjectPage: React.FC<Project> = ({ img, title, text, links }) => {
  return (
    <div className="project-page-wrapper container--large">
      <h1> {title} </h1>
      <div className="split">
        <div className="project-page-text-info">
          <h2> About this project </h2>
          <p> {text.detailed} </p>
          <h2> Technical details</h2>
          <p> {text.technicalDetails} </p>
          <h2> Try it out </h2>
          <p> {text.test} </p>
          <div className="project-card-links">
            <a className="primary-btn" href={links.demo}>
              Demo
            </a>
            <a className="secondary-btn" href={links.code}>
              Github
            </a>
          </div>
          <h2> Like what you see? </h2>
          <div className="project-card-links">
            <Link className="primary-btn contact-btn" to={"/contact"}>
              Contact me
            </Link>
            <div className="contact-btn-buffer" />
          </div>
        </div>
        <Carousel data={img} />
      </div>
    </div>
  );
};
