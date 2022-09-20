import React from 'react'
import myImage from "../../image/logo.jpg"
import myImage1 from "../../image/award.jpg"
import "./about.css"

function About() {
  return (
    <div className='a'>
<div className='a-left'>
    <div className='a-card bg'></div>
    <div className='a-card'>
        <img src={myImage} alt='' className='a-image' />
    </div>
</div>

<div className='a-right'>
    <h1 className='a-title'> About Me </h1>
    <p className='a-sub'>
    I am electrical engineer , I started my career at engineering field but I have passion on IT field , software development .
     so I am ready to learn new thing
    </p>
    <p className='a-desc'>

    <li>I can Analyze problems, identifies solutions and make decisions.</li>	
    <li>I worked on version control system, and we used GitHub to do all our tasks (https://github.com/Muradazzeh)</li>	
    <li>I have Fundamental understanding of HTML5, CSS, and JavaScript (ES6), node JS</li>	
    <li>I can  use node Js to build express server, and how to deploy to Heroku. </li>	
    <li>I learn react fundamental’s, react component’s life cycle.</li>	
    <li>I learn how to deploy react project on live web site, like netlify.</li>	
    </p>
    <div className='.a-award' >
        <img src={myImage1} alt='' className='a-award-img' />
        <div className='.a-award-text'>
            <h4 className='a-award-title'>Objective</h4>
            <p className='.a-award-desc'>I am looking for full-time position in software development that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.  </p>
            
        </div>
    </div>
</div>
        </div>
  )
}

export default About