import React  from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  font-family: 'Inter', sans-serif;
  padding-block: 4rem;
  color: #a10000;
  text-shadow: 0px 16px 40px rgba(13, 63, 103, 0.1);
`;

const Title = styled.h1`
  text-transform: uppercase;
  margin: 0;
  font-size: 5.8rem;
  line-height: 5rem;

  @media screen and (min-width: 650px) {
    font-size: 7.8rem;
    line-height: 7rem;  
  }
`;

const Subtitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 2.5rem;
  margin: 0;
`;

type HeaderProps = {}

/**
 * Header Functional Component
 * @return {React.FC<HeaderProps>}
 */
const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <Title>if i was...</Title>
      <Subtitle>chinese portrait</Subtitle>
    </Container>
  );
};

export default Header;
