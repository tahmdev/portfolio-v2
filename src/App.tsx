import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>About me</div>} />
          <Route path="/Projects" element={<div>Projects</div>} />
          <Route path="/Contact" element={<div>Contact</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
