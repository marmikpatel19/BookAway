import React from "react";
import Card from "./Card";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Try some of our 100% pure unpasteurized honey</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {/*Props for individual card values are passed in, personalizing each card component */}
            <Card
              src="images/golden-honey.jpg"
              text="Golden Honey"
              label="In stock"
              path="/pricing"
              alt="Image of Honey"
            />
            <Card
              src="images/linden-honey.jpg"
              text="Linden Honey"
              label="In stock"
              path="/pricing"
              alt="Image of Honey"
            />
          </ul>
          <ul className="cards-items">
            <Card
              src="images/marsh-honey.jpg"
              text="Marsh Honey"
              label="In stock"
              path="/pricing"
              alt="Image of Honey"
            />
            <Card
              src="images/blueberryblossom-honey.jpg"
              text="Blueberry Blossom Honey"
              label="Sold out"
              path="/pricing"
              alt="Image of Honey"
            />
            <Card
              src="images/raspberryblossom-honey.jpg"
              text="Raspberry Blossom Honey"
              label="Sold out"
              path="/pricing"
              alt="Image of Honey"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
