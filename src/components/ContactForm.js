import React, { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa"

const ContactForm = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
     await fetch("http://localhost:8081/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState })
    })
    .then((res) => res.json())
    .then(async (data) => {
      const resData = await data;
      console.log(resData);
      
      if (resData.status === "success") {
        return (
          <div className="message">
            <p>Message has been sent!</p>
          </div>
        )
      } else if (resData === "fail") {
        return (
          <div className="message">
            <p>Message failed to send.</p>
          </div>
        )
      }
    })
    .then(() => {
      setMailerState({
        email: "",
        name: "",
        message: ""
      });
    });
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

      
      
    </form>
  );
};

export default ContactForm;