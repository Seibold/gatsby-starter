import React from "react";
import { Link } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import variables from "../styles/variables";

const S = {
  Image: styled.div`
    max-width: 300px;
    margin-bottom: 1.45rem;
  `,
};

const IndexPage = () => (
  <ThemeProvider theme={variables}>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <S.Image>
        <Image />
      </S.Image>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
