import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiAstronautHelmet } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "INICIO",
    to: "/",
  },
  {
    label: "SOBRE",
    to: "/about",
  },
  {
    label: "HABILIDADES",
    to: "/skills",
  },
  {
    label: "CURRÍCULO",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <GiAstronautHelmet size={50} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
