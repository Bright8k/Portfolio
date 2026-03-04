import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageWrapper } from '../styles/GlobalStyles';

const Section = styled.section`
  padding: 3rem 0;
`;

const SectionHeading = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const Accent = styled.span`
  color: var(--color-primary);
`;

const Divider = styled.div`
  width: 50px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 4px;
  margin-bottom: 2rem;
`;

const Bio = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 680px;
  line-height: 1.8;
  margin-bottom: 3rem;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const Card = styled(motion.div)`
  background-color: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 1.3rem;
    }
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--color-text-light);
  font-weight: 500;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-primary-light);
    flex-shrink: 0;
  }
`;

const InterestPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
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

const CertGroup = styled.div`
  margin-bottom: 2rem;
`;

const CertGroupLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.75rem;
`;

const CertCard = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  background-color: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
    border-color: var(--color-primary-light);
  }
`;

const CertBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: #0a66c2;
  color: #ffffff;
  font-size: 0.65rem;
  font-weight: 800;
  flex-shrink: 0;
  letter-spacing: 0.3px;
`;

const CertName = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.35;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const About: React.FC = () => (
  <PageWrapper>
    <Section>
      <SectionHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <Accent>Me</Accent>
      </SectionHeading>
      <Divider />

      <Bio
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I'm passionate about web development, design, and making things work beautifully
        across all devices. I enjoy learning new tech and building projects that help people
        solve real problems — blending creative instincts with technical precision.
      </Bio>

      <CardsRow>
        <Card
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h3><span>💻</span> Development</h3>
          <SkillList>
            {['JavaScript & TypeScript', 'React & Redux', 'Node.js & Express', 'HTML, CSS & SASS', 'Git & GitHub'].map((s) => (
              <SkillItem key={s}>{s}</SkillItem>
            ))}
          </SkillList>
        </Card>

        <Card
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h3><span>🎨</span> Design & Creative</h3>
          <SkillList>
            {['UI/UX Design', 'Graphic Design', 'Figma & Design Tools', 'Responsive Design', 'Brand Identity'].map((s) => (
              <SkillItem key={s}>{s}</SkillItem>
            ))}
          </SkillList>
        </Card>

        <Card
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h3><span>📱</span> Social & Strategy</h3>
          <SkillList>
            {['Social Media Management', 'Content Strategy', 'Community Building', 'Analytics & Insights', 'Brand Voice'].map((s) => (
              <SkillItem key={s}>{s}</SkillItem>
            ))}
          </SkillList>
        </Card>
      </CardsRow>

      <Card
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h3><span>✨</span> Interests & Hobbies</h3>
        <InterestPills>
          {['Basketball', 'Playing Guitar', 'Exploring New Tech', 'Community & Mentorship', 'Creative Projects'].map((interest) => (
            <Pill key={interest}>{interest}</Pill>
          ))}
        </InterestPills>
      </Card>
    </Section>

    <Section>
      <SectionHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Accent>Certifications</Accent>
      </SectionHeading>
      <Divider />

      <CertGroup>
        <CertGroupLabel>Development</CertGroupLabel>
        <CertGrid>
          {[
            { name: 'Learning the JavaScript Language (2019)', file: 'Learning the JavaScript Language 2019.pdf' },
            { name: 'React.js Essential Training', file: 'React.js Essential Training.pdf' },
            { name: 'React Native Essential Training', file: 'React Native Essential Training.pdf' },
            { name: 'Node.js: Real-Time Web with Socket.IO', file: 'Node.js RealTime Web with Socket.IO.pdf' },
            { name: 'Node.js: Securing RESTful APIs', file: 'Node.js Securing RESTful APIs.pdf' },
            { name: 'Databases for Node.js Developers', file: 'Databases for Node.js Developers.pdf' },
            { name: 'Express Essentials: Build Powerful Web Apps with Node.js', file: 'Express Essentials Build Powerful Web Apps with Node.js.pdf' },
            { name: 'Hands-On Introduction: PHP', file: 'HandsOn Introduction PHP.pdf' },
            { name: 'Learning MySQL Development (2020)', file: 'Learning MySQL Development 2020.pdf' },
          ].map((cert) => (
            <CertCard
              key={cert.file}
              href={`/certifications/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CertBadge>in</CertBadge>
              <CertName>{cert.name}</CertName>
            </CertCard>
          ))}
        </CertGrid>
      </CertGroup>

      <CertGroup>
        <CertGroupLabel>Social Media Management</CertGroupLabel>
        <CertGrid>
          {[
            { name: 'Social Media Marketing Strategy: TikTok and Instagram Reels', file: 'Social Media Marketing Strategy TikTok and Instagram Reels.pdf' },
          ].map((cert) => (
            <CertCard
              key={cert.file}
              href={`/certifications/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CertBadge>in</CertBadge>
              <CertName>{cert.name}</CertName>
            </CertCard>
          ))}
        </CertGrid>
      </CertGroup>
    </Section>
  </PageWrapper>
);

export default About;
