import {
  Nav,
  NavLink,
  // Bars,
  NavMenu,
  MobileNavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavigationElements";
import "./Navigation.css";
import { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import styled from "styled-components";

const Navigation = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const Bars = styled(menuClicked ? HiOutlineX : HiMenuAlt3)`
    display: none;
    color: #232323;

    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 27px;
      right: 1rem;
      /* transform: translate(-100%, 75%); */
      font-size: 1.6rem;
      cursor: pointer;
    }
  `;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMenuClick = () => {
    console.log(menuClicked);
    setMenuClicked(!menuClicked);
  };

  return (
    <Nav>
      <div onClick={scrollToTop} className="logo">
        <h1>LOGO</h1>
      </div>
      <NavMenu>
        <NavLink smooth to="/#features">
          Features
        </NavLink>
        <NavLink smooth to="/#about-us">
          About Us
        </NavLink>
        <NavLink smooth to="/#products">
          Products
        </NavLink>
        <NavLink smooth to="/#reviews">
          Reviews
        </NavLink>
      </NavMenu>
      <MobileNavMenu left={menuClicked ? "0" : "-100%"}>
        <NavLink smooth to="/#features">
          Features
        </NavLink>
        <NavLink smooth to="/#about-us">
          About Us
        </NavLink>
        <NavLink smooth to="/#products">
          Products
        </NavLink>
        <NavLink smooth to="/#reviews">
          Reviews
        </NavLink>
      </MobileNavMenu>
      <Bars onClick={handleMenuClick} menuClicked={menuClicked} />
      <NavBtn>
        <NavBtnLink to="/#footer">Contact Us</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};
export default Navigation;
