import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { About } from "./routes/about";
import { Projects } from "./routes/projects";
import { Contact } from "./routes/contact";
import { projectData } from "./data/ProjectData";
import { ProjectPage } from "./routes/projectPage";

// TODO
// Projectcard set interface

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          {projectData.map((data) => (
            <Route
              key={data.title}
              path={`/Projects/${data.links.more}`}
              element={<ProjectPage {...data} />}
            />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
