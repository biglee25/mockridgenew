import React from "react";

import styled from "styled-components";
import Navbar from "../components/navbar";

const Container = styled.div`
  background: grey;
  color: white;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

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
      <Navbar />
      <Container>
        <h1>Hello Gatsby!</h1>
        <Text>
          <p>What a world.</p>
        </Text>
      </Container>
    </div>
  );
}
