import React from "react";
import Logo from './logo';
import "../Header/header.css"
import Sign from './sign';

export function Header(){
        const navPages = ["Features", "Pricing", "Resources"];
        const navLinks = navPages.map((navPage) => {
          return <a className="links" href={"/" + navPage}>{navPage}</a>;
        });
        return <nav>
      <Logo />
            {navLinks}
      <Sign/>
            </nav>;
      
}

export default Header;







