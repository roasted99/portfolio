import { HashLink as Link } from 'react-router-hash-link';

const Navbar = (props) => {
  // if (!props.open) {
  //   return null
  // }

  return (
    <ul className='nav'>
      <li><Link to='#about' smooth className='glitchy-line'>About</Link></li>
      <li><Link to='#project' smooth className='glitchy-line'>Project</Link></li>
     <li><Link to='#contact' smooth className='glitchy-line'>Contact</Link></li>
    </ul>
  )
}

export default Navbar