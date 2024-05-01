import React from "react";
import "./Webheader.css";

function Webheader() {
  return (
    <div>
      <div className="webheader-container">
        <div>
          <h4>Github </h4>
          <h4>Docs</h4>
        </div>

        <div className="company-img">
          <img src="./assets/download.png" alt="imagexx" />{" "}
        </div>
        <div className="second">
          <h4>Wallets </h4>
          <h4> Apps</h4>
          <h4></h4>
        </div>
      </div>
    </div>
  );
}

export default Webheader;
