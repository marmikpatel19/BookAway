import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Button } from "./Button.jsx";

function Navbar() {
  {
    /*useState hook for menu toggle button */
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  {
    /*useState hook for Register button*/
  }
  const [button, setButton] = useState(true);

  {
    /* Used below to close the menu in mobile view when user clicks an item*/
  }
  const closeMobileMenu = () => setClick(false);

  {
    /*Register button*/
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/*Logo*/}
          <div className="logo-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              BookBees
            </Link>
            <img
              src={require("../logo.png")}
              alt="BookBees logo"
              className="logo"
              width="35px"
            />
          </div>

          {/*Navbar Toggle*/}
          <div className="navbar-toggle" onClick={handleClick}>
            {/* Ternary operatory where a click on the toggle corresponds to the "x" or "hamburger" of the menu. The outout of
            the ternary operator is assigned to the className so that the corresponding logo can appear (FontAwesome format)*/}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/*Ternary operator for the status of the menu*/}
          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item">
              <Link to="/" className="navbar-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/beehives"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Our Beehives
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/pricing"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/register"
                className="navbar-register-mobile"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle="btn--outline">Register</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
