import "./App.css";
import * as React from "react";
import { Header } from "./components/Header.js";
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Education } from "./components/Education.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { Hobbies } from "./components/Hobbies.js";

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

function Container() {
  return (
    <div>
      <Header />
      <Home/>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Hobbies/>
    </div>
  );
}

export default App;
