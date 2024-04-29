import React, { useState } from "react";
import "./ContactUs.css";
const ContactUs = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const send = async (e) => {
    const { Name, Email, Subject, Message } = userData;
    e.preventDefault();
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Email, Subject, Message }),
    };
    const res = await fetch(
      "https://foodzing-fb25d-default-rtdb.firebaseio.com/Messages.json",
      option
    );
  };
  return (
    <div className="container">
      <hr />
      <div className="contact_box" id="contactus">
        <h1 className="contact_heading">Contact Us</h1>
        <form action="" method="POST">
          <input
            type="text"
            name="Name"
            value={userData.Name}
            placeholder="Enter Your Full Name"
            autoComplete="off"
            onChange={data}
          />
          <input
            type="email"
            name="Email"
            value={userData.Email}
            autoComplete="off"
            onChange={data}
            placeholder="Enter Your Email Address"
          />
          <input
            type="text"
            name="Subject"
            autoComplete="off"
            onChange={data}
            value={userData.Subject}
            placeholder="Subject of Message"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            value={userData.Message}
            id=""
            cols="30"
            rows="10"
            autoComplete="off"
            onChange={data}
          ></textarea>
          <button onClick={send}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
