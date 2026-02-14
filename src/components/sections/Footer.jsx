import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  margin: 0 1rem;
  font-size: 1.5rem;
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Kaniyamudhan Y</Logo>

        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
        </Nav>

        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.twitter}>
            <TwitterIcon />
          </SocialMediaIcon>

          <SocialMediaIcon href={Bio.linkedin}>
            <LinkedInIcon />
          </SocialMediaIcon>

          <SocialMediaIcon href={Bio.insta}>
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>© 2025 Kaniyamudhan Y</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
