import tvstack from '../img/tvstacknobg.png';

const Hero = () => {
  return (
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
  )
}

export default Hero;