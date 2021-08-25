import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0rem calc((100vw - 1440px) / 2);
  z-index: 999;
  margin: 0;
  background-color: white;
`;

export const NavLink = styled(Link)`
  color: #232323;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${(props) => (!props.primary ? "0 1.2rem" : "0")};
  height: 100%;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    // change colors of the next two lines
    color: ${(props) => (!props.primary ? "blue" : "")};
    background-color: ${(props) => (!props.primary ? "gray" : "")};
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;

    &:hover {
      // change color
      background-color: gray;
      color: white;
    }
  }
`;

export const Bars = styled(FaBars)`
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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -1rem;

  // 2nd Nav
  /* margin-right: 24px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    // change color
    background-color: gray;
    height: 600%;
    position: absolute;
    top: 80px;
    left: ${(props) => props.left};
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 99rem;
  // change color
  background: blue;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  // 2nd Nav
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    // change colors
    background: gray;
    color: black;
  }
`;
