import * as React from "react";
import img1 from "../img/img2.png";

export function Home() {
  return (
    <div id="home" className="home">
      <div className="homeTxt">
        <p>Hi!</p>
        <p>I'm Manokaran</p>
        <p>I like Designing.</p>
      </div>
      <div className="home-img-continer">
        <img src={img1} alt="img1" className="homeImg" />
      </div>
    </div>
  );
}
