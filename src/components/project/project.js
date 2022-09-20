import React from 'react'
import "./project.css"
function Project(props) {
  return (
   
    <div className='p'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        
      </div>
<a href={props.link} target="_blank" rel='noreferrer'>
<img src={props.img}  alt="imag"   className='p-img' width="350 px"/>

</a>
<p className='p-p'>{props.desc}</p>
      </div>
     
      
      
  )
}

export default Project