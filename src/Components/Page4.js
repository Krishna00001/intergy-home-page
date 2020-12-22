import React, { Fragment } from "react";
import Page4MainImg from "./__img/page4MainImg1.png";
import "./index.css";

export default function Page4() {
  return (
    <Fragment>
      <div className="page4-content-1">
        <img src={Page4MainImg} alt="page4-img" />
        <div className="page4-content-1-text">
          <h2>TELL US ABOUT YOUR PROJECT</h2>
          <h6>
            Call us on 1300 739 117 or complete the form to book your free
            consultation and discover how we can add value to your buisness
            software solutions
          </h6>
          <div className="page4-content-1-text-bottom">
            <h7>smart007@gmail.com</h7>
            <div className="page4-content-1-button">
              <h4>SEND REQUEST</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="page4-content-2">
        <h2>TELL US ABOUT YOUR PROJECT</h2>
        <h5>
          Ebook: How Automation is Set to Transform Australian Buisness{" "}
        </h5>{" "}
        <h5>
          {" "}
          10 - Step Checklist For Getting Your Software Product To Market
        </h5>{" "}
        <h5> White Paper: How to Be an Innovator In Your Organisation</h5>
        <h5>
          {" "}
          White Paper: Growing Your Buisness Through Improved Buisness Reporting
        </h5>
        <h5>
          {" "}
          Ebook: How to Acheive Competitive Advantage Through Your Software
          Systems
        </h5>
        <div className="page4-content-2-nav">
          <div className="page4-content-2-nav-item">
            <ul>
              <li>Services</li>
              <li>Custom Software Development</li>
              <li>Mobile Application Development</li>
              <li>Software Support</li>
              <li>Solution Consulting</li>
              <li>Software Audit</li>
              <li>Software As a Service (SaaS)</li>
            </ul>
          </div>
          <div className="page4-content-2-nav-item">
            <ul>
              <li>Technologies</li>
              <li>PHP Development</li>
              <li>.NET Development</li>
              <li>Cross Platform Mobile Development</li>
              <li>eCommerce</li>
              <li>Javascript Development</li>
              <li>Microsoft Power BI</li>
            </ul>
          </div>
          <div className="page4-content-2-nav-item">
            <ul>
              <li>follow us on</li>
              <li>
                <h3>Facebook</h3>
              </li>
              <li>
                <h3>Linkedin</h3>
              </li>
              <li>
                <h3>Twitter</h3>
              </li>
              <li>
                <h3>Google+</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page4-footer">
        <ul>
          <li>
            © 2020, Intergy Consulting - Custom Software Development Company
          </li>
          <li>Sydney Coimbatore</li>
          <li>1300 739 117</li>
          <li>info@intergy.com.au</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </Fragment>
  );
}
