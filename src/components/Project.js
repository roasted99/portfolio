import { useState } from "react";

import Modal from "./Modal";

const Project = (props) => {
  const[show, setShow] = useState(false);


  return(
    <>
    <div className="project" onClick={() => setShow(true)}>
      <img src={props.img} alt={props.alt} className='projectimg'/>
      <h3>{props.title}</h3>
    </div>
    <Modal 
    img={props.img}
    alt={props.alt}
    title={props.title}
    description={props.description}
    technology={props.technologies}
    code={props.code}
    link={props.link}
    onClose={() => setShow(false)} 
    show={show}/>
    </>
  )
}

export default Project;