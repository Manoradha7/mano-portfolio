import * as React from "react";
import{useRef} from 'react';
export function Education() {
  return (
    <div id="education" className="edu-container">
      <p className="eduHead">Educational History</p>
      <div className="edu-details">
        <div className="edu-box">
          <ProgressBar value={94.2}/>
          <h3>Class X</h3>
          <h4>2014-2015</h4>
          <h3 className="eduTxt">
            Zamindar Higher Secondary School, Thuraiyur,Trichy
          </h3>
        </div>
        <div className="edu-box">
        <ProgressBar value={82.4}/>
          <h3>Class XII</h3>
          <h4>2016-2017</h4>
          <h3 className="eduTxt">
            Zamindar Higher Secondary School, Thuraiyur,Trichy
          </h3>
        </div>
        <div className="edu-box">
        <ProgressBar value={75.6}/>
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

function ProgressBar({value}){

  let textRef = useRef();
  const circularRef = useRef();
  let progressValue = 0;
  let progressEndValue = value;
  let speed = 200;
  let progress = setInterval(()=>{
    progressValue++;
    textRef = `${progressValue}%`;
    // ProgressBar.style.background = `conic-gradient(
    //   #4d5bf9 ${progressValue*3.6}deg,
    //   #cadcff ${progressValue*3.6}deg
    // )`;
    if(progressValue === progressEndValue){
      clearInterval(progress);
    }
  },speed);
  return(
    <div className="circular-progress" ref={circularRef}><div ref={textRef} className="value-container">{value}</div></div>
  )
}