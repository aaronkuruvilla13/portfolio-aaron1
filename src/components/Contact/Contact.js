import React from "react";
import classes from "./Contact.module.css";
import Navbar from "../Navbar/Navbar";
import obiWan from "../../assets/images/obiWan.jpg";
import { RiMailFill } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
const Contact = (props) => (
  <div>
    <Navbar />
    <div
      className={classes.contactHeading}
      style={{ backgroundImage: `url(${obiWan})` }}
    >
      <h1>Hello There</h1>
    </div>

    <div className={classes.contactFormDiv}>
      <div className={classes.formDiv}>
        <form className={classes.contactForm}>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" placeholder="Name"></input>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Say a little something about what you need"
          ></textarea>
          <button type="submit"> Send </button>
        </form>
      </div>
      <div className={classes.pingMe}>
        <h3> You can reach me here </h3>
        <div className={classes.reachMe}>
          <div className={classes.half}>
            <ul>
              <li>
                <RiMailFill className={classes.MailIcon} />
                <a target="_blank" href="mailto:aaronkuruvilla13@gmail.com">
                  aaronktym@gmail.com
                </a>
              </li>
              <li>
                <BsPhone className={classes.PhoneIcon} />
                <a target="_blank" href="tel:+15195215551">
                  +1519-521-5551
                </a>
              </li>
              <li>
                <SiLinkedin className={classes.linkedIn} />
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/aaronkuruvilla13/"
                >
                  Connect With Me
                </a>
              </li>
              <li>
                <VscGithub className={classes.gitHub} />
                <a target="_blank" href="https://github.com/aaronkuruvilla13">
                  My Coding Journey
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
