import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-newsletter">
        <p className="footer-newsletter-heading">
          Join our un-BEE-lievable newsletter to receive updates about our
          beehives
        </p>
        <div>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <input type="submit" value="Submit" className="footer-submit-btn" />
          </form>
        </div>
      </section>
      <section className="social">
        <div className="social-wrap">
          <small className="BookBees-copyright">BookBees © 2022</small>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" className="social-icon-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" className="social-icon-link">
              <i class="fab fa-twitter" />
              <i />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
