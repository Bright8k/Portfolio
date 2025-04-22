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
      <h3>Skills</h3>
      <ul>
        <li>JavaScript, TypeScript</li>
        <li>React, Redux</li>
        <li>Node.js, Express</li>
        <li>HTML, CSS, SASS</li>
        <li>Responsive Design</li>
        <li>Git, GitHub</li>
        <li>UI/UX Design</li>
      </ul>
        <h3>Interests</h3>
        <p>In my free time, I love exploring new technologies, and sharing knowledge with my peers in the community. I'm also a big fan of Basketball and playing guitar.</p>
    </AboutSection>
  </PageWrapper>
);

export default About;
