import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  pageisPricing,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  {
    /*If a button does not have a style, then by default it gets the btn-primary style */
  }
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={pageisPricing ? "/pricing" : "/register"} className="btn-mobile">
      {/*The children are what gets displayed--we can make the children whatever we want */}
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
