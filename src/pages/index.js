import React from "react";

import styled from "styled-components";

const Container = styled.div`
  background: black;
  color: white;
  padding: 2rem 1.5rem;
  text-align: center;

  h1 {
    text-transform: uppercase;
    font-family: Anton;
  }
`;

export default function Home() {
  return (
    <div>
      <Container>
        <h1>Hello Gatsby!</h1>
      </Container>
      <p>What a world.</p>
    </div>
  );
}
