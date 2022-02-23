import "./App.css";
import * as React from "react";
import { Header } from "./components/Header.js";
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Education } from "./components/Education.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { Hobbies } from "./components/Hobbies.js";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
