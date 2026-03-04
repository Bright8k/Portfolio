import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 2.5rem;
  background-color: #ffffff;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const FooterLogo = styled.span`
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-primary);

  span {
    color: var(--color-secondary);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: var(--color-text-light);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-light);
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
