import React from "react";
import Layout from "../../components/Layout";
import Calculator from "../../components/Calculator";
import { Container } from "../../styles/Grid";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Calculator />
      </Container>
    </Layout>
  );
};

export default Home;
