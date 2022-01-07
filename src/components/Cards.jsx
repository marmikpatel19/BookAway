import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/*These is where we're passing in the card items*/}
            {/*We're passing in props for individual card values, personalizing each card component */}
            <CardItem
              src="images/golden-honey.jpg"
              text="Golden Honey"
              label="In stock"
              path="/pricing"
            />
            <CardItem
              src="images/marsh-honey.jpg"
              text="Marsh Honey"
              label="In stock"
              path="/pricing"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/raspberryblossom-honey.jpg"
              text="Raspberry Blossom Honey"
              label="Sold out"
              path="/pricing"
            />
            <CardItem
              src="images/linden-honey.jpg"
              text="Liden Honey"
              label="In stock"
              path="/pricing"
            />
            <CardItem
              src="images/blueberryblossom-honey.jpg"
              text="Blueberry Blossom Honey"
              label="Sold out"
              path="/pricing"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
