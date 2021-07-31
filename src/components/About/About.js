import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./About.module.css";
import profilePicture from "../../assets/images/pazhamporilou1.svg";
import { motion } from "framer-motion";
import Icons from "../Icons/Icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const About = () => (
  <div>
    <div className={classes.aboutDiv}>
      <div className={classes.dpNameDiv}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className={classes.profilePictureDiv}>
            <img
              style={{ width: 200 }}
              src={profilePicture}
              alt="Profile Picture"
              className={classes.imageDiv}
            />
          </div>{" "}
        </motion.div>
        <div className={classes.nameDiv}>
          <h1>Aaron Kuruvilla</h1>
        </div>
      </div>

      <div className={classes.projectsContactDiv}>
        <Link to="/projects" className={classes.buttonsDiv}>
          <motion.div whileHover={{ scale: 1.35 }}>
            <Button
              className={classes.projectButton}
              size="lg"
              variant="primary"
            >
              Projects
            </Button>
          </motion.div>
        </Link>
        <Link to="/contact" className={classes.buttonsDiv}>
          <motion.div whileHover={{ scale: 1.35 }}>
            <Button
              className={classes.contactButton}
              size="lg"
              variant="primary"
            >
              Contact
            </Button>{" "}
          </motion.div>
        </Link>
      </div>
    </div>

    <div className={classes.aboutMeSkillsDiv}>
      <div className={classes.aboutMe}>
        <p className={classes.aboutMePara}>
          Hi y'all, Welcome to my portfolio. where I showcase my skills and
          stuff I know. <br></br> Studied Web development from <br></br>
          <a
            href="https://www.fanshawec.ca/programs/iwd2-web-development-and-internet-applications/next#group_courses"
            target="_blank"
          >
            Fanshawe College{" "}
          </a>
          . Here to help you with anything web related.
          <br></br>Just send me an email and let's work towards that amazing web
          site you need.
        </p>
      </div>

      <div className={classes.skillSection}>
        <h3 className={classes.skillHeading}>What I Do </h3>
        <div className={classes.skillIcons}>
          <div>
            <Icons />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
