import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../styles/GlobalStyles';

const Hero = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
  }
`;

const Home: React.FC = () => (
  <PageWrapper>
    <Hero>
      <h1>Hi, I'm Bright 👋</h1>
      <p>Welcome to my portfolio! I'm a developer focused on building clean and user-friendly web experiences.</p>
    </Hero>
  </PageWrapper>
);

export default Home;
