/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";

const Nav = () => {
  const [isActiveNav, setIsActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setIsActiveNav("#")}
        className={isActiveNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setIsActiveNav("#about")}
        className={isActiveNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setIsActiveNav("#skills")}
        className={isActiveNav === "#skills" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setIsActiveNav("#services")}
        className={isActiveNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setIsActiveNav("#portfolio")}
        className={isActiveNav === "#portfolio" ? "active" : ""}
      >
        <BiBriefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setIsActiveNav("#contact")}
        className={isActiveNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
