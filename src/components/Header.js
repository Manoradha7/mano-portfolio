import * as React from "react";
import {useState } from 'react';
import {Button,Link} from "@mui/material";
import mk from '../img/mk.png';
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export function Header() {
  const [opened, setopened] = useState(false);
  const handleDrawerOpen = () => {
    setopened(true);
  };
  const handleDrawerClose = () => {
    setopened(false);
  };
  return (
    <div className="navbar">
      <div ><img src={mk} alt="" className="header-icon"/></div>
      <div className="header-btn">
        <div className="header-btn-1">
        <Button variant="text"  > <a data-scroll href="#home">Home</a></Button>
        <Button variant="text" ><a data-scroll href="#about">About</a></Button>
        <Button variant="text"  ><a data-scroll href="#education">Education</a></Button>
        <Button variant="text"  ><a data-scroll href="#skills">Skills</a></Button>
        <Button variant="text"  ><a data-scroll href="#projects">Projects</a></Button>
        <Button variant="text" ><a data-scroll href="#hobbies">Hobbies</a></Button>
        <Button variant="text" ><a data-scroll href="#contact">Contact</a></Button>
        </div>        
        <IconButton
          onClick={handleDrawerOpen}
          color="warning"
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          sx={{
            width: "200px",
            height: "100%",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "200px",
              height: "100%",
              boxSizing: "border-box",
              backgroundColor: "#fff",
              color: "black",
              fontSize: "1em",
              fontFamily: "Pacifico",
            },
          }}
          anchor="right"
          open={opened}
          className='drawer'
        >
          <IconButton
            color="inherit"
            aria-label="close"
            component="span"
            onClick={handleDrawerClose}
            sx={{ ml: "auto" }}
          >
            <CloseIcon />
          </IconButton>
          <Button
            sx={{
              height: "3rem",
            }}
          >
            <a data-scroll href="#home" className="drawer-a">
              Home
            </a>
          </Button>
          <Button sx={{ height: "3rem" }}>
            <a data-scroll href="#about" className="drawer-a">
              About
            </a>
          </Button>
          <Button sx={{ height: "3rem" }}>
            <a data-scroll href="#education" className="drawer-a">
              Education
            </a>
          </Button>
          <Button sx={{ color: "inherit" }}>
            <a data-scroll href="#skills" className="drawer-a">
              Skills
            </a>
          </Button>
          <Button sx={{ height: "3rem" }}>
            <a data-scroll href="#projects" className="drawer-a">
              Projects
            </a>
          </Button>  
          <Button sx={{ height: "3rem" }}>
            <a data-scroll href="#hobbies" className="drawer-a">
              Hobbies
            </a>
          </Button>          
          <Button sx={{ height: "3rem" }}>
            <a data-scroll href="#contact" className="drawer-a">
              Contact
            </a>
          </Button>
          <Button color="inherit" sx={{ height: "3rem" }}>
            <Link
              color="inherit"
              target="_blank"
              underline="none"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1pRLEKwHPvnUrS9-CHODvGLQdMsq0SXjW/view?usp=sharing"
            >
              RESUME
            </Link>
          </Button>
        </Drawer>
      </div>
    </div>
  );
}
