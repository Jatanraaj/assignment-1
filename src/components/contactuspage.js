import React, { useReducer, useState } from "react";
import axios from "axios";
import "./contact.css";

const ContactUs = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [localstate,setLocalState]=useReducer((prevState,newState)=>({...prevState,...newState}),
  {
    name:"",
    email:"",
    message:"",
    isSubmitted:false,
    isSubmitting:false,
    error:[],

  })
  const {name,email,message,isSubmitted,isSubmitting}=localstate;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    setLocalState({isSubmitting:true})
    setError(null);
    try {
      await axios.post("http://localhost:3000/send-message", {
        name,
        email,
        message,
      });
      // setIsSubmitted(true);
      setLocalState({isSubmitted:true})

    } catch (error) {
      setError("An error occurred while sending the message.");
    }
    // setIsSubmitting(false);
    setLocalState({isSubmitting:false})

  };
const handleChange=(e)=>{
  const{name,value}=e.target;
  setLocalState({[name]:value})
}
  return (
    <div className={`container py-5 contactus ${isSubmitting && "blurred"}`}>
      <h1 className="text-center mb-5">
        <span id="prodhead">Contact Us</span>
      </h1>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
                value={name}
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                required
                value={email}
                name="email"
                onChange={(e) => handleChange(e)}
                style={{marginTop:'30px'}}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Message"
                required
                value={message}
                name="message"
                onChange={(e) => handleChange(e)}
                style={{marginTop:'30px'}}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary contactbut" style={{marginTop:'20px'}}>
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Address</h5>
              <p className="card-text">
                1234 Main Street, Suite 200
                <br />
                Anytown, USA 12345
              </p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Phone Number</h5>
              <p className="card-text">+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Email Address</h5>
              <p className="card-text">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
      {isSubmitting && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {isSubmitted && (
        <div className="submission-message">
          <h4 style={{float:'left', color:'green'}}>Message has been submitted!</h4>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
