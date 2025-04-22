import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../styles/GlobalStyles';

const AboutSection = styled.section`
  padding: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    line-height: 1.6;
  }
`;

const About: React.FC = () => (
  <PageWrapper>
    <AboutSection>
      <h2>About Me</h2>
      <p>I'm passionate about web development, design, and making things work beautifully across all devices. I enjoy learning new tech and building projects that help people solve real problems.</p>
    </AboutSection>
  </PageWrapper>
);

export default About;
