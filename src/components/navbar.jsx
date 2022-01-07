import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Button } from "./Button.jsx";

function Navbar() {
  {
    /*useState hook for menu toggle button */
  }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

          {/*Menu Toggle*/}
          <div className="menu-icon" onClick={handleClick}>
            {/* If have an if statement where if the menu is clicked, then the icon is fas fa-times (x from FontAwesome
                ) and otherwise fas fa-bars (hamburger from FontAwesome)*/}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/*When the menu is clicked, it become "active". if it is clicked again (the else in the statement), then it comes closed*/}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/beehives"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Beehives
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pricing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-links-mobile"
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
