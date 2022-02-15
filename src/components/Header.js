import * as React from "react";
import Button from "@mui/material/Button";


export function Header() {
  return (
    <div className="navbar">
      <div>Mano</div>
      <div className="header-btn">
        <Button variant="text" > <a data-scroll href="#home">Home</a></Button>
        <Button variant="text"><a data-scroll href="#about">About</a></Button>
        <Button variant="text" ><a data-scroll href="#education">Education</a></Button>
        <Button variant="text" ><a data-scroll href="#skills">Skills</a></Button>
        <Button variant="text" ><a data-scroll href="#projects">Projects</a></Button>
        <Button variant="text"><a data-scroll href="#hobbies">Hobbies</a></Button>
      </div>
    </div>
  );
}
