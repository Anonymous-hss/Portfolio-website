import React from "react";
import { Link } from "react-scroll";
import "./imtro.css";
import Img from "../../assets/assets/image.png";
import HireImag from "../../assets/assets/hireme.png";

function intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Harshal</span> <br /> Website
          Developer{" "}
        </span>
        <p className="introPara">
          A final year student who is not only skilled and passionate <br />
          about web development and coding, but also eager to <br /> dive into
          the ever-evolving world of technology.
        </p>
        {/* <Link
          to="https://drive.google.com/file/d/1HtrRhvfiJBZxQcLPhfRhJhAPiTThPPmx/view?usp=drive_link"
          target="_blank"
        > */}
        <a
          href="https://drive.google.com/file/d/15cAklU4e3eoXbG9tpmctscQtPAgoL8bZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={HireImag} alt="" className="HireImag" />
            Hire Me
          </button>
        </a>
        {/* </Link> */}
      </div>
      <img src={Img} alt="" className="bg" />
    </section>
  );
}

export default intro;
