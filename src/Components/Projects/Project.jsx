import React from 'react'
import './Project.css'
import Theme from '../ColorTheme/Theme';
import { Projects } from '../../assets/projects_data';
function Project() {
  return (
   <>
    <div id='project' className="projects">
        <div className="projects-title">
        <h1>Projects</h1>
        <Theme />
        </div>
        <div className="projects-container">
            {
                Projects.map((project,index)=>{
                    return(
                        <div key={index} className="project-format">
                        <img src={project.src} alt={project.name} />
                        <h3>{project.name}</h3>
                      </div>  
                    )
                })
            }
        </div>
        
      </div>
   </>
  )
}

export default Project
