import React from "react";
import styled    from "styled-components";

import MySelfImg from "assets/img/profile-black-and-white-cut.png"
import { Link } from "components/commons/Link";

const Container = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 3rem;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  box-shadow: 0 16px 40px rgba(13, 63, 103, 0.1);
  cursor: pointer;
`;

const CustomLink = styled(Link)`
  color: #a10000;
  font-family: "Inter",serif;
  font-weight: 700;
`;

type FooterProps = {}

/**
 * Header Functional Component
 * @return {React.FC<HeaderProps>}
 */
const Footer: React.FC<FooterProps> = () => {
  function handleClick() {
    window.open("https://benlmsc.com/", "_blank");
  }

  return (
    <Container>
      <CustomLink href="https://benlmsc.com/" target="_blank">benlmsc.com</CustomLink><br/>
      <Image onClick={handleClick} src={MySelfImg} alt="myself"/>
    </Container>
  );
};

export default Footer;
