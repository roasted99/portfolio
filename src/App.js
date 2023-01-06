import Project from './components/Project';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Svg from './components/Svg';

import retrogrid from './img/retrowave-grid.gif';
import snake from './img/snake.gif';
import computer from './img/computer.gif';
import reactlogo from './img/react.png'; 
import { useRef } from 'react';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FiMenu } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useState } from 'react';



const App = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  const neonlinebg = {
    backgroundImage:`url(${retrogrid})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  }

  return (
    <BrowserRouter>
    <>  
    <div className="background">
      <Svg />
    </div>
    <Parallax pages={3.3}>

      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={2.3}
        onClick={() => ref.current.scrollTo(1)}
        style={{
          // backgroundImage: `url(${snake})`,
          // backgroundSize: 'cover',
        }}>
          <IconContext.Provider
          value={{size: '50px'}}>

            <div className="navbar">
             <FiMenu 
              className='navicon'
            />
            <Navbar open={open}/>
            </div>
          

           <Hero />
        </IconContext.Provider>
      </ParallaxLayer>

      <ParallaxLayer 
      offset={1}
      id="about"
      onClick={() => ref.current.scrollTo(1.3)}
      style={{
        backgroundImage: `url(${computer})`,
        backgroundSize: 'contain'
      }}
      >
      <div className="about">
          <p>I am a self-taught developer, based out of Yangon, Myanmar, looking to make the first step in tech industry.
            I used to work in interior decoration but now I work with code.</p> 
          <p>I love combing the worlds of logic and creative design to make eye-catching and user-friendly websites and applications.
            So hit me up if you're looking for a developer!</p>
        </div>
        
      </ParallaxLayer>

      <ParallaxLayer 
      offset={1.25}
      id="project"
      onClick={() => ref.current.scrollTo(2.3)}
      >
        <div><a href="/" className='glitchy-line title'>PROJECTS</a></div>

        <div className="projectList">
         <Project 
         img={reactlogo}
         alt="html logo"
         title="Library Management App"
         technologies="Ruby on Rails"
         />

        <Project 
         img={reactlogo}
         alt="html logo"
         title="Library Management App"
         technologies="Ruby on Rails"
         />

        <Project 
         img={reactlogo}
         alt="html logo"
         title="Library Management App"
         technologies="Ruby on Rails"
         />

        <Project 
         img={reactlogo}
         alt="html logo"
         title="Library Management App"
         technologies="Ruby on Rails"
         />
        </div>

        <div><a href="/" className='glitchy-line title tech'>TECHNOLOGIES</a></div>
        <Marquee />
      
      </ParallaxLayer>
      <ParallaxLayer 
      offset={2.3}
      id="contact"
      onClick={() => ref.current.scrollTo}
      style={neonlinebg}>
      <a href="/" className='glitchy-line title'>CONTACT</a>
       <Contact />

        
      </ParallaxLayer>
    </Parallax>
 
      </>
      </BrowserRouter>
  );
}

export default App;