import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  {
    /*useState hook for menu toggle button */
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/*Logo*/}
          <Link to="/" className="navbar-logo">
            BookBees <i class="fa-solid fa-bee"></i>
          </Link>
          {/*Menu Toggle*/}
          <div className="menu-toggle" onClick={handleClick}>
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
              <Link to="/honey" className="nav-links" onClick={closeMobileMenu}>
                Honey
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
