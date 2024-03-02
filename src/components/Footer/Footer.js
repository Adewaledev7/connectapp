import React from "react";
import "./Footer.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-header">
          <div className="company-name">
            <img src="./assets/download.png" alt="imagexx" />{" "}
            <h2>WalletConnect</h2>
          </div>
          <div className="social">
            <div className="icon">
              <AiFillGithub style={{ height: "30px", width: "30px" }} />
            </div>
            <div className="icon">
              {" "}
              <AiFillTwitterCircle style={{ height: "30px", width: "30px" }} />
            </div>
            <div className="icon">
              {" "}
              <BiLogoDiscord style={{ height: "30px", width: "30px" }} />
            </div>
          </div>

          <h4>© 2023 WalletConnect Inc.</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
