import React from 'react'
import "./ProjectList.css"
import Project from '../project/project'
import {project} from "../../project"
function ProjectList() {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'> Create and Develope web site</h1>
            <p className='pl-desc'>We learn how to develop web site , starting with the back end , server using node Js , 
            until creating front end using react</p>
            <h3> My projects </h3>
        </div>
        <div className='pl-list'>
            {project.map((item)=>(
                <Project key ={item.id} img={item.img}  link={item.link} desc={item.desc}/>
            )

            )}
            
           
        </div>
    </div>
  )
}

export default ProjectList