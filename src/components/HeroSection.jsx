import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>BUZZ WITH OUR BEES</h1>
      <p>Join a private bee tour!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn-large"
          pageisPricing={true}
        >
          Pricing
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn-large"
          pageisPricing={false}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
