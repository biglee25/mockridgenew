import React from "react";

import styled from "styled-components";

const Container = styled.div`
  background: black;
  color: white;
  padding: 2rem 1.5rem;

  h1 {
    font-family: Anton;
    font-size: 5rem;
    text-transform: uppercase;
  }
`;

const Text = styled.div`
  p {
    font-family: Roboto;
    font-size: 1rem;
    color: red;
  }
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
