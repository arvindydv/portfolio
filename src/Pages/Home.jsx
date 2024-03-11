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

export const Home = () => {
  // console.log(skills);
  useEffect(() => {
    gsap.fromTo(
      ".section-title",
      {
        x: -100,
        opacity: 0,
        delay: 0.8,
        duration: 0.5,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.8,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      ".img-container",
      {
        x: 100,
        opacity: 0,
        delay: 0.8,
        duration: 0.5,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.8,
        duration: 0.5,
      }
    );
  });
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
                    speed={50}
                    style={{ fontSize: "1.5em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </div>
                <div className="w-50 ">
                  <div className="img-container">
                    <img className="w-full" src={BannerImg} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* skills and experince */}
            <section id="skill-and-experince w-full">
              <p className="section-title">Skills And Experince</p>
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
              <p className="section-title">Projects</p>
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
          </div>
        </main>
      </div>
    </>
  );
};
