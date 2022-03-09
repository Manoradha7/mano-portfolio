import * as React from "react";
import mom from "../img/moneymanager.png";
import faaza from "../img/faaza.png";
import shasha from "../img/shasha.png";
import movie from "../img/movie.png";
import url from "../img/urlshort.png";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "@mui/material";

export function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h3>Projects</h3>
      <div className="project-card">
        <Card
          className="project-detail"
          sx={{
            boxShadow:20,
            borderRadius: "10px",
            backgroundColor:"lightgrey"
          }}
        >
          <img src={mom} alt="project-img" className="projectImg" />
          <h4>Money Manager</h4>
          <div className="project-btn">
            <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/money-manager-app-fronend-task"
              >Frontend</Link>
              </Button>

            <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}}  startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/money-manager-backend-api"
              >
              Backend</Link>
              </Button>
              <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}}  startIcon={<LanguageIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://nifty-heyrovsky-ac9f1f.netlify.app"
              >Live</Link>
              </Button>
          </div>
          <div className="project-dependecies">
            <span>Html5</span>
            <span>Css3</span>
            <span>Javascript</span>
            <span>React</span>
            <span>MongoDB</span>
            <span>Nodejs</span>
          </div>
        </Card>
        <Card
          className="project-detail"
          sx={{
            boxShadow:20,
            borderRadius: "10px",
            backgroundColor:"lightgrey"}}
        >
          <img src={faaza} alt="img" className="projectImg" />
          <h4>Faaza Store</h4>
          <div className="project-btn">
          <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/faaza"
              >
              Frontend</Link>
            </Button>

            <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/faaza-api"
              >
              Backend</Link>
              </Button>
              <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<LanguageIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://faaza-store.netlify.app/"
              >Live</Link>
              </Button>
          </div>
          <div className="project-dependecies">
            <span>Html5</span>
            <span>Css3</span>
            <span>Javascript</span>
            <span>React</span>
            <span>MongoDB</span>
            <span>Nodejs</span>
          </div>
        </Card>
        <Card
          className="project-detail"
          sx={{
            boxShadow:20,
            borderRadius: "10px",
            backgroundColor:"lightgrey"}}
        >
          <img src={shasha} alt="img" className="projectImg" />
          <h4>Shasha Player</h4>
          <div className="project-btn">
          <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/online-music-player-react"
              >
              Frontend</Link>
            </Button>

            <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/online-music-player-nodejs"
              >
              Backend</Link>
              </Button>
              <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<LanguageIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://nostalgic-kilby-9dd1c7.netlify.app"
              >Live</Link>
              </Button>
          </div>
          <div className="project-dependecies">
            <span>Html5</span>
            <span>Css3</span>
            <span>Javascript</span>
            <span>React</span>
            <span>MongoDB</span>
            <span>Nodejs</span>
          </div>
        </Card>
        <Card
          className="project-detail"
          sx={{
            boxShadow:20,
            borderRadius: "10px",
            backgroundColor:"lightgrey"}}
        >
          <img src={movie} alt="img" className="projectImg" />
          <h4>Movie App</h4>
          <div className="project-btn">
          <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/movieapp"
              >
              Frontend</Link>
            </Button>

            <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/Movie-node-js"
              >
              Backend</Link>
              </Button>
              <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<LanguageIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://determined-panini-70aeee.netlify.app"
              >Live</Link>
              </Button>
          </div>
          <div className="project-dependecies">
            <span>Html5</span>
            <span>Css3</span>
            <span>Javascript</span>
            <span>React</span>
            <span>MongoDB</span>
            <span>Nodejs</span>
          </div>
        </Card>
        <Card
          className="project-detail"
          sx={{
            boxShadow:20,
            borderRadius: "10px",
            backgroundColor:"lightgrey"
          }}
        >
          <img src={url} alt="img" className="projectImg" />
          <h4>Url Shorter</h4>
          <div className="project-btn">

          <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/url-shortner-react-api"
              >
              Frontend</Link>
            </Button>

            <Button variant="contained" color="warning" sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<GitHubIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/URL-Shortner-API"
              >
              Backend</Link>
              </Button>
              <Button variant="contained"  color="warning"  sx={{boxShadow: 15,borderRadius:"25px",backgroundColor:"rgb(168, 129, 1)"}} startIcon={<LanguageIcon />}>
              <Link
                color="white"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://relaxed-fermat-816b32.netlify.app"
              >Live</Link>
              </Button>
          </div>
          <div className="project-dependecies">
            <span>Html5</span>
            <span>Css3</span>
            <span>Javascript</span>
            <span>React</span>
            <span>MongoDB</span>
            <span>Nodejs</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
