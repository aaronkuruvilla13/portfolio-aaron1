import React from "react";
import classes from "./Navbar.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Navbar = (props) => {
  return (
    <header>
      <nav className={classes.navBar}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/home">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
