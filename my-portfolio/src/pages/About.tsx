// src/pages/About.tsx
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Skills = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Skill = styled.li`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutSection>
      <Title>About Me</Title>
      <Text>
        I'm a full-stack developer with a passion for creating interactive web applications. I specialize in React, TypeScript, and Node.js, and I’m always exploring new technologies.
      </Text>
      <Skills>
        <Skill>React</Skill>
        <Skill>Node.js</Skill>
        <Skill>TypeScript</Skill>
        <Skill>CSS</Skill>
      </Skills>
    </AboutSection>
  );
};

export default About;
