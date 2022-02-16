import * as React from "react";
import img1 from "../img/img2.png";
import { init } from 'ityped';
import { useEffect,useRef } from "react";

export function Home() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current,{
      showCursor:false,
      backDelay:500,
      strings:["Devlope New Things.","Designing...","Creating Vectors...","Playing Football..."]
    })
  },[])

  
  return (
    <div id="home" className="home">
      <div className="homeTxt">
        <p>Hi!</p>
        <p>I'm Manokaran</p>
        <p>I like <span ref={textRef} className="animTxt">Designing</span> </p>
      </div>
      <div className="home-img-continer">
        <img src={img1} alt="img1" className="homeImg" />
      </div>
    </div>
  );
}
