import * as React from "react";
import html5 from "../img/html5.png";
import css3 from "../img/css3.png";
import js from "../img/js.png";
import react from "../img/react.png";
import modb from "../img/mongodb.png";
import nodejs from "../img/nodejs.png";
import ex from "../img/ex.png";
import ntf from "../img/netlify.png";
import vsc from "../img/vs code.png";
import psm from "../img/postman.png";
import ai from '../img/ai.png';

export function Skills() {
  return (
    <div id="skills" className="skills-container">
      <h3>Skills</h3>
      <div className="skills">
        <div className="sk-img">
          <label>Html5</label>
          <img src={html5} alt="img" className="skill-img" />
        </div>
        <div className="sk-img">
          <label>Css3</label>
          <img src={css3} alt="img" className="skill-img" />
        </div>
        <div className="sk-img">
          <label>JavaScript</label>
          <img src={js} alt="img" className="skill-img" />
        </div>
        <div className="sk-img">
          <label>React</label>
          <img src={react} alt="img" className="skill-img" />
        </div>
        <div className="sk-img">
          <label>MongoDB</label>
          <img src={modb} alt="img" className="skill-img" />
        </div>
        <div className="sk-img">
          <label>NodeJs</label>
          <img src={nodejs} alt="img" className="skill-img" />
        </div>
        <div className="sk-img">
          <label>Express Js</label>
          <img src={ex} alt="img" className="skill-img" />
        </div>
      </div>
      <h3>Tools</h3>
      <div className="tools">
        <div className="sk-img">
          <label>Netlify</label>
          <img src={ntf} alt="img" className="skill-img" />
        </div>
        <div className="sk-img">
          <label>Vs Code</label>
          <img src={vsc} alt="img" className="skill-img" />
        </div>
        <div className="sk-img">
          <label>Postman</label>
          <img src={psm} alt="img" className="skill-img" />
        </div>
        <div className="sk-img">
          <label>Illustrator</label>
          <img src={ai} alt="img" className="skill-img" />
        </div>
      </div>
    </div>
  );
}
