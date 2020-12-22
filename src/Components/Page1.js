import React, { Fragment, useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import Logo from "./__img/headingLogo.png";
import headerImg1 from "./__img/headerImg1.png";
import headerContentImg from "./__img/headerContentImg.png";
import headerBlurredImg from "./__img/headerblurredImg.png";
import menuImg from "./__img/menu.png";
import "./index.css";

export default function Page1() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Fragment>
      <div className="page1-header">
        <div className="page1-heading-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="page1-menuImg" onClick={showModal}>
          <img src={menuImg} alt="menu-img" />
        </div>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <ul class="page1-modal">
            <li>HOME</li>
            <li>CAPABILITIES</li>
            <li>OUR WORK</li>
            <li>ABOUT</li>
            <li>ARTICLES</li>
            <li>CONTACT</li>
          </ul>
        </Modal>
        <div className="page1-header-nav">
          <ul>
            <li>HOME</li>
            <li>CAPABILITIES</li>
            <li>OUR WORK</li>
            <li>ABOUT</li>
            <li>ARTICLES</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="page1-header-phone-number">
          <h4>1300 739 117</h4>
        </div>
      </div>
      <div className="page1-content">
        <div className="page1-content-container">
          <div className="page1-content-heading">
            <h2>Custom Software Solutions Built for Your Buisness</h2>
            <p>Partner with intergy to reach your buisness goals faster</p>
          </div>
          <div className="page1-header-img">
            <img
              className="page1-header-img1"
              src={headerImg1}
              alt="header-img"
            />
            <img
              className="page1-header-img2"
              src={headerBlurredImg}
              alt="header-img"
            />
          </div>
        </div>
        <div className="page1-header-img3-container">
          <img
            className="page1-header-img3"
            src={headerContentImg}
            alt="header-img"
          />
        </div>
        <div className="page1-content-text">
          <p className="page1-content-main">
            <span className="page1-content-main-heading">Innovate</span> -
            Create new products and processes
          </p>
          <p className="page1-content-main">
            <span className="page1-content-main-heading">Automate</span> -
            Streamline and integrate buisness processes
          </p>
          <p className="page1-content-main">
            <span className="page1-content-main-heading">Captivate</span> -
            Engage your auidence with web and mobile applications
          </p>
          <div className="page1-content-button">
            <h4>TELL US ABOUT YOUR PROJECT</h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
