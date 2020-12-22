import React, { Fragment } from "react";
import "./index.css";
import Page3MainImg1 from "./__img/page3MainImg.png";
import Page3MainImg3 from "./__img/page3MainImg3.png";

export default function Page3() {
  return (
    <Fragment>
      <div className="page3-content-recent-projects">
        <img src={Page3MainImg1} alt="recent-projects-img" />
        <div className="page3-content-recent-projects-text">
          <h3>OUR RECENT PROJECTS</h3>
          <h4>Kone Elevators</h4>
          <h6>
            Purchase Order Management System to distinguish. free hour, when our
            power of choice is untrammelled en nothing prevents our{" "}
            <span className="page3-content-viewmore">view more ↪ </span>
          </h6>
        </div>
      </div>
      <div className="page3-content-our-testimonials">
        <h3>OUR TESTIMONIALS</h3>
        <div className="page3-content-our-testimonials-items">
          <div className="page3-content-our-testimonials-item">
            <p>
              <span className="page3-content-italic">Kelly Jones</span> -These
              cases are perfectly free hour, when our power of choice en nothing
              prevents our{" "}
              <span className="page3-content-italic readmore-1">Read more</span>
            </p>
          </div>
          <div className="page3-content-our-testimonials-item">
            <p>
              <span className="page3-content-italic">Kelly Jones</span>
              -These cases are perfectly free hour, when our power of choice en
              nothing prevents our{" "}
              <span className="page3-content-italic readmore-2">Read more</span>
            </p>
          </div>
          <div className="page3-content-our-testimonials-item">
            <p>
              <span className="page3-content-italic">Kelly Jones</span>
              -These cases are perfectly free hour, when our power of choice en
              nothing prevents our{" "}
              <span className="page3-content-italic readmore-3">Read more</span>
            </p>
          </div>
        </div>
      </div>
      <div className="page3-content-recent-articles">
        <h2>OUR RECENT ARTICLES</h2>
        <div className="page3-content-recent-articles-content">
          <div className="page3-content-recent-articles-content-text">
            <h3>Microsoft Competency in Gold Application Integration</h3>
            <p>
              Intergy Consulting is pleased to announce it has recently attained
              its third Microsoft competency, Gold Application Integration an
              endorsement awarded
            </p>
            <p className="page3-content-learnmore">Learn More ➡ </p>
          </div>
          <img src={Page3MainImg3} alt="recent-articles-img" />
        </div>
      </div>
    </Fragment>
  );
}
