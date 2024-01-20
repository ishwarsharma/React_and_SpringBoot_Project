import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="row">
      <footer className="bg-dark text-light py-2">
        <div className="container d-flex justify-content-between">
          <div className="col-md-5 text-center">
            <p>About Us:</p>
            <p>
              We are a company dedicated to creating amazing websites and web
              applications. Contact us today to learn more.
            </p>
          </div>
          <div className="col-sm-3 col-md-2">
            <p>Follow Us:</p>
            <a
              href="https://www.facebook.com"
              className="social-icon"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.facebook.com"
              className="social-icon"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.facebook.com"
              className="social-icon"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="col-md-2">
            <p>Follow Us:</p>
            <a
              href="https://www.facebook.com"
              className="social-icon"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.facebook.com"
              className="social-icon"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.facebook.com"
              className="social-icon"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
