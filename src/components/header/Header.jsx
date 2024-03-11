import { MotionConfigContext } from "framer-motion";
import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import {leftSideAnimation} from "../../Animation";

export const Header = () => {
  return (
    <motion.nav className="nav" {...leftSideAnimation}>
      <div className="logo-container">
        <div className="logo-img">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQHOQRTvNekKzA/profile-displayphoto-shrink_200_200/0/1667706204416?e=1710374400&v=beta&t=xcVcxFXBK4jhRVUv5k7mynE9DtTME5OP6RPanu9h4tw"
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
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
          </li>
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};
