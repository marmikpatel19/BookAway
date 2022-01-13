import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Navbar from "../navbar";
import "./Register.css";
import SignUp from "./SignUp";

function Register() {
  return (
    <>
      <Navbar />
      <h1 className="register-heading">REGISTER</h1>
      <SignUp />
      <Footer className="footer" />
    </>
  );
}

export default Register;
