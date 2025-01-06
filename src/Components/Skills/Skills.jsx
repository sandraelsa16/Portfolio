import React from "react";
import "./Skills.css";
import Theme from "../ColorTheme/Theme";
import { BsnsIntel, Database, PrgmLang, WebTech } from "../../assets/skills_data";
function Skills() {
  return (
    <>
     
      <div id="skills" className="skills">
        <div className="skills-title">
        <h1>Skills</h1>
        <Theme />
        </div>
        <h2>Web Technologies:</h2>
        <div className="skills-container">
          {WebTech.map((skill, index) => {
            return (
              <div key={index} className="services-format">
                <h3>{skill.s_name}</h3>
                <img src={skill.src} alt={skill.s_name} />
              </div>
            );
          })}
        </div>
        <h2>Programming Language(Basics):</h2>
        <div className="skills-container">
          {PrgmLang.map((skill, index) => {
            return (
              <div key={index} className="services-format">
                <h3>{skill.s_name}</h3>
                <img src={skill.src} alt={skill.s_name} />
              </div>
            );
          })}
        </div>
        
        <h2>Database:</h2>
        <div className="skills-container">
          {Database.map((skill, index) => {
            return (
              <div key={index} className="services-format">
                <h3>{skill.s_name}</h3>
                <img src={skill.src} alt={skill.s_name} />
              </div>
            );
          })}
        </div>
        <h2>Business Intelligence:</h2>
        <div className="skills-container">
          {BsnsIntel.map((skill, index) => {
            return (
              <div key={index} className="services-format">
                <h3>{skill.s_name}</h3>
                <img src={skill.src} alt={skill.s_name} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
