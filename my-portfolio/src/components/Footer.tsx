// src/components/Footer.tsx

import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #007BFF;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
  </FooterContainer>
);

export default Footer;