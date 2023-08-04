import { useState } from "react";
import BurguerButton from "./BurguerButton";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="">
      <div className="navContainer contenedor">
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <h3 className="h3">Natural pic</h3>
        <div className={`links ${clicked ? "active" : ""}`}>
          <NavLink to="/" onClick={handleClick} className="">
            HOME
          </NavLink>
          <NavLink to="/favorites" onClick={handleClick} className="">
            Favorites
          </NavLink>
        </div>
      </div>
      <div className={`inicial ${clicked ? "active" : ""}`}></div>
    </nav>
  );
};
export default Navbar;
