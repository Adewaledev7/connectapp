import React from "react";
import "./Article.css";
import { TypeAnimation } from "react-type-animation";

function Article() {
  return (
    <div className="article">
      <div className="article-container">
        <h1>
          Any{" "}
          <span>
            {" "}
            <TypeAnimation
              sequence={["Wallet", 1000, " Dapp", 1000, "Chain", 1000]}
              speed={100}
              repeat={Infinity}
            />
          </span>{" "}
        </h1>

        <p>
          WalletConnect is the web3 standard to connect blockchain
          <br />
          wallets to dapps
        </p>
        <div className="btn">
          {" "}
          <button>
            {" "}
            <a href="/web">Get Started</a>
          </button>
        </div>
      </div>
      <div className="article-image">
        <img src="assets/hero.png" alt="" />
      </div>
    </div>
  );
}

export default Article;
