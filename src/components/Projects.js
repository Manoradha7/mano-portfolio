import * as React from "react";
import mom from "../img/moneymanager.png";
import faaza from "../img/faaza.png";
import shasha from "../img/shasha.png";
import movie from "../img/movie.png";
import url from "../img/urlshort.png";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "@mui/material";
// import Tooltip from '@mui/material/Tooltip';

export function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h3>Projects</h3>
      <div className="project-card">
        <Card className="project-detail" sx={{borderRadius:"10px", boxShadow:" 10px 10px 28px -17px rgba(0,0,0,0.75)" }}>
          <img src={mom} alt="project-img" className="projectImg" />
          <h5>Money Manager</h5>
          <div className="project-btn">
            <IconButton aria-label="github" >
            <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/money-manager-app-fronend-task"
              >
              <GitHubIcon /></Link>
            </IconButton>
            <IconButton aria-label="github">
            <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/money-manager-backend-api"
              >
              <GitHubIcon /></Link>
            </IconButton>
            <IconButton aria-label="live">
            <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://nifty-heyrovsky-ac9f1f.netlify.app"
              >
              <LanguageIcon /></Link>
            </IconButton>
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
        <Card className="project-detail" sx={{borderRadius:"10px", boxShadow:" 10px 10px 28px -17px rgba(0,0,0,0.75)" }}>
          <img src={faaza} alt="img" className="projectImg" />
          <h5>Faaza Store</h5>
          <div className="project-btn">
            <IconButton aria-label="github">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/faaza"
              >
              <GitHubIcon /></Link>
            </IconButton>
            <IconButton aria-label="github">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/faaza-api"
              >
              <GitHubIcon /></Link>
            </IconButton>
            <IconButton aria-label="live">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://faaza-store.netlify.app/"
              >
              <LanguageIcon /></Link>
            </IconButton>
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
        <Card className="project-detail" sx={{borderRadius:"10px", boxShadow:" 10px 10px 28px -17px rgba(0,0,0,0.75)" }}>
          <img src={shasha} alt="img" className="projectImg" />
          <h5>Shasha Player</h5>
          <div className="project-btn">
            <IconButton aria-label="github">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/online-music-player-react"
              >
              <GitHubIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="github">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/online-music-player-nodejs"
              >
              <GitHubIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="live">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://nostalgic-kilby-9dd1c7.netlify.app"
              >
              <LanguageIcon />
              </Link>
            </IconButton>
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
        <Card className="project-detail" sx={{borderRadius:"10px", boxShadow:" 10px 10px 28px -17px rgba(0,0,0,0.75)" }}>
          <img src={movie} alt="img" className="projectImg" />
          <h5>Movie App</h5>
          <div className="project-btn">
            <IconButton aria-label="github">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/movieapp"
              >
              <GitHubIcon /></Link>
            </IconButton>
            <IconButton aria-label="github">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/Movie-node-js"
              >
              <GitHubIcon />
              </Link>

            </IconButton>
            <IconButton aria-label="live">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://determined-panini-70aeee.netlify.app"
              >
              <LanguageIcon />
              </Link>
            </IconButton>
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
        <Card className="project-detail" sx={{borderRadius:"10px", boxShadow:" 10px 10px 28px -17px rgba(0,0,0,0.75)" }}>
          <img src={url} alt="img" className="projectImg" />
          <h5>Url Shorter</h5>
          <div className="project-btn">
            <IconButton aria-label="github">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/url-shortner-react-api"
              >
              <GitHubIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="github">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7/URL-Shortner-API"
              >
              <GitHubIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="live">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://relaxed-fermat-816b32.netlify.app"
              >
              <LanguageIcon />
              </Link>
            </IconButton>
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
