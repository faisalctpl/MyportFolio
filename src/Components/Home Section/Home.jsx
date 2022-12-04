import React from 'react';
import './home.css'

// imported icons here =================
import {AiFillGithub} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'
import {TbArrowBigRightLine} from 'react-icons/tb'
import {FiChevronsDown} from 'react-icons/fi'


const Home = () => {
  return (
    <section id='home' className='home section'>

    {/* this div will be only visible at wider screen */}

      <div className="leftIcons">

        <div className="socials grid">
          <a href="https://github.com" target='_blank'>
            <AiFillGithub className='icon'/>
          </a>
          <a href="https://twitter.com" target='_blank'>
            <FiTwitter className='icon'/>
          </a>
          <a href="https://youtube.com" target='_blank'>
            <FiYoutube className='icon'/>
          </a>

          <div className="line"></div>
        
        </div>
      </div>

      {/* homeContent */}
      <div className="container homeContainer">
        <span className="introText">
          Hi my name is,
        </span>

        <h1 className="title">
          Faisal Khan
        </h1>
        
        <span className="subTitle">
          I develops scalable web based applications and software.
        </span>

        <p className="homeParagraph">
          I code within required coding standards and styles to serve the exact need.
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLine className='icon'/>
            </a>
          </button>

          <div className="scrollDiv">
            <a href="" className="flex">
             <h6 className="scroll">Scroll Down</h6> <FiChevronsDown className='icon'/>
            </a>
          </div>
        </div>

      </div>

      {/* right div, with email address (Will also be visible at a wider screen only) */}

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mailto:youremail@gmail.com" target='_blank'>
              youremail@gmail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
