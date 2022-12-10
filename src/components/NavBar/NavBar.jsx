import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurguerButton from "../BurguerButton/BurguerButton";
import { useState } from "react";

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navBar">
      <div className="navBar__logo">
        <Link to="/">Virutal Card</Link>
      </div>
      <div className="navBar__items">
        <div className={`navBar__items__links ${clicked ? "active" : ""}`}>
          <Link to="/">Inicio</Link>
          <Link to="/">Nosotros</Link>
          <Link to="/">Planes</Link>
          <Link to="/">Contacto</Link>
          <Link to="/">
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </Link>
        </div>
        <div className="navBar__items__burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`navBar_Bg ${clicked ? "Bg_active" : ""}`}></div>
      </div>
    </div>
  );
}

export default NavBar;
