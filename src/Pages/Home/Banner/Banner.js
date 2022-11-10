import React from "react";
import logo from "../../../images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
      <div className="banner">
        <div className="bannerText">
          <h1>Helping make your financial dreams come true</h1>
          <p>As your Small Business Accountant, I could potentially minimize your tax burden by $10k – or as much as $1M – and can help to grow your profits.</p>
          <div className="buttonDiv">
            <button>Get In Touch</button>
          </div>
        </div>
        <div className="bannerImg">
          <img src={logo} alt="" />
        </div>
      </div>
  );
};

export default Banner;
