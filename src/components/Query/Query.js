import React from "react";
import "./Query.css";

function Query() {
  return (
    <div className="query">
      <h3>SELECT YOUR QUERY</h3>
      <div className="query-container">
        <button>
          {" "}
          <a href="/web">Wallet Authentication</a>
        </button>
        <button>
          <a href="/web">Wallet Connect</a>
        </button>
        <button>
          <a href="/web">Wallet Sychronization</a>
        </button>
        <button>
          <a href="/web">Wallet Restore</a>
        </button>
      </div>
    </div>
  );
}

export default Query;
