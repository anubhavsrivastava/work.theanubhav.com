import React from "react";
import SEO from "../components/seo";
import hero from "../images/self.jpg";
import "../static/css/profile.css";
import "../static/css/custom.scss";
import { Container, Row, Col } from "reactstrap";
const SecondPage = () => (
  <>
    <SEO title="Home" />
    <Container>
      <Row className="main-content">
        <Col xs="8">
          <h1 className="huge">Hello,</h1>
          <div>
            <h1 className="bold huge">World.</h1>
          </div>
          <div className="subheading">
            <p>
              👋 Hi! this is <strong>Anubhav</strong>, I am here to tell you and
              the world about my work and what I do.
            </p>
          </div>
        </Col>
        <Col xs="4">
          <img src={hero} />
        </Col>
      </Row>
    </Container>

    {/* <div className="navbar w-nav">
      <a
        href="http://uncommon-template.webflow.io/"
        className="brand w-nav-brand w--current"
      >
        <img
          src="./Portfolio template - Webflow HTML website template_files/5b2a8936920a798c07639957_logo.png"
          width="188"
          alt=""
        />
      </a>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <a
          href="http://uncommon-template.webflow.io/"
          className="link-nav w-nav-link w--current"
        >
          Home
        </a>
        <a
          href="http://uncommon-template.webflow.io/about"
          className="link-nav w-nav-link"
        >
          About
        </a>
        <a
          href="http://uncommon-template.webflow.io/contact"
          className="link-nav w-nav-link"
        >
          Contact
        </a>
      </nav>
      <div className="w-nav-button">
        <div className="w-icon-nav-menu"></div>
      </div>
      <div className="w-nav-overlay" data-wf-ignore=""></div>
    </div> */}
    {/* <div className="hero">
      <div className="wrapper-title">
        <div>
          <div className="_w-h1">
            <h1 className="main-h1 home">Hello,</h1>
          </div>
          <div className="_w-h1">
            <h1 className="main-h1 bold home">World.</h1>
          </div>
          <div className="home-subhead">
            <p>
              👋 Hi! this is s, I am here to tell you and the world about my
              work and what I do.
            </p>
          </div>
        </div>
        <div>
          <img src={hero} width="40%" />
        </div>
      </div>
    </div> */}
    {/* <div className="section main">
      <div className="w-dyn-list">
        <div className="w-dyn-items">
          <div className="wrapper w-dyn-item">
            <div
              styles='background-image:url("https://assets.website-files.com/5b2a8f45ee96a605bc64fa2a/5b2aa797cb4b9f560e6f9c55_iGotchu.jpg")'
              className="column background-image"
            >
              <div className="column _100vh">
                <div className="project-info">
                  <div className="number">
                    <h2 className="number zero">01</h2>
                  </div>
                  <h2 className="project-title">Sinder</h2>
                  <p className="project-description">
                    A dating app — for single socks.
                  </p>
                  <a
                    href="http://uncommon-template.webflow.io/work/looking-for-life-beyond-earth"
                    className="project-link"
                  >
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper w-dyn-item">
            <div
              styles='background-image:url("https://assets.website-files.com/5b2a8f45ee96a605bc64fa2a/5b2aa6c65554a74ae32b4ee1_iGotchu%20_blankhand.jpeg")'
              className="column background-image"
            >
              <div className="column _100vh">
                <div className="project-info">
                  <div className="number">
                    <h2 className="number zero">02</h2>
                  </div>
                  <h2 className="project-title">iGotchu</h2>
                  <p className="project-description">
                    An app that just gets you.
                  </p>
                  <a
                    href="http://uncommon-template.webflow.io/work/igotchu"
                    className="project-link"
                  >
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper w-dyn-item">
            <div
              styles='background-image:url("https://assets.website-files.com/5b2a8f45ee96a605bc64fa2a/5b2aaba0f57da510851829fc_Sinder3.png")'
              className="column background-image"
            >
              <div className="column _100vh">
                <div className="project-info">
                  <div className="number">
                    <h2 className="number zero">03</h2>
                  </div>
                  <h2 className="project-title">
                    Looking for Life Beyond Earth
                  </h2>
                  <p className="project-description">
                    Looking for Life Beyond Earth is a project whose description
                    would be wholly redundant.
                  </p>
                  <a
                    href="http://uncommon-template.webflow.io/work/looking-for-life-beyond-earth-2"
                    className="project-link"
                  >
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-block-27">
        <div className="div-block-26">
          <img
            src="./Portfolio template - Webflow HTML website template_files/5b2a8936920a798c07639957_logo.png"
            width="147"
            alt=""
            className="logo-footer"
          />
          <div className="wrapper-list-links">
            <a
              href="http://uncommon-template.webflow.io/#"
              className="footer-links"
            >
              Instagram
            </a>
            <a
              href="http://uncommon-template.webflow.io/#"
              className="footer-links"
            >
              Twitter
            </a>
            <a
              href="http://uncommon-template.webflow.io/#"
              className="footer-links"
            >
              Linkedin
            </a>
            <a
              href="http://uncommon-template.webflow.io/#"
              className="footer-links"
            >
              Behance
            </a>
            <a
              href="http://uncommon-template.webflow.io/#"
              className="footer-links"
            >
              Dribbble
            </a>
            <a
              href="http://uncommon-template.webflow.io/image-license-image"
              className="footer-links"
            >
              Image License Info
            </a>
            <a href="http://webflow.com/" className="footer-links">
              Powered by Webflow
            </a>
          </div>
          <p className="small-p">
            This section is a Symbol. <br />
            Edit it once, and watch it update across your site.
            <br />
            Like freaking magic<em>. </em>
          </p>
        </div>
      </div>
    </div> */}
  </>
);

export default SecondPage;
