import React from "react";
import "./Webcontent.css";

function Webcontent() {
  return (
    <div className="webcontent">
      <div className="webcontent-container">
        <h3>WebConnect WalletEncryption</h3>

        <p>Open protocol for connecting Wallets to Dapps</p>
      </div>
      <div className="webcontent-image">
        <img src="assets/webb.png" alt="" />
      </div>
      <div className="webcontent-para-con">
        <div className="webcontent-para">
          <h3>What is Is</h3>
          <h3>WebconnectWalletEncryption?</h3>
          <p>
            WebconnectWalletEncryption​ is an open source protocol for
            connecting decentralised applications to mobile wallets with QR code
            scanning or deep linking. A user can interact securely with any Dapp
            from their mobile phone, making wallets a safer choice compared to
            desktop or browser extension wallets.
          </p>
        </div>
        <div className="webcontent-para">
          <h3>How does it work?</h3>
          <p>
            WebconnectWalletEncryption connects web applications to supported
            mobile wallets session is started by a scanning a QR code (desktop)
            or by clicking an application deep link (mobile).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Webcontent;
