import React, { useState } from "react";

import styled from "styled-components";

const Global = styled.div`
  body {
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background: black;
  color: white;
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: blue;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in;
  transform: ${({ nav }) => (nav ? "translateY(-100%)" : "translateY(0)")};

  z-index: 1000;
`;

export default function Navbar() {
  const [nav, showNav] = useState(false);

  return (
    <div>
      <Global>
        <Container>
          <h1>Navbar</h1>
          <button onClick={() => showNav(!nav)}>Menu</button>
        </Container>
        <Menu nav={nav}>
          <button onClick={() => showNav(!nav)}>Close</button>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </Menu>
      </Global>
    </div>
  );
}
