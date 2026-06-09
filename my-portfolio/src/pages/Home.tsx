import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const floatUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 62px);
`;

const Hero = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 65%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.04) 0%, transparent 65%);
    pointer-events: none;
  }
`;

const Eyebrow = styled(motion.span)`
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: var(--color-primary);
  background-color: rgba(201, 168, 76, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.3);
  padding: 0.4rem 1.4rem;
  border-radius: 2px;
  margin-bottom: 2rem;
`;

const Heading = styled(motion.h1)`
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  max-width: 760px;
  line-height: 1.1;
  letter-spacing: -0.5px;

  em {
    font-style: italic;
    color: var(--color-primary);
  }
`;

const Subheading = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: var(--color-text-light);
  max-width: 540px;
  margin-bottom: 3rem;
  line-height: 1.8;
  font-weight: 300;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled(Link)`
  background-color: var(--color-primary);
  color: #0A0807;
  padding: 0.9rem 2.4rem;
  border-radius: 2px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background-color: var(--color-primary-light);
    color: #0A0807;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(201, 168, 76, 0.3);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--color-primary);
  padding: 0.9rem 2.4rem;
  border-radius: 2px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(201, 168, 76, 0.4);
  transition: all 0.25s ease;

  &:hover {
    background-color: rgba(201, 168, 76, 0.08);
    border-color: var(--color-primary);
    color: var(--color-primary-light);
    transform: translateY(-2px);
  }
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, var(--color-primary), transparent);
  margin: 0 auto 2rem;
`;

const SkillsStrip = styled.section`
  background-color: var(--color-surface);
  border-top: 1px solid rgba(201, 168, 76, 0.12);
  border-bottom: 1px solid rgba(201, 168, 76, 0.08);
  padding: 2.25rem 1.5rem;
  text-align: center;
  animation: ${floatUp} 0.8s ease both;
  animation-delay: 0.6s;
`;

const SkillsLabel = styled.p`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-text-light);
  margin-bottom: 1.25rem;
`;

const SkillPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const Pill = styled.span`
  background-color: transparent;
  color: var(--color-text-light);
  padding: 0.35rem 1rem;
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(201, 168, 76, 0.3);
    color: var(--color-primary);
  }
`;

const skills = [
  'React', 'TypeScript', 'UI/UX Design', 'Graphic Design',
  'Social Media', 'Node.js', 'Figma', 'Responsive Design',
];

const Home: React.FC = () => (
  <Page>
    <Hero>
      <Eyebrow
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Creative Portfolio
      </Eyebrow>

      <Heading
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        Hi, I'm <em>Daniel Albright</em> —<br />Designer & Developer
      </Heading>

      <Divider />

      <Subheading
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        I craft beautiful digital experiences that blend clean code with intentional design.
        From web development to social media strategy — I bring ideas to life.
      </Subheading>

      <ButtonGroup
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <PrimaryButton to="/projects">View My Work</PrimaryButton>
        <SecondaryButton to="/contact">Get In Touch</SecondaryButton>
      </ButtonGroup>
    </Hero>

    <SkillsStrip>
      <SkillsLabel>What I do</SkillsLabel>
      <SkillPills>
        {skills.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </SkillPills>
    </SkillsStrip>
  </Page>
);

export default Home;
