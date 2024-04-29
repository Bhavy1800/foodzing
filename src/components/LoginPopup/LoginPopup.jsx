import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { app } from "../Firebase/firebaseConfig";
import { auth } from "../Firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Sign Up") {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account Created");
      } else {
        await signInWithEmailAndPassword(auth, email, password);

        alert("Logged In");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <>{/* No name input for Login */}</>
          ) : (
            <input type="text" placeholder="Your Name" name="" id="" required />
          )}

          <input
            type="email"
            name=""
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            id=""
            required
          />
          <input
            type="password"
            name=""
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id=""
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, i agree to the terms of use & Privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
