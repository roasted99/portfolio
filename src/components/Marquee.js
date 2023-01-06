import { FaHtml5, FaCss3Alt, FaReact, FaNode } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { SiRubyonrails } from 'react-icons/si'
import { IconContext } from 'react-icons';

const Marquee = () => {

  return (
    <IconContext.Provider 
    value={{color: 'white', size: '100px'}}>
    <div className="technologies">
      <div className="marquee">
        <div className='marqueeGroup'>
          <div className="techicon">
            <FaHtml5 />
            <p>HTML</p>
          </div>

          <div className="techicon">
            <FaCss3Alt />
            <p>CSS</p>
          </div>

          <div className="techicon">
            <FaReact />
            <p>React</p>
          </div>

          <div className="techicon">
            <FaNode />
            <p>NodeJS</p>
          </div>

          <div className="techicon">
            <DiMongodb />
            <p>MongoDB</p>
          </div>

          <div className="techicon">
            <SiRubyonrails />
            <p>Ruby On Rails</p>
          </div>
            
          <div className="techicon">
            <DiMysql />
            <p>MySQL</p>
          </div> 

        </div>

        <div aria-hidden="true" className='marqueeGroup'>
        <div className="techicon">
            <FaHtml5 />
            <p>HTML</p>
          </div>

          <div className="techicon">
            <FaCss3Alt />
            <p>CSS</p>
          </div>

          <div className="techicon">
            <FaReact />
            <p>React</p>
          </div>

          <div className="techicon">
            <FaNode />
            <p>NodeJS</p>
          </div>

          <div className="techicon">
            <DiMongodb />
            <p>MongoDB</p>
          </div>

          <div className="techicon">
            <SiRubyonrails />
            <p>Ruby On Rails</p>
          </div>
            
          <div className="techicon">
            <DiMysql />
            <p>MySQL</p>
          </div> 
 
          

        </div>
      </div>
    </div>
    </IconContext.Provider>
  )
}

export default Marquee