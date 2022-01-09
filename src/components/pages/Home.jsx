import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Navbar from "../navbar";
import Cards from "../Cards";
import Footer from "../Footer";

function Hemo() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Hemo;
