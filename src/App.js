import React from 'react';
import './app.css'
import About from './Components/About Section/About';
import Contact from './Components/Contact Section/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home Section/Home';
import Navbar from './Components/Navbar Section/Navbar';
import Projects from './Components/Projects Section/Project';
import Skill from './Components/Skill Section/Skill';

const App = () => {
  return (
    <>

    <Navbar />
    <Home />
    <About />
    <Skill />
    {/* <Projects /> */}
    
    <Contact />

    <Footer />

    </>
  );
}

export default App;