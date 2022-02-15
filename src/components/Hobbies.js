import * as React from "react";
import tv from "../img/television .png";
import football from "../img/soccer-player.png";

export function Hobbies() {
  return (
    <div id="hobbies" className="hobbies-container">
      <div className="hobbies">
        <p>Intrest</p>
        <div className="hobbietxtContainer">
        <div className="hobbie-name-conianer">Design</div>
        <div className="hobbie-name-conianer">Football</div>
        </div>
      </div>
      <div className="hobbies-img">
        <h4>Adiction In</h4>
        <div className="otherHobbies">
        <div>
          <label>E-Sports</label>
          <img src={tv} alt="hobbie-img" className="hobbie-img" />
        </div>
        <div>
          <label>Football</label>
          <img src={football} alt="hobbie-img"  className="hobbie-img"/>
        </div>
        </div>
      </div>
    </div>
  );
}
