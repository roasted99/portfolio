import Project from './components/Project';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Svg from './components/Svg';

import retrogrid from './img/retrowave-grid.gif';
import snake from './img/snake.gif';
import computer from './img/computer.gif';
import inventoryapp from './img/Inventoryapp.png';
import googleMapClone from './img/googlemapclone.png';
import shoppingCart from './img/react-shopping-cart.png'; 



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
        speed={0.1}
        factor={2}
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
        // backgroundImage: `url(${computer})`,
        // backgroundSize: 'contain'
      }}
      >
      <div className="about">
      <div><a href="/" className='glitchy-line title'>ABOUT</a></div>
          <p>As a self-taught developer based in Yangon, Myanmar, I have always been passionate about technology and its endless possibilities. After working in interior decoration for some time, I decided to switch careers and dive into the world of code. And let me tell you, it has been a journey filled with exciting challenges and rewarding experiences.</p> 
          <p>One of the things I love most about programming is the ability to combine logical thinking with creative design to produce eye-catching and user-friendly websites and applications. It's a fascinating process that requires not only technical skills but also a keen eye for aesthetics and usability.</p>
          <p>I am always eager to learn new programming languages and tools, and I enjoy working on projects that allow me to flex my creative muscles. So, if you're in need of a skilled developer who is passionate about building amazing digital experiences, feel free to reach out to me. Let's work together to bring your ideas to life!</p>
        </div>
        
      </ParallaxLayer>

      <ParallaxLayer 
      offset={1.6}
      id="project"
      onClick={() => ref.current.scrollTo(2.3)}
      >
        <div><a href="/" className='glitchy-line title'>PROJECTS</a></div>

        <div className="projectList">
         <Project 
         img={shoppingCart}
         alt="react shopping app"
         title="E-commerce App"
         technologies="React, React-Context"
         description="The e-commerce app is a fully functional online shopping platform that has been built using React and React Context. The app is designed to provide users with an intuitive and engaging shopping experience, allowing them to navigate through different pages and add products to their cart."
         code="https://github.com/roasted99/shopping-cart"
         link="https://singular-profiterole-9e433e.netlify.app/"
         />

        <Project 
         img={inventoryapp}
         alt="Inventory App"
         title="Inventory App"
         description="The building material inventory app is built using Express, Node.js, and MongoDB, allowing for efficient data processing and management. The frontend uses EJS and Bootstrap to create user-friendly views for CRUD operations. This app is designed to help businesses in the building industry manage their inventory and streamline their operations."
         technologies="MongoDB, Express, Nodejs"
         code="https://github.com/roasted99/inventory-app"
         link="https://inventory-app-production-2cc5.up.railway.app/"
         />

        <Project 
         img={googleMapClone}
         alt="Google Map Clone"
         title="Google Map Clone"
         description="This project is a Google Maps clone that uses Mapbox Directions to provide routing information to users. It is built entirely with JavaScript and loads quickly for optimal user experience.
         Users can input their desired start and end locations, and the app will display the route on the map along with directions. The app also allows users to switch between driving, walking, and cycling modes of transportation. Overall, this project provides a lightweight alternative to Google Maps for users who prioritize speed and simplicity."
         technologies="Mapbox Direction API, Javascript"
         code="https://github.com/roasted99/mapbox"
         link="https://roasted99.github.io/mapbox/"
         />

        {/* <Project 
         img={reactlogo}
         alt="Private Event"
         title="Private Event"
         description=""
         technologies="Ruby on Rails"
         code="https://github.com/roasted99/private-event"
         link=""
         /> */}
        </div>

        <div><a href="/" className='glitchy-line title tech'>TECHNOLOGIES</a></div>
        <Marquee />
      
      </ParallaxLayer>
      <ParallaxLayer 
      offset={2.5}
      speed={.1}
      id="contact"
      onClick={() => ref.current.scrollTo}
      >
      <a href="/" className='glitchy-line title'>CONTACT</a>
       <Contact />

        
      </ParallaxLayer>
    </Parallax>
 
      </>
      </BrowserRouter>
  );
}

export default App;