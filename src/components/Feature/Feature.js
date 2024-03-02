import React from "react";
import "./Feature.css";
import { data } from "../data/FeatureData";

function Feature() {
  return (
    <div>
      <div className="feature">
        <div className="feature-header">
          <h2>Top Features</h2>
          <h4>
            Rebuilt from the ground up, v2 was created with features for the
            next generation of blockchain applications.
          </h4>
        </div>
        <div className="feature-container">
          {" "}
          {data.map((el, index) => (
            <div key={index}>
              <div>
                <div className="image">
                  <img src={el.img} alt="" />
                </div>
                <h4>{el.title}</h4>
                <p>{el.text}</p>
              </div>
            </div>
          ))}
        </div>{" "}
        <div></div>
      </div>
    </div>
  );
}

export default Feature;
