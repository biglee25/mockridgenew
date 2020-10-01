import React from "react";

import styled from "styled-components";
import Navbar from "../components/navbar";

const Global = styled.div`
  body {
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  background: grey;
  color: white;
  padding: 2rem 1.5rem;
  text-align: center;
  height: 100vh;

  h1 {
    font-family: "Anton";
    text-transform: uppercase;
  }
`;

const Text = styled.p`
  font-family: "Roboto";
`;

export default function Home() {
  return (
    <div>
      <Global>
        <Navbar />
        <Container>
          <h1>Hello Gatsby!</h1>
          <Text>
            <p>What a world.</p>
          </Text>
        </Container>
      </Global>
    </div>
  );
}
