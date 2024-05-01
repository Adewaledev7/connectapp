import React, { useState } from "react";
import "./Search.css";
import { datas } from "../data/SearchData";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="search">
      <div className="search-container">
        <h2>Connect your wallet</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Find your wallet"
            className="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Search</button>
        </div>
        <ul>
          {datas
            .filter((data) => data.name.toLowerCase().includes(query))
            .map((data) => (
              <a key={data.id} href={`/web/${data.id}`}>
                <button>
                  <img src={data.image} alt="" />
                  <h2>{data.name}</h2>
                </button>
              </a>
            ))}
        </ul>
      </div>
      <p>
        Open an app submission issue on <span>GitHub</span> to add your app here
      </p>
      <p>Discord Twitter GitHub</p>
    </div>
  );
}

export default Search;
