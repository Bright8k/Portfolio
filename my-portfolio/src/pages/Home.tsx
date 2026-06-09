import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
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
  padding: 7rem 2rem 5rem;
  position: relative;
  overflow: hidden;

  /* Atmospheric gold glow from top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: radial-gradient(ellipse 80% 70% at 50% 0%, rgba(200, 171, 120, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Eyebrow = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 2.25rem;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 28px;
    height: 1px;
    background-color: var(--color-primary);
    opacity: 0.5;
  }
`;

const Heading = styled(motion.h1)`
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 7.5vw, 6rem);
  font-weight: 300;
  color: var(--color-text);
  margin-bottom: 0.25rem;
  max-width: 860px;
  line-height: 1.05;
  letter-spacing: -0.5px;

  em {
    font-style: italic;
    font-weight: 300;
    color: var(--color-primary);
  }
`;

const HeadingSub = styled(motion.p)`
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 300;
  font-style: italic;
  color: var(--color-text-light);
  letter-spacing: 1px;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
`;

const GoldRule = styled(motion.div)`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-primary), transparent);
  margin: 0 auto 2.25rem;
  opacity: 0.7;
`;

const Subheading = styled(motion.p)`
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: var(--color-text-light);
  max-width: 500px;
  margin-bottom: 3rem;
  line-height: 1.85;
  font-weight: 300;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 60%, var(--color-primary-dark) 100%);
  color: #08090F;
  padding: 0.875rem 2.5rem;
  border-radius: 2px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #08090F;
    transform: translateY(-2px);
    box-shadow: 0 10px 35px rgba(200, 171, 120, 0.28);
    filter: brightness(1.08);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--color-text-light);
  padding: 0.875rem 2.5rem;
  border-radius: 2px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(200, 171, 120, 0.45);
    color: var(--color-primary);
    transform: translateY(-2px);
  }
`;

const SkillsStrip = styled.section`
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 2rem 1.5rem;
  text-align: center;
  animation: ${fadeUp} 0.8s ease both;
  animation-delay: 0.7s;
`;

const SkillsLabel = styled.p`
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--color-text-light);
  opacity: 0.6;
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
  padding: 0.3rem 1rem;
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(200, 171, 120, 0.35);
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
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Creative Portfolio
      </Eyebrow>

      <Heading
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Hi, I'm <em>Daniel Albright</em>
      </Heading>

      <HeadingSub
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Designer &amp; Developer
      </HeadingSub>

      <GoldRule
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.7, scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ transformOrigin: 'top' }}
      />

      <Subheading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.38 }}
      >
        I craft beautiful digital experiences that blend clean code with intentional design.
        From web development to social media strategy — I bring ideas to life.
      </Subheading>

      <ButtonGroup
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <PrimaryButton to="/projects">View My Work</PrimaryButton>
        <SecondaryButton to="/contact">Get In Touch</SecondaryButton>
      </ButtonGroup>
    </Hero>

    <SkillsStrip>
      <SkillsLabel>Expertise</SkillsLabel>
      <SkillPills>
        {skills.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </SkillPills>
    </SkillsStrip>
  </Page>
);

export default Home;
