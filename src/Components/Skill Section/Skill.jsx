import React from 'react';
import './skill.css'

// Imported Icons =================
import {TbBrandReactNative} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {CgFigma} from 'react-icons/cg'
import {SiAdobexd} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {FaGitSquare} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {BsWordpress} from 'react-icons/bs'
import {SiMysql} from 'react-icons/si'

const Skill = () => {
  return (
    <section id='skill' className='skills section'>

      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className='titleText'>Skills
        <div className="underline"><span></span></div>
        </h5>
      </div>

      {/* skill container */}

      <div className="skillsContainer grid">

        {/* single group of skills */}

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle">
              2 Years Experience
            </span>
          </div>
            
            <div className="generalSKills">
              {/*  Single skill div */}
              <div className="singleSkill">
                <div className="iconBox flex">
                  <TbBrandReactNative className='icon'/>
                </div>
                <span className="skillName">React</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <IoLogoJavascript className='icon'/>
                </div>
                <span className="skillName">JavaScript</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <IoLogoSass className='icon'/>
                </div>
                <span className="skillName">Sass</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <SiTailwindcss className='icon'/>
                </div>
                <span className="skillName">Tailwind</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <SiCss3 className='icon'/>
                </div>
                <span className="skillName">CSS</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <FaHtml5 className='icon'/>
                </div>
                <span className="skillName">HTML</span>
              </div>

            </div>
        </div>

        {/* single group of skills */}

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">UI/UX Design</h2>
            <span className="subTitle">
              2 Years Experience
            </span>
          </div>
            
            <div className="generalSKills">
              {/*  Single skill div */}
              <div className="singleSkill">
                <div className="iconBox flex">
                  <CgFigma className='icon'/>
                </div>
                <span className="skillName">Figma</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <SiAdobexd className='icon'/>
                </div>
                <span className="skillName">AdobeXd</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <SiAdobephotoshop className='icon'/>
                </div>
                <span className="skillName">Photoshope</span>
              </div>

            </div>
        </div>

        {/* single group of skills */}

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className="subTitle">
              2 Years Experience
            </span>
          </div>
            
            <div className="generalSKills">
              {/*  Single skill div */}
              <div className="singleSkill">
                <div className="iconBox flex">
                  <FaGitSquare className='icon'/>
                </div>
                <span className="skillName">Git</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <AiFillGithub className='icon'/>
                </div>
                <span className="skillName">GitHub</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <BsWordpress className='icon'/>
                </div>
                <span className="skillName">Wrodpress</span>
              </div>

              <div className="singleSkill">
                <div className="iconBox flex">
                  <SiMysql className='icon'/>
                </div>
                <span className="skillName">MySql</span>
              </div>

            </div>
        </div>

      </div>

    </section>
  );
}

export default Skill;
