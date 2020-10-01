import React from "react";

import styled from "styled-components";

const Container = styled.div`
  background: black;
  color: white;
  padding: 2rem 1.5rem;
  text-align: center;

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
      <Container>
        <h1>Hello Gatsby!</h1>
      </Container>
      <Text>
        <p>What a world.</p>
      </Text>
    </div>
  );
}
