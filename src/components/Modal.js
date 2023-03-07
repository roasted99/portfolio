import { FaCode, FaExternalLinkAlt, FaRegWindowClose} from "react-icons/fa"

const Modal = props => {
  if (!props.show) {
    return null
  }
  
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-body">
          <div className="windowClose" onClick={props.onClose}><FaRegWindowClose /></div>
          <img src={props.img} alt={props.alt} className="project-img"/>
          <div className="projectinfo">
             <h3>{props.title}</h3>
            <h4>Description</h4>
            <p>{props.description}</p>
            <h4>Technologies used : {props.technology}</h4>
            <p></p>
            <div className="icons">
              <a href={props.code} className='link' target="_blank">
              <span className="icon"><FaCode /> Source code</span>
              </a>

               <a href={props.link} className='link' target="_blank">
                <span className="icon"><FaExternalLinkAlt />Live Link</span>
              </a>
            </div>

            <button  onClick={props.onClose} className="btn">
              <span className="btntext">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;