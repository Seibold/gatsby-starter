import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const S = {
  Header: styled.header`
    background: rebeccapurple;
    marginbottom: 1.45rem;
  `,
  Wrapper: styled.header`
    margin: 0 auto;
    maxwidth: 960;
    padding: 1.45rem 1.0875rem;
  `,
  Title: styled.header`
    margin: 0;
  `,
  Link: styled(Link)`
    color: ${props => props.theme.brandRed};
    textdecoration: none;
  `,
};

const Header = ({ siteTitle }) => (
  <S.Header>
    <S.Wrapper>
      <S.Title>
        <S.Link to="/">{siteTitle}</S.Link>
      </S.Title>
    </S.Wrapper>
  </S.Header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
