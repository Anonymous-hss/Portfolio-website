import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import AmazonClone from "../../assets/assets/amazon.png";
import TheFreshCup from "../../assets/assets/theFreshCup.png";
import SmartContract from "../../assets/assets/smartContract.png";
import FacebookIcon from "../../assets/assets/facebook-icon.png";
import TwitterIcon from "../../assets/assets/twitter.png";
import LinkedIn from "../../assets/assets/linkedIn.png";
import InstagramIcon from "../../assets/assets/instagram.png";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s7y172t",
        "template_ynx3azz",
        form.current,
        "YzBviIgJCKs7XmqOCMkhZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const projectsData = [
    {
      title: "AmazonClone",
      image: AmazonClone,
      details: "Built a functional Amazon clone website with...",
      link: "https://github.com/Anonymous-hss/amazon-clone-new",
    },
    {
      title: "The Fresh Cup",
      image: TheFreshCup,
      details:
        "Created a website for a coffee shop named The Fresh Cup using...",
      link: "https://github.com/Anonymous-hss/The-Fresh-Cup---Updated-",
    },
    {
      title: "Crowd Funding Smartcontract",
      image: SmartContract,
      details: "Developed a Crowd Funding smart contract for digital tokens...",
      link: "https://github.com/Anonymous-hss/Fund-me-smart-contract-",
    },
  ];

  return (
    <section className="contactPage">
      <section className="projects" id="projects">
        <h2 className="projects-title">Some of my Recent Projects</h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div className="project-container project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="project-pic"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-details">{project.details}</p>
              <a href={project.link} target="_blank" className="project-link">
                Check it Out
              </a>
            </div>
          ))}
        </div>
        <button className="workBtn">See more</button>
      </section>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out form below to discuss any work opportunities
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            name="your_email"
            className="email"
            placeholder="Your Email"
          ></input>
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          />
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/harshal-sawatkar/"
              target="_blank"
            >
              <img src={LinkedIn} alt="" className="link" />
            </a>
            <a href="https://twitter.com/HarshalSawatkar" target="_blank">
              <img src={TwitterIcon} alt="" className="link" />
            </a>
            <a href="https://www.instagram.com/hss.exe/?hl=en" target="_blank">
              <img src={InstagramIcon} alt="" className="link" />
            </a>
            <a
              href="https://m.facebook.com/harshal.sawatkar?eav=AfYGNyGRl3xoagYcCP3fbhBkCoiqQHazWwJXUWivaoG6becNtT9tqdY-2m4BvJblz4g&paipv=0"
              target="_blank"
            >
              <img src={FacebookIcon} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
