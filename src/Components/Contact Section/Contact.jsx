import React, { useRef } from 'react';
import './contact.css'


// icons ================
import {BsInstagram} from 'react-icons/bs'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'


// emailjs =================

import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      e.target.reset() //the form will reset after submmit
  };






  return (
    <section id='contact' className='contact section'>

     <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className='titleText'>Contact
        <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className='icon instaIcon'/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @faisalkhanctpl
              </span>

              <div>
                <a href="https://www.instagram.com/faisalkhanctpl" className='flex' target="_blank">
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <AiFillLinkedin className='icon instaIcon'/>
              </div>
              <h4>LinkedIn</h4>
              <span className="userName">
                @faisalkhanctpl
              </span>

              <div>
                <a href="https://www.linkedin.com" className='flex' target="_blank">
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <AiOutlineTwitter className='icon instaIcon'/>
              </div>
              <h4>Twitter</h4>
              <span className="userName">
                @FaisalkhanCTPL
              </span>

              <div>
                <a href="https://www.twitter.com" className='flex' target="_blank">
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>

          </div>

        </div>

        <div className="form grid">
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Enter your Name' name='name' />
            <input type="email" placeholder='Enter your Email' name='email' />
            <textarea name="" id="" placeholder='Enter your message'></textarea>
            <button className="formBtn" type='submit' name='submit'>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
