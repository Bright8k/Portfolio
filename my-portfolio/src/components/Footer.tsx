// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: auto;
  padding: 1rem 2rem;
  background-color: #f0f0f0;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    © {new Date().getFullYear()} Bright — All Rights Reserved.
  </FooterContainer>
);

export default Footer;
