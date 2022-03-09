import * as React from "react";
import mobile from "../img/c-mobile.png";
import mail from "../img/c-mail.png";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

export function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h3>Contact Me</h3>
      <div className="contact">
        <div className="c-phone">
          <img src={mobile} alt="mobile" className="c-mobile-img" />
          <p>+91 8838432335</p>
        </div>
        <div className="c-mail">
          <img src={mail} alt="mobile" className="c-mobile-img" />
          <p><a href="mailto:manoradha7@gmail.com">manoradha7@gmail.com</a></p>
        </div>
        <div className="c-git">
            <IconButton aria-label="github">
              <Link
                color="black"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/Manoradha7"
              >
                <GitHubIcon />
              </Link>
            </IconButton>
            <p>Github</p>
          </div>
          <div className="c-linkedin">
          <IconButton aria-label="linkedin">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://www.linkedin.com/in/manokaran-r-09672a227"
              >
                <LinkedInIcon />
              </Link>
            </IconButton>
            <p>LinkedIn</p>
          </div>
      </div>
    </div>
  );
}
