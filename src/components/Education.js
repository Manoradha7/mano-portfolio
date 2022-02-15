import * as React from "react";

export function Education() {
  return (
    <div id="education" className="edu-container">
      <p>Educational History</p>
      <div className="edu-details">
        <div className="edu-box">
          <h3>Class X</h3>
          <h4>2014-2015</h4>
          <h6 className="eduTxt">Zamindar Higher Secondary School,Thuraiyur,Trichy</h6>
        </div>
        <div className="edu-box">
          <h3>Class XII</h3>
          <h4>2016-2017</h4>
          <h6 className="eduTxt">Zamindar Higher Secondary School,Thuraiyur,Trichy</h6>
        </div>
        <div className="edu-box">
        <h3>BE-CSE</h3>
          <h4>2017-2021</h4>
          <h6 className="eduTxt">University College Of Engineering,Rajamadam,<br/>Pattukottai,Thanjavur</h6></div>
      </div>
    </div>
  );
}
