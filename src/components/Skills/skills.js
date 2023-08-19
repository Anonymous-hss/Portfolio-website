import "./skills.css";
import React from "react";
import UIDesgin from "../../assets/assets/ui-design.png";
import webDesign from "../../assets/assets/coding.png";
import AppDesign from "../../assets/assets/solidity.png";
import CyberSecurity from "../../assets/assets/cybs.png";

function skills() {
  return (
    <div id="skills">
      <span className="skillTitle">Who am I ?</span>
      <span className="skillDesc">
        Greetings, I'm a final-year engineering student with a knack for
        programming, website development, and competitive coding. Enthusiastic
        about adopting new tech trends, I thrive on challenges, always ready to
        take responsibility.
      </span>
      <div className="skillsBars">
        <div className="skillBar">
          <img src={UIDesgin} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Developer</h2>
            <p>React, HTML, CSS, JS, PHP, Bootstrap, jQuery</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Programming </h2>
            <p>C/C++, Java, Python</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web 3.0 Enthusiast</h2>
            <p>Solidity</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={CyberSecurity} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Cyber Security Enthusiast</h2>
            <p>Ethical Hacking - Kali Linux certified by NPTEL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
