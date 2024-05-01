import React from "react";
import "./Simple.css";
import { data } from "../data/SimpleData";
import { wall } from "../data/SimpleData2";

function Simple() {
  return (
    <div>
      {" "}
      {data.map((el, index) => (
        <div className="simple" key={index}>
          <div className="simple-container">
            <h2>{el.title}</h2>
            <p>{el.text}</p>
            <h2>{el.head}</h2>
            <div className="image">
              <img src={el.img} alt="" />
            </div>
          </div>
        </div>
      ))}
      {wall.map((el, index) => (
        <div className="wall" key={index}>
          <div className="wall-container">
            <h2>{el.title}</h2>
            <p>{el.text}</p>
            <h2>{el.head}</h2>
            <div className="wall-img">
              <img src={el.img} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Simple;
