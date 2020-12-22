import React from "react";
import page2RocketImg from "./__img/page2RocketImg.png";
import page2ServicesImg from "./__img/page2ServicesImg.png";
import "./index.css";

export default function Page2() {
  return (
    <div className="page2-content">
      <div className="page2-content-1">
        <div className="page2-content-img">
          <img src={page2RocketImg} alt="content-img" />
        </div>
        <div className="page2-content-text">
          <h6>
            Founded in 2004, Intergy Consulting is a Sydney-based Software
            Development Company in Australia providing decades of experience in
            enterprise software application development projects for growth
          </h6>
          <h6 className="page2-content-text-2">
            If you are looking for high quality custom eb development, digital
            transformation, mobile app development or staff augumentation
            services, intergy's skilled softare developers are here to help.
          </h6>
        </div>
      </div>
      <div className="page2-content-2">
        <h3>OUR SERVICES</h3>
        <div className="page2-content-2-items">
          <div className="page2-content-2-item-1">
            <div className="page2-content-2-item">
              <h4>CUSTOM SOFTWARE</h4>
              <p>Functional, sleek and intuitive web applications</p>
            </div>
            <div className="page2-content-2-item">
              <h4>DIGITAL TRANSFORMATION</h4>
              <p>Functional, sleek and intuitive web applications</p>
            </div>
            <div className="page2-content-2-item">
              <h4>CLOUD SERVICES</h4>
              <p>Functional, sleek and intuitive web applications</p>
            </div>
            <div className="page2-content-2-item">
              <h4>SOFTWARE AUDITING</h4>
              <p>Functional, sleek and intuitive web applications</p>
            </div>
          </div>
          <img className="page2-content-main-img" src={page2ServicesImg} alt="services-img" />
          <div className="page2-content-2-item-2">
            <div className="page2-content-2-item">
              <h4>WEB APP</h4>
              <p>Functional, sleek and intuitive web applications</p>
            </div>
            <div className="page2-content-2-item">
              <h4>MOBILE APP</h4>
              <p>Functional, sleek and intuitive web applications</p>
            </div>
            <div className="page2-content-2-item">
              <h4>SUPPORT & MAINTENENCE</h4>
              <p>Functional, sleek and intuitive web applications</p>
            </div>
            <div className="page2-content-2-item">
              <h4>IT STAFF AUGUMENTATION</h4>
              <p>Functional, sleek and intuitive web applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
