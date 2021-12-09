import React from "react";
import { NavLink, Nav, NavIcon, Bars } from "./NavbarElement";

const Navbar = ({toogle}) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={toogle}>
            <p>Menu</p>
            <Bars/>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
