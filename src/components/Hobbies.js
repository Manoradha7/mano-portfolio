import * as React from "react";
import tv from "../img/television .png";
import football from "../img/soccer-player.png";
import joystick from "../img/joystick.png";
import network from "../img/network.png";


export function Hobbies() {
  return (
    <div id="hobbies" className="hobbies-container">     
      <div className="hobbies-img">
        <h3>What I Do in My Spare Times</h3>
        <div className="otherHobbies">
        <div className="hobbie">
          <label>Movies</label>
          <img src={tv} alt="hobbie-img" className="hobbie-img" />
        </div>
        <div className="hobbie">
          <label>Football</label>
          <img src={football} alt="hobbie-img"  className="hobbie-img"/>
        </div>
        <div className="hobbie">
          <label>E-Sports</label>
          <img src={joystick} alt="hobbie-img"  className="hobbie-img"/>
        </div>
        <div className="hobbie">
          <label>Surfing In Internet</label>
          <img src={network} alt="hobbie-img"  className="hobbie-img"/>
        </div>
        </div>
      </div>
    </div>
  );
}
