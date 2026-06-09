import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 2.5rem;
  background-color: var(--color-surface);
  border-top: 1px solid rgba(201, 168, 76, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const FooterLogo = styled.span`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 1px;

  span {
    color: var(--color-primary-light);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: var(--color-text-light);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: var(--color-text-light);
  opacity: 0.6;
  letter-spacing: 0.5px;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterLogo>Daniel Albright<span>.</span></FooterLogo>
    <FooterLinks>
      <a href="https://github.com/Bright8k" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </FooterLinks>
    <FooterText>© {new Date().getFullYear()} Daniel Albright — All Rights Reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
