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
    const response = await fetch("http://localhost:8080/send", {
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
          <div className="success">
            <p>Message has been sent!</p>
          </div>
        )
      } else if (resData === "fail") {
        return (
          <div className="fail">
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
      value={mailerState.name} />

      <input 
      type="text"
      placeholder="Email"
      onChange={handleChange}
      name="email"
      value={mailerState.email} />

      <textarea 
      placeholder="Message"
      onChange={handleChange}
      name="message"
      value={mailerState.message} />
      
      <button type="submit" className="btn"><span className="btntext">< FaRegPaperPlane />  Send</span></button>
      
    </form>
  );
};

export default ContactForm;