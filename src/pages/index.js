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
<<<<<<< HEAD
  <div>
    <Container>
      <h1>Menu</h1>
    </Container>
    <Text>
      <p>Hello</p>
    </Text>
=======
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
>>>>>>> cd508b051f7678f2264fce538ad3fc0e1c0d4888
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </div>
);

export default IndexPage;
