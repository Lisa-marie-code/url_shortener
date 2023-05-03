import React from "react";
import Logo from "./logo";
import "../Header/header.css";
import Sign from "./sign";
import Menu from "../Header/hamburger";
import menu from "../../images/icons8-menu-24.png";

export function Header() {
  const navPages = ["Features", "Pricing", "Resources"];
  const navLinks = navPages.map((navPage) => {
    return (
      <a className="links" href={"/" + navPage}>
        {navPage}
      </a>
    );
  });
  
  return (
    <nav>
      <Logo />
      {navLinks}
      <Menu className = "hamburger" img={menu} />
      <Sign />
    </nav>
  );
}

export default Header;
