import * as React from "react";
import Button from "@mui/material/Button";
import mk from '../img/mk.png';

export function Header() {
  return (
    <div className="navbar">
      <div ><img src={mk} alt="" className="header-icon"/></div>
      <div className="header-btn">
        <Button variant="text"  > <a data-scroll href="#home">Home</a></Button>
        <Button variant="text" ><a data-scroll href="#about">About</a></Button>
        <Button variant="text"  ><a data-scroll href="#education">Education</a></Button>
        <Button variant="text"  ><a data-scroll href="#skills">Skills</a></Button>
        <Button variant="text"  ><a data-scroll href="#projects">Projects</a></Button>
        <Button variant="text" ><a data-scroll href="#hobbies">Hobbies</a></Button>
        <Button variant="text" ><a data-scroll href="#contact">Contact</a></Button>
      </div>
    </div>
  );
}
