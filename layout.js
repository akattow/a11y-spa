import React from "react";
import { useDeck, Head } from "mdx-deck";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Layout = (props) => {
  const deck = useDeck();
  const currentSlide = deck.index + 1;

  return (
    <>
      <Head>
        <title>Accessibility in Single-Page Applications</title>
      </Head>
      <Header>
        {currentSlide} / {deck.length}
      </Header>
      <Main>{props.children}</Main>
      <Footer>Kat Tow • they/she • @akattow</Footer>
    </>
  );
};

const headerFooterStyles = css`
  width: 100%;
  padding: 0.75em;
  position: absolute;
  left: 0;
  font-size: 75%;
`;

const Header = styled.header`
  ${headerFooterStyles}
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Footer = styled.footer`
  ${headerFooterStyles}
  bottom: 0;
  text-align: center;
`;

const Main = styled.main`
  max-width: 85%;
  margin: 1em auto;
`;

export default Layout;
