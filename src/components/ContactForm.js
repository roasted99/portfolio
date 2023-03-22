import React, { useState, createElement } from "react";
import { FaRegPaperPlane } from "react-icons/fa"

const ContactForm = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState(null)

  function handleChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState })
    })
    const data = await response.json()

    if (!response.ok) {
      setStatusMessage('Failed to send message')
    }

   if (response.ok) {
    setStatusMessage('Message has been sent!')
    setMailerState({
      email: "",
      name: "",
      message: ""
    });
   } 

    
    // .then((res) => res.json())
    // .then(async (data) => {
    //   const resData = await data;
    //   console.log(resData);

    //   if (resData.status === "success") {
    //     setMessage('Message has been sent!')
    //   } else if (resData.status === "fail") {
    //     setMessage('Failed to send message')
    //   }
    // })
    // .then(() => {
    //   setMailerState({
    //     email: "",
    //     name: "",
    //     message: ""
    //   });
    // });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Name"
      onChange={handleChange}
      name="name"
      value={mailerState.name}
      required={true}/>

      <input 
      type="text"
      placeholder="Email"
      onChange={handleChange}
      name="email"
      value={mailerState.email}
      required={true} />

      <textarea 
      placeholder="Message"
      onChange={handleChange}
      name="message"
      value={mailerState.message}
      required={true} />
      
      <button type="submit" className="btn"><span className="btntext">< FaRegPaperPlane />  Send</span></button>
      {statusMessage && <p>{statusMessage}</p>}
      
      
    </form>
  );
};

export default ContactForm;