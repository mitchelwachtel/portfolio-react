import React, {useState} from "react";
import "../../styles/Contact.css";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="content-container">
      <div className="row">
        <div className="col-3">
          <h1 className="page-title">Contact</h1>
        </div>
        <div className="col-9"></div>
      </div>

      <form className="form">
        <input
          className="form-item"
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          className="form-item"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          className="form-item"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          rows="5"
        />
        <button className="form-item submit" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
