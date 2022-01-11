import React from "react";
import "../../App.css";
import Card from "../Card";
import Footer from "../Footer";
import Navbar from "../navbar";
import "../Cards.css";
import "./Beehives.css";

function Products() {
  return (
    <>
      <Navbar />
      <h1 className="beehives-heading">BEEHIVES</h1>

      <div className="cards">
        <h1>Take a tour at one of our beehive locations!</h1>
        <div className="cards-container">
          <div className="cards-wrapper">
            <ul className="cards-items">
              <Card
                src="images/lincoln.jpg"
                text="Lincoln, Nebraska. Mon-Fri, 9am-4pm."
                label="Open Now"
                path="/register"
                alt="A photo of the Lincoln beehive"
              />
              <Card
                src="images/calgary.jpg"
                text="Calgary, Alberta. Mon-Fri, 10am-4pm."
                label="Closed for the season"
                path="/register"
                alt="A photo of the Calgary beehive"
              />
            </ul>
            <ul className="cards-items">
              <Card
                src="images/burnaby.jpg"
                text="Burnaby, British Columbia. Tues-Fri, 9am-330pm"
                label="Closed for the season"
                path="/register"
                alt="A photo of the Burnaby beehive"
              />
              <Card
                src="images/ottawa.jpg"
                text="Ottawa, Ontario. Mon-Fri, 10am-3pm."
                label="Closed for the season"
                path="/register"
                alt="A photo of the Ottawa beehive"
              />
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
