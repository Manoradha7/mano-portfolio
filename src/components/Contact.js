import * as React from "react";
import mobile from "../img/c-mobile.png";
import mail from "../img/c-mail.png";

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
      </div>
    </div>
  );
}
