import React, { useEffect } from "react";
import { Header } from "../components/header/Header";
import "./Home.css";
import BannerImg from "./banner.png";
import { TypeAnimation } from "react-type-animation";
import { Skills } from "../components/skills/Skills";
import gsap from "gsap";
import skills from "../data/skills";
import { Experince } from "../components/experince/Experince";
import { experinces } from "../data/experince";
import { Project } from "../components/project/Project";
import { projects } from "../data/projects";
import {
  leftSideAnimation,
  rightSideAnimation,
  ThankYouAnimation,
} from "../Animation";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

export const Home = () => {
  // download resume
  const downloadHandler = () => {
    const fileUrl = "../arvindyadav-resume.pdf";
    const fileName = "arvindyadav-resume.pdf";
    saveAs(fileUrl, fileName);
  };

  return (
    <>
      <div className="container-fluid">
        <header className="header">
          <Header />
        </header>
        <main>
          <div className="container">
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-50 animated-txt">
                  <h1 className="title">Hi, I'm Arvind Yadav</h1>
                  <TypeAnimation
                    sequence={[
                      "I am a full-stack developer with 1 year of experince using Html, css, JavaScript and nodeJS. Reach out if you liked my profile.",
                      1000,
                    ]}
                    wrapper="p"
                    speed={40}
                    style={{ fontSize: "1.5em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </div>
                <div className="w-50 ">
                  <motion.div className="img-container" {...rightSideAnimation}>
                    <img className="w-full" src={BannerImg} alt="" />
                  </motion.div>
                </div>
              </div>
            </div>

            <section id="about">
              <motion.p className="section-title" {...leftSideAnimation}>
                About
              </motion.p>
              <div className="about-container">
                <div className="about-img">
                  <motion.img
                    className="w-full"
                    src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                    alt=""
                    {...leftSideAnimation}
                  />
                </div>
                <motion.div className="about-des" {...rightSideAnimation}>
                  {/* <motion.p {...rightSideAnimation}>
                    I’m a Full Stack Developer with a strong foundation in HTML,
                    CSS, JavaScript, Bootstrap, SQL, MongoDB, Node.js,
                    Express.js, ReactJS, and Figma. I’m passionate about using
                    these skills to develop innovative web applications that are
                    user-friendly. I’m always eager to learn more about web
                    development and marketing. I enjoy the challenge of coding
                    and solving real-world problems. Currently, I’m looking for
                    opportunities to join a team that values innovation and
                    shares my enthusiasm for technology.
                  </motion.p> */}
                  <TypeAnimation
                    sequence={[
                      ` I’m a Full Stack Developer with a strong foundation in HTML,
                      CSS, JavaScript, Bootstrap, SQL, MongoDB, Node.js,
                      Express.js, ReactJS, and Figma. I’m passionate about using
                      these skills to develop innovative web applications that are
                      user-friendly. I’m always eager to learn more about web
                      development and marketing. I enjoy the challenge of coding
                      and solving real-world problems. Currently, I’m looking for
                      opportunities to join a team that values innovation and
                      shares my enthusiasm for technology.`,
                      1000,
                    ]}
                    wrapper="p"
                    speed={40}
                    // style={{ fontSize: "1.5em", display: "inline-block" }}
                    // repeat={Infinity}
                  />
                </motion.div>
              </div>
            </section>

            {/* skills and experince */}
            <section id="skill-and-experince w-full">
              <motion.p className="section-title" {...leftSideAnimation}>
                Skills And Experince
              </motion.p>
              <div className="flex space-between w-full">
                <div className="w-40 flex wrap space-between">
                  {skills.map((skill, idx) => {
                    return (
                      <div className="tech" key={idx}>
                        <Skills name={skill.techName} logo={skill.techLogo} />
                      </div>
                    );
                  })}
                </div>
                <div className="w-60">
                  <div className="experince-container">
                    {experinces.map((experince, idx) => {
                      return (
                        <div key={idx}>
                          <Experince
                            orgnization={experince.orgnization}
                            logo={experince.logo}
                            startDate={experince.startDate}
                            endDate={experince.endDate}
                            job={experince.job}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* projects */}

            <section id="projects-section">
              <motion.p className="section-title" {...leftSideAnimation}>
                Projects
              </motion.p>
              <div className="projects">
                {projects.map((project, idx) => {
                  return (
                    <div className="project" key={idx}>
                      {" "}
                      <Project
                        name={project.name}
                        des={project.des}
                        img={project.img}
                        tech={project.tech}
                      />
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="thankyou">
              <div className="thankyou-message-container">
                <motion.h1
                  {...ThankYouAnimation}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                  }}
                >
                  Thank{" "}
                </motion.h1>
                <motion.h1
                  {...ThankYouAnimation}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                  }}
                >
                  You
                </motion.h1>
                <motion.h1
                  {...ThankYouAnimation}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                >
                  For
                </motion.h1>
                <motion.h1
                  {...ThankYouAnimation}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                  }}
                >
                  Visiting!
                </motion.h1>
                <div className="thankyou-img">
                  <motion.img
                    {...ThankYouAnimation}
                    className="w-full"
                    src="https://simg.nicepng.com/png/small/980-9803933_emoji-emoji-pray-thankyou-thanks-praying-hands-emoji.png"
                    transition={{
                      duration: 0.5,
                      delay: 0.7,
                    }}
                    alt=""
                  />
                </div>
              </div>

              <motion.div
                className="resume"
                {...ThankYouAnimation}
                transition={{
                  duration: 0.4,
                  delay: 0.8,
                }}
              >
                <p className="text-center">Download Resume</p>
                <span className="download-resume" onClick={downloadHandler}>
                  <i className="fa-solid fa-download"></i>
                </span>
              </motion.div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
