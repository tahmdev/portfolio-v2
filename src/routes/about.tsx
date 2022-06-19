import React from "react";
import { Link } from "react-router-dom";
import { SkillsGallery } from "../components/SkillsGallery";

interface Props {}
export const About: React.FC<Props> = () => {
  return (
    <div className="about-me-wrapper container">
      <h1>About me</h1>
      <div className="split">
        <div className="about-me">
          <h2>Tom Schülke</h2>
          <p>
            {`I'm a web developer and language enthusiast based in Germany. 
            Teaching myself Japanese has made me a great self-reliant learner, and teaching other people has given me a deep understanding on how to communicate effectively.
            I have built multiple websites from scratch using modern technology. `}
            <Link to={"/projects"}> Take a look at some of them → </Link>
            {`\nDon't hesitate to reach out if you have any questions.`}
          </p>
        </div>
        <div>
          <h2>My skills</h2>
          <SkillsGallery />
        </div>
      </div>
    </div>
  );
};
