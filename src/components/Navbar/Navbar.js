import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../data/NavbarData";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") {
      navigate(id);
    }

    navigate(to);
    setShow(false);
  };

  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="./assets/download.png" />
        </a>
        <p> WalletConnect</p>
      </div>
      <div className="tab" onClick={handleClick}>
        {show ? <FaTimes /> : <CgMenuRight />}
      </div>
      <nav>
        {data.map((el, index) => (
          <ul key={index} className={show ? "open" : ""}>
            <li>
              <Link
                smooth
                to={el.id}
                className="link"
                onClick={() => closeMobileMenu(el.to, el.id)}
              >
                {el.text}
              </Link>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
