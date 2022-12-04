// import React from 'react';
// import './projects.css'
// import {AiFillYoutube} from 'react-icons/ai'
// import {AiFillGithub} from 'react-icons/ai'

// // Images =====================
// import img from '../../Assets/img1.jpg'




// Okay huys let me explain this...
// I have a dammy data already that and its in an array names data
// We are goin to use this data with high order array method to output all the 
// information on the browser, in this case we are going to use "map"
// so we can create the data card. This is the easiest way guys, other than creating each card.
// It looks more clean and use less lines of code... Let do it yaaaaa...

// First commment out the second id and we see what exactly is going on..
// Now we have finished setthing up everthing, lets import our images

// const data = [
//     {
//     id: 1,
//     image: img,
//     demo: ' https://https://www.youtube.com/watch?v=Ei9bZj-EG8o',
//     liveLink: '',
//     github: '',
//     title: 'Hotel Incidents Docket',
//     desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel.',
//     tech1: 'Html',
//     tech2: 'CSS',
//     tech3: 'JavaScript',
//     tech4: 'PHP',
// },

// // {
// //     id: 2,
// //     image: img9,
// //     demo: 'https://www.youtube.com/watch?v=wxI-RuDfC8Y',
// //     liveLink: 'https://cvgeneratorapp.netlify.app/',
// //     github: '',
// //     title: 'CV Generator APP',
// //     desc: 'Frontend application that help user to generate CV by filling the fields and clicking download CV button.',
// //     tech1: 'Html',
// //     tech2: 'Css',
// //     tech3: 'JavaScript',
// // }

// ]


// const Project = () => {
//     return (
//         <section id="projects" className='projects container sections'>
//             <div className="sectionTitle">
//                 <span className="titleNumber">03.</span>
//                 <h5 className='titleText'>Projects
//                     <div className="underline"><span></span></div>
//                 </h5>
//             </div>

//             <div className="projectContainer grid">
//                 {
//                     data.map((id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4) => {
//                         return(
//                             <div key={id} className="singleProject">

//                                 <div className="externalLinks flex">
//                                     <div className="youtubeIcon">
//                                         <a href={demo} target="_blank">
//                                             <AiFillYoutube className='icon'/>
//                                         </a>
//                                     </div>
//                                     <div className="githubIcon">
//                                         <a href={demo} target="_blank">
//                                             <AiFillGithub className="icon"/>
//                                         </a>
//                                     </div>
//                                 </div>

//                                 <div className="imgDiv">
//                                     <a href="" target="_blank">
//                                         <img src={image} alt={title} />
//                                     </a>
//                                 </div>

//                                 <div className="projectTitle">
//                                     <h3>{title}</h3>
//                                 </div>

//                                 <div className="desc">
//                                     {desc}
//                                 </div>

//                                 <div className="technologies flex">
//                                     <small>{tech1}</small>
//                                     <small>{tech2}</small>
//                                     <small>{tech3}</small>
//                                     <small>{tech4}</small>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>



//         </section>
//     );
// }

// export default Project;
