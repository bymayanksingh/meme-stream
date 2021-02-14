import React from "react";

import { Container } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Section from "./Section";

const Footer = (props) => {
  return (
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        className={"footer"}
      >
        <Container>
          <div style={{display: "flex", "flexWrap": "wrap"}} className="myClass">
            <div className="brand left">
              <a href="/">
                <img src={props.logo} alt="Memestream" />
              </a>
            </div>
            <div className="links right">
              <a href="https://codemonk08.netlify.com/">About</a>
              <a
                target="_blank"
                href="https://codemonk08.netlify.app/blog/"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
            <div className="social right">
              <a
                href="https://twitter.com/codemonk08_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/code-monk08/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <i className="fa fa-linkedin"></i>
                </span>
              </a>

              <a
                href="https://github.com/code-monk08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
              </a>
            </div>
            <div className="copyright left">{props.copyright}</div>
          </div>
        </Container>
      </Section>
  );
};

export default Footer;
