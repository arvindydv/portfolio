import { MotionConfigContext } from "framer-motion";
import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { leftSideAnimation } from "../../Animation";

export const Header = () => {
  return (
    <motion.nav className="nav" {...leftSideAnimation}>
      <div className="logo-container">
        <div className="logo-img">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQHOQRTvNekKzA/profile-displayphoto-shrink_800_800/0/1667706204416?e=1715817600&v=beta&t=r6tNt7XFIFVOBMK6GCAnRH2UZV4ytPT5DWnCpn8NBYQ"
            alt=""
          />
        </div>
        <h2 className="name">Arvind Yadav</h2>
        <p className="profile">Full-stack Developer</p>
      </div>

      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Experince</li>
          <li>Projects</li>
          <li>Conact</li>
        </ul>
      </div>

      <div className="media-icon">
        <ul>
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/arvind-yadav-215831201/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              className="mail"
              href="mailto:arvindydv03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a
              className="github"
              href="https://github.com/arvindydv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};
