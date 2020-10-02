import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = styled.div`
  max-width: 100%;
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
`;

const Hamburger = styled.button`
  z-index: 5000;
  background: black;
  border: 0;
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 100%;
  min-width: 70%;
  height: 100%;
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-out;
  transform: ${({ nav }) => (nav ? "translateX(100%)" : "translateX(0)")};
  z-index: 1;

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

export default function Nav() {
  const [nav, showNav] = useState(false);

  return (
    <div>
      <Navbar>
        <img src={logo} width="70%"></img>
        <Hamburger>
          <button onClick={() => showNav(!nav)}>
            <FontAwesomeIcon icon={faBars} size="3x" className="icon" />
          </button>
        </Hamburger>
      </Navbar>
      <Menu nav={nav}>
        {/*           <button onClick={() => showNav(!nav)}>Close</button>
         */}{" "}
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </Menu>
    </div>
  );
}
