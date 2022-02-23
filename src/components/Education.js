import * as React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";


export function Education() {
  return (
    <div id="education" className="edu-container">
      <p className="eduHead">Educational History</p>
      <div className="edu-details">
        <div className="edu-box">
          <div style={{ width: 100, height: 100 }}>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={94.2}
              duration={4}
              easingFunction={easeQuadInOut}
              
            >
              {(value) => {
                const roundedValue = value;
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    background
              backgroundPadding={3}
              styles={buildStyles({
                backgroundColor: "rgba(211, 168, 113, 0.808)",
                textColor: "black",
                pathColor: "#d81212",
              })}
                  />
                );
              }}
            </AnimatedProgressProvider>
          </div>
          <h3>Class X</h3>
          <h4>2014-2015</h4>
          <h3 className="eduTxt">
            Zamindar Higher Secondary School, Thuraiyur,Trichy
          </h3>
        </div>
        <div className="edu-box">
        <div style={{ width: 100, height: 100 }}>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={82.4}
              duration={4}
              easingFunction={easeQuadInOut}
              
            >
              {(value) => {
                const roundedValue = value;
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    background
              backgroundPadding={3}
              styles={buildStyles({
                backgroundColor: "rgba(211, 168, 113, 0.808)",
                textColor: "black",
                pathColor: "#d81212",
              })}
                  />
                );
              }}
            </AnimatedProgressProvider>
          </div>
          <h3>Class XII</h3>
          <h4>2016-2017</h4>
          <h3 className="eduTxt">
            Zamindar Higher Secondary School, Thuraiyur,Trichy
          </h3>
        </div>
        <div className="edu-box">
        <div style={{ width: 100, height: 100 }}>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={75.6}
              duration={4}
              easingFunction={easeQuadInOut}
              
            >
              {(value) => {
                const roundedValue = value;
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    background
              backgroundPadding={3}
              styles={buildStyles({
                backgroundColor: "rgba(211, 168, 113, 0.808)",
                textColor: "black",
                pathColor: "#d81212",
              })}
                  />
                );
              }}
            </AnimatedProgressProvider>
          </div>
          <h3>BE-CSE</h3>
          <h4>2017-2021</h4>
          <h3 className="eduTxt">
            University College Of Engineering,Rajamadam,
            <br />
            Pattukottai,Thanjavur
          </h3>
        </div>
      </div>
    </div>
  );
}
