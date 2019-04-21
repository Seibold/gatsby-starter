/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import GlobalStyle from "../styles/theme";
import Header from "./header";

const LayoutWrapper = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 0px 1.0875rem 1.45rem;
  paddingtop: 0;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutWrapper>
          <main>{children}</main>
          <footer>
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </LayoutWrapper>
        <GlobalStyle />
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
