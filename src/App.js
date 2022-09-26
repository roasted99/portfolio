import ContactForm from './components/ContactForm';
import Project from './components/Project';

import retrogrid from './img/retrowave-grid.gif';
import snake from './img/snake.gif';
import htmllogo from './img/html.png';
import csslogo from './img/css.png';
import javascriptlogo from './img/javascript.png';
import postgres from './img/postgresql.png';
import expresslogo from './img/express.png';
import mongodblogo from './img/MongoDB.png';
import railslogo from './img/rails.png';
import nodelogo from './img/nodejs.jpg'
import reactlogo from './img/react.png'; 
import { useRef } from 'react';
import tvstack from './img/tvstacknobg.png'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'


const App = () => {

  const ref = useRef();

  const neonlinebg = {
    backgroundImage:`url(${retrogrid})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  }

  return (
    <>  
    <div className='background'></div>
    <Parallax pages={3.3}>

      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={2.3}
        style={{
          backgroundImage: `url(${snake})`,
          backgroundSize: 'cover',
        }}>
        <div className="intro">
          <div className='description'>
          <div><a href="/" data-content="KHAM LAUNG" className='glitchy'>KHAM LAUNG</a></div>
          <div><a href="/" className='glitchy-line'>Full stack developer</a></div>
          
          </div>
        
        <div className='tvs'>
          <img src={tvstack} alt="TV Stack" className='tvstack'/>
          <div className="wrapper">
            <div className="c1"><div className="type1">HELLO!</div></div>
            <div className="c2"><div className="type2">WELCOME</div></div>
            
           </div>
          <div className="avatar"></div>
          </div>
        </div>
        
      </ParallaxLayer>

      <ParallaxLayer 
      offset={1}
      // factor={2.3}
      // style={{
      //   backgroundImage: `url(${snake})`,
      //   backgroundSize: 'cover',
      // }}
      >
      <div className="about">
          <p>I am a self-taught developer, based out of Yangon, Myanmar, looking to make the first step in tech industry.
            I used to work in interior decoration but now I work with code.</p> 
          <p>I love combing the worlds of logic and creative design to make eye-catching and user-friendly websites and applications.
            So hit me up if you're looking for a developer!</p>
        </div>
        
      </ParallaxLayer>

      <ParallaxLayer 
      offset={1.3}
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

        <div className="technologies">
          <div className="marquee">
            <div className='marqueeGroup'>

            <img src={htmllogo} alt="html logo" />
            <img src={csslogo} alt="css logo" />
            <img src={javascriptlogo} alt="javascript logo" />
            <img src={nodelogo} alt="nodejs logo" />
            <img src={postgres} alt="progresql logo" />
            <img src={reactlogo} alt="react logo" />
            <img src={expresslogo} alt="express logo" />
            <img src={mongodblogo} alt="mongodb logo" />
            <img src={railslogo} alt="rails logo" />

          </div>

          <div aria-hidden="true" className='marqueeGroup'>
            
            <img src={htmllogo} alt="html logo" />
            <img src={csslogo} alt="css logo" />
            <img src={javascriptlogo} alt="javascript logo" />
            <img src={reactlogo} alt="nodejs logo" />
            <img src={railslogo} alt="rails logo" />
            <img src={reactlogo} alt="react logo" />
            <img src={expresslogo} alt="express logo" />
            <img src={mongodblogo} alt="mongodb logo" />
            <img src={reactlogo} alt="progresql logo" />

          </div>
          </div>
        </div>


      </ParallaxLayer>
      <ParallaxLayer 
      offset={2.3}
      style={neonlinebg}>
      <a href="/" className='glitchy-line title'>CONTACT</a>
        <div className='contact'>
          <div className="contactinfo">
            
            <div className="neonsign">
              <span>Get&nbsp;</span>
              <span className='flicker'>i</span><span>n&nbsp;</span>
              <span className='flicker'>t</span><span>ouch</span>
              <span className='fastFlicker'>!</span>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/kham-laung/" className='link' target="_blank">
                
              <span className='icon'><FaLinkedin /> LinkedIn</span></a>
              </div>
             <div>
            <a href="https://github.com/roasted99" className='link' target="_blank">
              
              <span className="icon"><FaGithub /> GitHub</span>
            </a>
            </div> 
            <div>
            <a href="https://twitter.com/KhamLao11" className='link' target="_blank">
            
              <span className="icon"><FaTwitter /> Twitter</span>
              </a>
            </div>
          </div>
        <ContactForm />
        </div>

        
      </ParallaxLayer>
    </Parallax>
  {/*

         {/* 
       <section className='section contact'>
        
          <div className="contactinfo">
            <h1>GET IN TOUCH</h1>
          </div>
          <ContactForm />
        
       </section>     
        
    </div>  */}
            
 
      </>
  );
}

export default App;