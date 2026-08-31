import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { PageWrapper } from '../styles/GlobalStyles';
import type { Project, ProjectCategory } from '../types/project';
import MusicHubReport from '../assets/MusicHub_ Final Group Project Report and Prototype.pdf';
import project1Img from '../assets/logo.png';
import project2Img from '../assets/musicHubLogo 1.png';
import project3Img from '../assets/react.svg';
import figmaPlaceholder from '../assets/figma-placeholder.svg';
import xmindPlaceholder from '../assets/xmind-placeholder.svg';
import mysubhubImg from '../assets/mysubhub-og.png';
import hopecenterImg from '../assets/hopecenter-logo.png';
import bayshoreImg from '../assets/bayshore-home-buyers.png';
import jorgeImg from '../assets/jorge-delanuez.png';

// ── Constants ────────────────────────────────────────────────────────────────

const GITHUB_PROFILE = 'https://github.com/Bright8k';

// ── Data ─────────────────────────────────────────────────────────────────────

export const allProjects: Project[] = [
  {
    id: 1,
    title: 'Adventour App',
    category: 'Development',
    description: 'Amusement park scheduling app built collaboratively.',
    fullDescription:
      'A fully functional amusement park scheduling application created within a team environment. I contributed as a front-end developer and web designer, responsible for the UI layout, component architecture, and responsive styling across all breakpoints.',
    image: project1Img,
    link: 'https://github.com/Sithsdoc/Adventour-App',
    tags: ['React', 'Team Project', 'Front-End', 'Web Design'],
  },
  {
    id: 2,
    title: 'MusicHub',
    category: 'Design',
    description: 'UX documentation for a social music app concept.',
    fullDescription:
      'Comprehensive UX design documentation for a proposed app that merges social media and music discovery. The project covers user personas, wireframes, user flows, and a high-fidelity prototype — all created to demonstrate user-centered design thinking.',
    image: project2Img,
    link: MusicHubReport,
    tags: ['UX Design', 'Wireframing', 'Prototyping', 'Documentation'],
  },
  {
    id: 3,
    title: 'TODO App',
    category: 'Development',
    description: 'Clean, interactive task manager built with React.',
    fullDescription:
      'A simple yet polished React TODO application featuring task creation, completion toggling, and deletion. Built to practice React hooks (useState, useEffect) and component-based thinking with a focus on clean, readable code.',
    image: project3Img,
    link: 'https://github.com/Bright8k/TODOapp',
    tags: ['React', 'TypeScript', 'Hooks', 'CSS'],
  },
  {
    id: 4,
    title: 'Design Exercise',
    category: 'Design',
    description: 'Figma design exercise exploring layout and visual composition.',
    fullDescription:
      'A focused Figma design exercise covering foundational UI principles including layout structure, visual hierarchy, spacing, and colour usage. Demonstrates core design thinking and proficiency with the Figma toolset.',
    image: figmaPlaceholder,
    link: '/designer/Exercise file.fig',
    tags: ['Figma', 'UI Design', 'Layout', 'Visual Design'],
  },
  {
    id: 5,
    title: 'Hi-Fi Prototype',
    category: 'Design',
    description: 'High-fidelity interactive prototype with polished UI and interactions.',
    fullDescription:
      'A fully detailed high-fidelity prototype built in Figma, featuring realistic UI components, refined typography, brand-consistent colour palettes, and interactive flows. Represents the final visual direction before development handoff.',
    image: figmaPlaceholder,
    link: 'https://www.figma.com/proto/EjtERwhozXWBFy0A83JnYb/Hifi-Prototype?node-id=0-1&t=oqXrq4Pej2piZWID-1',
    tags: ['Figma', 'Prototyping', 'Hi-Fi', 'Interaction Design'],
  },
  {
    id: 6,
    title: 'MusicHub Mid-Fi Prototype',
    category: 'Design',
    description: 'Mid-fidelity Figma prototype for the MusicHub social music app.',
    fullDescription:
      'The mid-fidelity prototype stage of the MusicHub project, built in Figma to validate user flows and screen layouts before moving to high-fidelity. Covers core app screens including discovery, social feed, and profile views with structured wireframe-level detail.',
    image: project2Img,
    link: '/designer/MusicHub Midfi Prototype.fig',
    tags: ['Figma', 'Mid-Fi', 'UX Design', 'MusicHub'],
  },
  {
    id: 7,
    title: 'Sustainable Living Community Platform',
    category: 'Design',
    description: 'Information architecture and UX planning for a sustainability platform.',
    fullDescription:
      'A comprehensive XMind mind map documenting the information architecture, feature set, and user journey planning for a community-driven sustainable living platform. Covers content hierarchy, navigation structure, and key user touchpoints to inform the design process.',
    image: xmindPlaceholder,
    link: '/designer/Sustainable Living Community Platform.xmind',
    tags: ['XMind', 'Information Architecture', 'UX Planning', 'Sustainability'],
  },
  {
    id: 8,
    title: 'TODO App — UI Design',
    category: 'Design',
    description: 'Figma UI design file for the TODO task manager application.',
    fullDescription:
      'The Figma design source for the TODO App, including component layout, colour system, spacing tokens, and screen designs for the task manager interface. Shows the design-to-development workflow from concept through to visual specification.',
    image: figmaPlaceholder,
    link: '/designer/TODO app.fig',
    tags: ['Figma', 'UI Design', 'Component Design', 'TODO App'],
  },
  {
    id: 9,
    title: 'Water Composite',
    category: 'Graphic Designer',
    description: 'Photo composite blending an underwater pool scene with a sea turtle and child.',
    fullDescription:
      'A photo manipulation composite created in Adobe Photoshop, merging multiple underwater and pool photography sources into a single cohesive scene. Features a competitive swimmer, a sea turtle, and a child — unified through colour grading, masking, and light matching to create a seamless surreal atmosphere.',
    image: '/graphic-designer/Water composite.jpg',
    link: '/graphic-designer/Water composite.jpg',
    tags: ['Photoshop', 'Photo Composite', 'Photo Manipulation', 'Colour Grading'],
  },
  {
    id: 10,
    title: 'Waveform Portrait',
    category: 'Graphic Designer',
    description: 'Conceptual silhouette portrait with a neon audio waveform overlay.',
    fullDescription:
      'A conceptual graphic design piece combining a dramatic side-profile silhouette with a glowing cyan-to-pink audio waveform band. Created to visualise the intersection of music, identity, and sound — demonstrating skills in compositing, blending modes, and typographic-level visual communication.',
    image: '/graphic-designer/Waveform Media logo.png',
    link: '/graphic-designer/Waveform Media logo.png',
    tags: ['Photoshop', 'Conceptual Design', 'Compositing', 'Music'],
  },
  {
    id: 11,
    title: 'Concept Development Sheet 2',
    category: 'Graphic Designer',
    description: 'Graphic design concept development documentation and visual research.',
    fullDescription:
      'A structured concept development sheet documenting the ideation and visual research process behind a graphic design project. Covers mood boarding, colour palette exploration, typographic choices, and compositional direction — demonstrating a methodical approach to design from brief to concept.',
    image: figmaPlaceholder,
    link: '/graphic-designer/Concept Development Sheet 2.pdf',
    tags: ['Concept Development', 'Visual Research', 'Adobe', 'Documentation'],
  },
  {
    id: 14,
    title: 'Hope Center for Behavior Change',
    category: 'Development',
    description: 'Website for a child ABA therapy and behavior change centre.',
    fullDescription:
      'A professional website built for Hope Center for Behavior Change, a practice specialising in Applied Behavior Analysis (ABA) therapy for children. The site communicates services, team information, and resources clearly to families seeking support, with a focus on accessibility and warm, trust-building design.',
    image: hopecenterImg,
    link: 'https://hopecenterforbehaviorchange.com',
    status: 'Live',
    tags: ['Web Design', 'WordPress', 'Healthcare', 'Client Work'],
  },
  {
    id: 15,
    title: 'Hope Center — CEU Application Portal',
    category: 'Development',
    description: 'In-progress CEU application build for Hope Center for Behavior Change.',
    fullDescription:
      'A continuing education (CEU) application currently in development for Hope Center for Behavior Change, extending my earlier work on the practice’s main website. The portal is being built to let clinicians apply for and track continuing education credits online, replacing a manual, paper-based process.',
    image: hopecenterImg,
    link: 'https://github.com/Bright8k/HopeCenterCEU',
    status: 'In Progress',
    tags: ['Web App', 'Healthcare', 'Client Work', 'In Development'],
  },
  {
    id: 16,
    title: 'Bayshore Home Buyers',
    category: 'Development',
    description: 'UI redesign and interactive sold-homes map for a real estate investment company.',
    fullDescription:
      'A UI and design overhaul for Bayshore Home Buyers, a real estate home-buying company. I refreshed the visual design and user experience across the site and built an interactive map showcasing every home the client has purchased and sold, giving visitors a tangible, explorable view of their track record.',
    image: bayshoreImg,
    link: 'https://bayshorehomebuyers.com',
    status: 'Live',
    tags: ['Web Design', 'UI/UX Redesign', 'Interactive Map', 'Real Estate'],
  },
  {
    id: 17,
    title: 'Jorge De La Nuez',
    category: 'Development',
    description: 'Personal website in progress for an athlete and aspiring model.',
    fullDescription:
      'A personal portfolio and brand website currently in development for Jorge De La Nuez, an athlete and aspiring model. The site is being designed to showcase his athletic career, modelling portfolio, and personal brand with a clean, image-forward layout.',
    image: jorgeImg,
    link: 'https://jorgedelanuez.com',
    status: 'In Progress',
    tags: ['Web Design', 'Personal Brand', 'Portfolio Site', 'In Development'],
  },
  {
    id: 13,
    title: 'MySubHub',
    category: 'Development',
    description: 'A web app for tracking and managing your subscription services.',
    fullDescription:
      'MySubHub is a subscription management web application that helps users track all their recurring services in one place. Built and deployed as a live product, it demonstrates full-stack development skills including UI design, data management, and production deployment.',
    image: mysubhubImg,
    link: 'https://mysubhub.io',
    tags: ['Web App', 'Full-Stack', 'Subscriptions', 'Live Product'],
  },
  {
    id: 12,
    title: 'My College Experience',
    category: 'Development',
    description: 'A styled personal webpage built with HTML and SCSS for UCF Digital Media.',
    fullDescription:
      'A college assignment for UCF\'s Digital Media programme — a multi-section personal webpage documenting education, extracurricular activities, and achievements. Built with semantic HTML5 and a compiled SCSS stylesheet using variables and mixins, demonstrating foundational web development and stylesheet organisation skills.',
    image: project3Img,
    link: '/projects/Major Assignment 3.zip',
    tags: ['HTML', 'SCSS', 'CSS', 'UCF', 'Web Design'],
  },
];

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Development',
  'Design',
  'Social Media Management',
  'Graphic Designer',
];

export const getInitials = (title: string) =>
  title
    .split(/\s+/)
    .filter((word) => /[A-Za-z0-9]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

// ── Styles ────────────────────────────────────────────────────────────────────

const Header = styled.div`
  padding: 3rem 0 2rem;
`;

const PageTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const Accent = styled.span`
  color: var(--color-primary);
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, var(--color-primary), transparent);
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  color: var(--color-text-light);
  font-size: 1rem;
  max-width: 560px;
  margin: 0;
  font-weight: 300;
  line-height: 1.8;
`;

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2.5rem;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 0.4rem 1.1rem;
  border-radius: 2px;
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-border)')};
  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 60%, var(--color-primary-dark) 100%)'
      : 'transparent'};
  color: ${({ $active }) => ($active ? '#08090F' : 'var(--color-text-light)')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(200, 171, 120, 0.5);
    color: ${({ $active }) => ($active ? '#08090F' : 'var(--color-primary)')};
    background: ${({ $active }) =>
      $active
        ? 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 60%, var(--color-primary-dark) 100%)'
        : 'rgba(200, 171, 120, 0.06)'};
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.25rem;
  padding-bottom: 3rem;
`;

const Card = styled(motion.div)`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-top: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--color-border);
    border-top-color: var(--color-primary);
    transform: translateY(-4px);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 190px;
  background: linear-gradient(160deg, var(--color-surface-2) 0%, var(--color-accent) 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(14, 15, 26, 0.55) 100%);
    pointer-events: none;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const Monogram = styled.span`
  font-family: var(--font-display);
  font-weight: 500;
  font-style: italic;
  color: var(--color-primary);
  opacity: 0.55;
  letter-spacing: 2px;
`;

const CardMonogram = styled(Monogram)`
  font-size: 3rem;
`;

const ModalMonogram = styled(Monogram)`
  font-size: 3.5rem;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const StatusBadge = styled.span`
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #dfbf92;
  background-color: rgba(200, 171, 120, 0.1);
  border: 1px solid rgba(200, 171, 120, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 2px;
  width: fit-content;
`;

const CardBody = styled.div`
  padding: 1.25rem 1.4rem 1.4rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-primary);
  background-color: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.22);
  padding: 0.25rem 0.75rem;
  border-radius: 2px;
  margin-bottom: 0.75rem;
  width: fit-content;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const CardDesc = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.65;
  flex: 1;
  margin: 0 0 1rem;
  font-weight: 300;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--color-text-light);
  background-color: var(--color-accent);
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border);
`;

const ExpandHint = styled.span`
  font-size: 0.75rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 1rem;
  display: block;
  opacity: 0.8;
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  color: var(--color-text-light);

  p {
    font-size: 1rem;
    margin: 0;
    font-weight: 300;
  }
`;

// ── Modal Styles ──────────────────────────────────────────────────────────────

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const Modal = styled(motion.div)`
  background-color: var(--color-surface);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: var(--radius-lg);
  max-width: 660px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg), 0 0 60px rgba(201, 168, 76, 0.06);
  position: relative;
`;

const ModalImage = styled.div`
  width: 100%;
  height: 230px;
  overflow: hidden;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background-color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ModalBody = styled.div`
  padding: 2rem 2.25rem 2.25rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const ModalDesc = styled.p`
  color: var(--color-text-light);
  line-height: 1.85;
  font-size: 0.975rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;

const ModalTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const ModalTag = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--color-text-light);
  background-color: var(--color-accent);
  border: 1px solid var(--color-border);
  padding: 0.3rem 0.9rem;
  border-radius: var(--radius-pill);
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ViewButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 60%, var(--color-primary-dark) 100%);
  color: #08090F;
  padding: 0.75rem 2rem;
  border-radius: 2px;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    color: #08090F;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(200, 171, 120, 0.3);
    filter: brightness(1.08);
  }
`;

const SecondaryViewButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--color-text-light);
  padding: 0.75rem 2rem;
  border-radius: 2px;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--color-border);
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(200, 171, 120, 0.45);
    color: var(--color-primary);
    transform: translateY(-2px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(10, 8, 7, 0.8);
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-light);
  transition: all 0.2s ease;
  z-index: 10;
  line-height: 1;

  &:hover {
    background-color: rgba(201, 168, 76, 0.12);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <PageWrapper>
      <Header>
        <PageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <Accent>Portfolio</Accent>
        </PageTitle>
        <Divider />
        <Subtitle>
          A collection of my work across development, design, social media, and graphics.
          Click any card to learn more.
        </Subtitle>
      </Header>

      <Tabs>
        {CATEGORIES.map((cat) => (
          <Tab
            key={cat}
            $active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Tab>
        ))}
      </Tabs>

      <AnimatePresence mode="wait">
        <Grid
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.length === 0 ? (
            <EmptyState>
              <p>No projects in this category yet — check back soon.</p>
            </EmptyState>
          ) : (
            filtered.map((project, i) => (
              <Card
                key={project.id}
                onClick={() => setSelected(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                layout
              >
                <CardImage>
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <CardMonogram>{getInitials(project.title)}</CardMonogram>
                  )}
                </CardImage>
                <CardBody>
                  <BadgeRow>
                    <CategoryBadge>{project.category}</CategoryBadge>
                    {project.status === 'In Progress' && <StatusBadge>In Progress</StatusBadge>}
                  </BadgeRow>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDesc>{project.description}</CardDesc>
                  <TagRow>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagRow>
                  <ExpandHint>View details →</ExpandHint>
                </CardBody>
              </Card>
            ))
          )}
        </Grid>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <Modal
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelected(null)} aria-label="Close">✕</CloseButton>
              <ModalImage>
                {selected.image ? (
                  <img src={selected.image} alt={selected.title} />
                ) : (
                  <ModalMonogram>{getInitials(selected.title)}</ModalMonogram>
                )}
              </ModalImage>
              <ModalBody>
                <BadgeRow>
                  <CategoryBadge>{selected.category}</CategoryBadge>
                  {selected.status === 'In Progress' && <StatusBadge>In Progress</StatusBadge>}
                </BadgeRow>
                <ModalTitle>{selected.title}</ModalTitle>
                <ModalDesc>{selected.fullDescription}</ModalDesc>
                <ModalTagRow>
                  {selected.tags.map((tag) => (
                    <ModalTag key={tag}>{tag}</ModalTag>
                  ))}
                </ModalTagRow>
                <ModalActions>
                  {selected.link === '#hifi-unavailable' ? (
                    <ViewButton
                      as="span"
                      style={{ opacity: 0.4, cursor: 'default', pointerEvents: 'none' }}
                    >
                      File Too Large for Web Hosting
                    </ViewButton>
                  ) : selected.link.endsWith('.fig') || selected.link.endsWith('.xmind') || selected.link.endsWith('.zip') ? (
                    <ViewButton
                      href={selected.link}
                      download
                    >
                      Download File
                    </ViewButton>
                  ) : selected.link.includes('github.com') ? (
                    <ViewButton
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </ViewButton>
                  ) : (
                    <ViewButton
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selected.status === 'Live' ? 'Visit Live Site' : 'View Project'}
                    </ViewButton>
                  )}

                  {!selected.link.includes('github.com') && (
                    <SecondaryViewButton
                      href={selected.githubLink ?? GITHUB_PROFILE}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </SecondaryViewButton>
                  )}
                </ModalActions>
              </ModalBody>
            </Modal>
          </Overlay>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Projects;
