import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/assets/html.png";
import Portfolio2 from "../../assets/assets/css.png";
import Portfolio3 from "../../assets/assets/react.png";
import Portfolio4 from "../../assets/assets/java.png";
import Portfolio5 from "../../assets/assets/c-.png";
import Portfolio6 from "../../assets/assets/js.png";
import Portfolio7 from "../../assets/assets/solidity.png";
import Portfolio8 from "../../assets/assets/python.png";
import Portfolio9 from "../../assets/assets/database.png";

function works() {
  return (
    <div id="works">
      <h2 className="worksTitle">My Skills</h2>
      <span className="worksDesc">
        My projects blend functionality with aesthetics, while my venture into
        Web 3.0 underscores my tech curiosity. Each piece in my portfolio
        reflects my drive for impactful and innovative digital solutions.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio2} alt="" className="worksImg" />
        <img src={Portfolio3} alt="" className="worksImg" />
        <img src={Portfolio4} alt="" className="worksImg" />
        <img src={Portfolio5} alt="" className="worksImg" />
        <img src={Portfolio6} alt="" className="worksImg" />
        <img src={Portfolio7} alt="" className="worksImg" />
        <img src={Portfolio8} alt="" className="worksImg" />
        <img src={Portfolio9} alt="" className="worksImg" />
      </div>
      {/* <button className="workBtn">See more</button> */}
    </div>
  );
}

export default works;
