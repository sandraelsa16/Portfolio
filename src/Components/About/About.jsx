import React from "react";
import Theme from "../ColorTheme/Theme";
import profileimg from "../../assets/SandraElsaVarughese.jpg";
import "./About.css";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <Theme />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img height={"400px"} src={profileimg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a fullstack developer, I am passionate about building high
              quality,real-world and user-friendly web applications. I thrive on
              using modern JavaScript technologies to create responsive,
              high-performance solutions that enhance user experiences. I am
              committed to continuous learning and eager to contribute to
              innovative projects that drive business success.
            </p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>
                <span>Web Technologies:</span>HTML, CSS, Bootstrap, JavaScript,
                React.js, NodeJS, ExpressJS
              </p> <hr style={{width:"50%"}}/>
            </div>
            <div className="about-skill">
              <p>Programming Languages (Basics) : Python </p> <hr style={{width:"40%"}}/>
            </div>

            <div className="about-skill">
              <p>Business Intelligence : Power BI </p><hr style={{width:"40%"}}/>
            </div>
            <div className="about-skill">
              <p>Database :
              MySQL, MongoDB</p><hr style={{width:"30%"}}/>
            </div>
          </div> */}
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>1</h1>
              <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>2</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
