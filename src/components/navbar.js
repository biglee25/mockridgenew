import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = styled.div`
  overflow-x: hidden;
  height: auto;
  top: 0;
  left: 0;
  background: black;
  color: white;
  padding: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 60%;
  overflow-x: hidden;
  height: 100%;
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-out;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  z-index: 2;

  ul {
    text-transform: uppercase;

    li {
      text-decoration: none;
      list-style: none;
      font-family: Anton;
      font-size: 2rem;
      margin-top: 2rem;
      text-align: center;
    }
  }
`;

const Icon = styled.div`
  position: relative;
  top: 50%;
  right: 0;
  z-index: 10000;
`;

export default function Nav() {
  const [nav, showNav] = useState(false);

  return (
    <div>
      <Navbar>
        <img src={logo} width="50%" alt="logo"></img>
        <a onClick={() => showNav(!nav)}>
          <Icon>
            <Hamburger direction="right" color="#fff" />
          </Icon>
        </a>
        <Menu nav={nav}>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </Menu>
      </Navbar>
    </div>
  );
}
