import React from "react";
import "./Navbar.css";
import Theme from "./ColorTheme/Theme";
import { useState } from "react";
import { AnchorLink } from "react-anchor-navigation";

function Navbar() {
  const[menu,setMenu]= useState("")

  return (
    <>
      <div className="navbar">
        <div style={{ marginTop: "10px" }}>
          <h2 style={{ fontFamily: "monospace", fontSize: "40px" }}>Sandra</h2>
          <Theme />
        </div>
        <ul className="nav-menu">
          <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu('home')}>Home</p></AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu('about')}>About me</p></AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={50} href="#skills"><p onClick={()=>setMenu('skills')}>Skills</p></AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={50} href="#project"><p onClick={()=>setMenu('projects')}>Projects</p></AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect">Connect with Me</div>
      </div>
    </>
  );
}

export default Navbar;
