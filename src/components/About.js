import * as React from "react";
// import myimg from "../img/myimg.jpeg";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";


export function About() {
  return (
    <div id="about" className="about-container">
      <p style={{ color: "violet", fontSize: "30px" }}>A Little Bit About Me</p>
      <div className="about-content">
        <div className="aboutTxt">
          <p>
            <b>Hey there! My Name is Manokaran R</b>
          </p>
          <p>I'm a Trichy based tech enthusiast & a Programmer who loves
            designing and Animate new Things and devlopment. Lot of Curious in
            Designing ,mostly self taught & a quick learner who flourishes under
            pressure and is eager to learn new technologies.
          </p>
            
          <Button variant="contained" color="warning" sx={{boxShadow: 20,borderRadius:"25px",backgroundColor:"#e7aa00"}} className="about-btn">
            <Link
              color="black"
              target="_blank"
              underline="none"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1pRLEKwHPvnUrS9-CHODvGLQdMsq0SXjW/view?usp=sharing"
            >
              Resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
