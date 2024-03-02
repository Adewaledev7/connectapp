import React from "react";
import "./Wallet.css";
import { useParams } from "react-router-dom";
import { datas } from "../data/SearchData";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Form from "../Form/Form";

function Wallet() {
  const { walletId } = useParams();
  const data = datas.find((data) => data.id === walletId);
  const { image, name } = data;

  return (
    <div style={{ backgroundColor: "white" }}>
      {" "}
      <div className="wallet-container">
        <div className="first">
          <h3>Connect A Wallet</h3>
          <p>
            Import your<span>{name}</span>
          </p>
        </div>

        <div className="second">
          <a href="/web">
            <p>
              {" "}
              <AiOutlineArrowLeft
                style={{
                  color: "white",
                  marginRight: "0.5rem",
                }}
              />
              Back
            </p>
          </a>
        </div>
      </div>
      <div className="wallet-header">
        <div className="wallet-image">
          <img src={image} alt="" />
        </div>

        <div className="wallet-name">
          <p>{name}</p>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Wallet;
