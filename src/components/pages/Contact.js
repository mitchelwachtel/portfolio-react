import React, {useState} from "react";
import "../../styles/Contact.css";
import gmailPic from "../../assets/images/gmail.png";
import proPic from "../../assets/images/pro2.jpg";
// import validate from "../utils/formValidation";
// import useForm from "../utils/useForm";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const validateEmail = () => {
    console.log("hey");
    const re = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    let err = "";
    if (!email) {
      err = "Email address is required";
    } else if (!re.test(email)) {
      err = "Email address is invalid";
    }
    setEmailErr(err);
  };

  const validateUsername = () => {
    console.log("hey2");
    let err = "";
    if (!username) {
      err = "Your name is required!";
    }
    setUsernameErr(err);
  };

  const validateMessage = () => {
    console.log("hey2");
    let err = "";
    if (!message) {
      err = "A message is required!";
    }
    setMessageErr(err);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(
      `Hello ${username}, the back-end of this app is not set up YET. Please send an email directly to mitchel.wachtel@gmail.com to get in touch with Mitchel Wachtel.`
    );
    setUsername("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="content-container container">
      <div className="row">
        <div className="col-6 img-div">
          <img
            className="proPic"
            src={proPic}
            alt="Professional Mitchel Wachtel"
          />
        </div>
        <div className="col-6">
          <div className="contact-header">
            <div className="contact-top">
              <h1 className="page-title">Contact</h1>
              <a
                href="mailto:mitchel.wachtel@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="linkPic"
                  src={gmailPic}
                  alt="link to Mitchel Wachtel's Email"
                />
              </a>
            </div>
            <h2 className="mw-email">mitchel.wachtel@gmail.com</h2>
          </div>

          <form className="form">
            <input
              className="form-item shadow-none"
              value={username}
              name="username"
              onChange={handleInputChange}
              onBlur={validateUsername}
              type="text"
              placeholder="Name"
              required
            />
            <div className="err">{usernameErr}</div>
            <input
              className="form-item shadow-none"
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={validateEmail}
              type="email"
              placeholder="Email"
              required
            />
            <div className="err">{emailErr}</div>
            <textarea
              className="form-item shadow-none"
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={validateMessage}
              type="text"
              placeholder="Message"
              rows="5"
              required
            />
            <div className="err">{messageErr}</div>
            <button
              className="form-item submit "
              type="button"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
