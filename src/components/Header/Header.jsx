import React from "react";
import "./header.css";
import Logo from "../../assets/img/Bg-Logo/logo.ico";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="header__top">
        <a href="#1">
          <img src={Logo} alt="Logo J|C" />
        </a>
        <div>
          <BsMoon className="header__theme"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
