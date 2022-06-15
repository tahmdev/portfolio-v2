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
          <h2>Name here</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          pariatur distinctio facilis, voluptate consectetur, nostrum iusto
          atque veniam, possimus numquam qui sequi nulla! Dolorem totam ipsa
          magni velit eligendi odio expedita. Harum optio libero ex sapiente
          maiores ullam commodi tenetur labore numquam, ut qui, tempora debitis
          vel quae cum est quod architecto rem. Repudiandae alias architecto
          necessitatibus velit? Sunt porro, deleniti autem quaerat, ea unde
          repellendus, voluptas{" "}
          <Link to={"/projects"}> Take a look at some of them → </Link>
        </div>
        <div>
          <h2>My skills</h2>
          <SkillsGallery />
        </div>
      </div>
    </div>
  );
};
