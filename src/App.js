import ContactForm from './components/ContactForm';


import profileimg from './img/profileimg.png';
import htmllogo from './img/html.png';
import csslogo from './img/css.png';
import javascriptlogo from './img/javascript.png';
import postgres from './img/postgresql.png';
import expresslogo from './img/express.png';
import mongodblogo from './img/MongoDB.png';
import nodelogo from './img/nodejs.jpg';
import railslogo from './img/rails.png';
import reactlogo from './img/react.png'; 
import { useRef } from 'react';
import tvstack from './img/tvstacknobg.png'
import avatar from './img/newavatar.jpg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const App = () => {
  return (
    <>  
    <div className='background'></div>
    <Parallax pages={3}>

      <ParallaxLayer
        offset={0}
        speed={1}
        factor={1}
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
        }}>
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
        
      </ParallaxLayer>

      <ParallaxLayer offset={1}>
      <div className="about">
          <p>I am a self-taught developer, based out of Yangon, Myanmar, looking to make the first step in tech industry.
            I used to work in interior decoration but now I work with code.</p> 
          <p>I love combing the worlds of logic and creative design to make eye-catching and user-friendly websites and applications.
            So hit me up if you're looking for a developer!</p>
        </div>
        
      </ParallaxLayer>

      <ParallaxLayer offset={1.3}>
        <div><a href="/" className='glitchy-line title'>Projects</a></div>

        <div className="projectList">
          <div className="project">
            <img src={nodelogo} alt="" className='projectimg'/>
          </div>

          <div className="project">
            <img src={nodelogo} alt="" className='projectimg'/>
          </div>

          <div className="project">
            <img src={nodelogo} alt="" className='projectimg'/>
          </div>

          <div className="project">
            <img src={nodelogo} alt="" className='projectimg'/>
          </div>
        </div>


      </ParallaxLayer>

      <ParallaxLayer offset={2.3}>

      </ParallaxLayer>
    </Parallax>
  {/*

         {/* <section className='section project'>
           <h1>PROJECTS</h1>
            <div className="projectList">
            <div className='image-cropper'>
              <img src={profileimg} alt="Profile Picture" className='img' />
            </div>
            <div className='image-cropper'>
              <img src={profileimg} alt="Profile Picture" className='img' />
            </div>
            <div className='image-cropper'>
              <img src={profileimg} alt="Profile Picture" className='img' />
            </div>
        </div>

        <h1>Technologies</h1>
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
            <img src={nodelogo} alt="nodejs logo" />
            <img src={railslogo} alt="rails logo" />
            <img src={reactlogo} alt="react logo" />
            <img src={expresslogo} alt="express logo" />
            <img src={mongodblogo} alt="mongodb logo" />
            <img src={postgres} alt="progresql logo" />

          </div>
          </div>
        </div>
       </section>

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