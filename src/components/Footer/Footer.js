import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='000-0000-00'>000-0000-000</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>email</LinkTitle>
          <LinkItem href='mailto:contact@email.com'>contact@email.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovation is the key !</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/ayush-sys'><AiFillGithub size='3rem' /></SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/ayush-pattanayak-32225b202/'><AiFillLinkedin size='3rem' /></SocialIcons>
        <SocialIcons><AiFillTwitterCircle size='3rem' /></SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  )
};

export default Footer;
