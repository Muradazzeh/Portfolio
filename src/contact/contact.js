import React, { useRef } from 'react'
import "./contact.css"
import phone from "../image/phone.jpg"
import Email from "../image/email.png"
import Address from "../image/location.png"
function Contact() {
    const formRef =useRef()
  return (
    <div className='c' >
        <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'> Let see your project</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={phone} alt="image" className="c-icon"/>
                            00962786492199
                        </div>
                        <div className='c-info-item'>
                            <img src={Email} alt="image" className="c-icon"/>
                            morad.azza@yahoo.com
                        </div>
                        <div className='c-info-item'>
                            <img src={Address} alt="image" className="c-icon"/>
                            Jordan-Amman
                        </div>
                    </div>
                </div>
                    <div className='c-right'>
                        <p className='c-desc'>
                            <b>what is your story</b> Get in touch. I am ready to work, I have fundamental knowledge of software development 
                        </p>
                        <form  ref={formRef}>
                            <input type="text" placeholder="Name" name="userName"/>
                            <input type="text" placeholder="Subject" name="userSubject"/>
                            <input type="text" placeholder="Email" name="userEmail"/>
                            <textarea  rows="5" placeholder="Message" name="userMessage"/>
                            <button >Submit</button>
                        </form>
                    </div>
                
            
        </div>
        </div>
  )
}

export default Contact