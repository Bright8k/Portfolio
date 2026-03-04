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
  min-height: calc(100vh - 68px);
`;

const Hero = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -80px;
    right: -80px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(236, 197, 207, 0.35) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -60px;
    left: -60px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 145, 187, 0.25) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Eyebrow = styled(motion.span)`
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-primary);
  background-color: var(--color-accent);
  padding: 0.4rem 1.2rem;
  border-radius: var(--radius-pill);
  margin-bottom: 1.5rem;
`;

const Heading = styled(motion.h1)`
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  max-width: 700px;
  line-height: 1.15;

  em {
    font-style: italic;
    color: var(--color-primary);
  }
`;

const Subheading = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--color-text-light);
  max-width: 560px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled(Link)`
  background-color: var(--color-primary);
  color: #ffffff;
  padding: 0.85rem 2.2rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 4px 18px rgba(196, 119, 138, 0.35);
  transition: all 0.25s ease;

  &:hover {
    background-color: var(--color-primary-dark);
    box-shadow: 0 6px 24px rgba(196, 119, 138, 0.45);
    transform: translateY(-2px);
    color: #ffffff;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--color-primary);
  padding: 0.85rem 2.2rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid var(--color-primary-light);
  transition: all 0.25s ease;

  &:hover {
    background-color: var(--color-accent);
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 4px;
  margin: 0 auto 1.5rem;
`;

const SkillsStrip = styled.section`
  background-color: #ffffff;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 2rem 1.5rem;
  text-align: center;
  animation: ${floatUp} 0.8s ease both;
  animation-delay: 0.6s;
`;

const SkillsLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-text-light);
  margin-bottom: 1rem;
`;

const SkillPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
`;

const Pill = styled.span`
  background-color: var(--color-accent);
  color: var(--color-primary-dark);
  padding: 0.4rem 1rem;
  border-radius: var(--radius-pill);
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid var(--color-border);
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
