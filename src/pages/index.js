import React from "react";
import { Link } from "gatsby";

import Image from "../components/image";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  color: white;
  padding: 2rem 1.5rem;

  h1 {
    font-family: Anton;
    font-size: 5rem;
  }
`;

const Text = styled.div`
  p {
    font-family: Roboto;
    font-size: 1rem;
    color: red;
  }
`;

const IndexPage = () => (
  <div>
    <Container>
      <h1>Menu</h1>
    </Container>
    <Text>
      <p>Hello</p>
    </Text>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </div>
);

export default IndexPage;
