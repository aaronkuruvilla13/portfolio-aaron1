import React from "react";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiWordpress,
  DiPhotoshop,
  DiIllustrator,
  DiJava,
  DiLinux,
  DiPhonegap,
  DiFirebase,
  DiGithub,
  DiBootstrap,
} from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiAdobexd } from "react-icons/si";
import classes from "./Icons.module.css";
import Tooltip from "react-simple-tooltip";

const Icons = () => {
  const icons = [
    [<DiHtml5 />, "HTML5", "red"],
    [<DiCss3 />, "CSS3", "pink"],
    [<DiJavascript1 />, "JavaScript", "orange"],
    [<DiReact />, "ReactJS", "lightblue"],
    [<AiOutlineConsoleSql />, "SQL", "pink"],
    [<DiFirebase />, "FireBase", "pink"],
    [<DiWordpress />, "WordPress", "violet"],
    [<DiGithub />, "GitHub", "grey"],
    [<DiJava />, "Java", "pink"],
    [<DiLinux />, "Linux", "pink"],
    [<DiPhonegap />, "Phonegap", "pink"],
    [<DiBootstrap />, "Bootstrap", "pink"],
    [<SiAdobexd />, "XD", "pink"],
    [<DiPhotoshop />, "Photoshop", "pink"],
    [<DiIllustrator />, "Illustrator", "pink"],
  ];

  const iconsDisplayFunc = icons.map((icon, id) => {
    return (
      <Tooltip
        className={classes.icons}
        key={id}
        content={icon[1]}
        background={"white"}
        placement={"top"}
        fontSize={"20px"}
        color={"black"}
        arrow={8}
        radius={5}
      >
        <i>{icon[0]}</i>
      </Tooltip>
    );
  });

  return <div className={classes.iconsDiv}>{iconsDisplayFunc}</div>;
};

export default Icons;
