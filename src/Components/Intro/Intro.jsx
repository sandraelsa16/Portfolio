import React from 'react'
import './Intro.css'
import profileimg from '../../assets/SandraElsaVarughese.jpg'
function Intro() {
  return (
    <>
     <div id='home' className="intro">
        <img height={"300px"} src={profileimg} alt="profile_img" />
        <h1><span>I'm Sandra Elsa Varughese,</span> MERN stack developer</h1>
        <p>A full stack developer with 1 year experience in Techmax Technologies and Luminar Technolab</p>
        <div className="intro-action">
            <div className="intro-connect">Connect with me</div>
            {/* <div className="resume"><span>My resume <i class="fa-solid fa-download"></i></span></div> */}
        </div>
     </div>
    </>
  )
}

export default Intro
