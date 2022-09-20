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

    •	First we will use GitHub management system to check each member task, what we have been accomplished and that is the remaining task 
•	In this back end project, we are planning to reach our minimum expectation, for our app 
•	That we have proper database, with proper tables that connected to each other, and user can sign up and login, and also we will add other way to login using Facebook or google account 
•	 And we need to save all service provider in proper table when the user search for any service can he get it 
•	And the location for each service provider can be saved and updated 

    </p>
    <div className='.a-award' >
        <img src={myImage1} alt='' className='a-award-img' />
        <div className='.a-award-text'>
            <h4 className='a-award-title'>Electrical Engineer</h4>
            <p className='.a-award-desc'>Graduated from Jordan university of science and technology  </p>
            
        </div>
    </div>
</div>
        </div>
  )
}

export default About