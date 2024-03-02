import React from "react";
import "./Cdk.css";
import { data } from "../data/CdkData";

function Cdk() {
  return (
    <div className="cdk">
      <div className="cdk-container">
        <h1>The Blockchain SDK</h1>

        <p>
          Built for developers, the WalletConnect web, android, and iOS
          <br />
          SDK’s power millions of web3 connections every day.
        </p>
      </div>
      <div className="cdk-image">
        <img src="assets/sdk.png" alt="" />
      </div>
      <div className="cdk-para-con">
        {data.map((el, index) => (
          <div key={index} className="cdk-para">
            <h2>
              {" "}
              {el.icon}
              {el.text}
            </h2>
            <p>{el.parag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cdk;
