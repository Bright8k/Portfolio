import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageWrapper } from '../styles/GlobalStyles';

const Section = styled.section`
  padding: 3rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 0.5rem;
  text-align: center;
  color: var(--color-text);
`;

const Accent = styled.span`
  color: var(--color-primary);
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, var(--color-primary), transparent);
  margin: 0 auto 1.75rem;
`;

const Subtitle = styled(motion.p)`
  color: var(--color-text-light);
  font-size: 1rem;
  text-align: center;
  max-width: 500px;
  margin-bottom: 2.75rem;
  line-height: 1.8;
  font-weight: 300;
`;

const FormCard = styled(motion.form)`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2.25rem;
  width: 100%;
  max-width: 560px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-light);
`;

const Input = styled.input`
  padding: 0.85rem 1rem;
  font-size: 0.975rem;
  font-family: var(--font-body);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background-color: var(--color-accent);
  color: var(--color-text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  font-weight: 300;

  &::placeholder {
    color: var(--color-text-light);
    opacity: 0.5;
  }

  &:focus {
    border-color: rgba(201, 168, 76, 0.5);
    box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.08);
    background-color: var(--color-surface-2);
  }
`;

const Textarea = styled.textarea`
  padding: 0.85rem 1rem;
  font-size: 0.975rem;
  font-family: var(--font-body);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background-color: var(--color-accent);
  color: var(--color-text);
  resize: vertical;
  min-height: 130px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  font-weight: 300;

  &::placeholder {
    color: var(--color-text-light);
    opacity: 0.5;
  }

  &:focus {
    border-color: rgba(201, 168, 76, 0.5);
    box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.08);
    background-color: var(--color-surface-2);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.9rem 2rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: var(--color-primary);
  color: #0A0807;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  margin-top: 0.25rem;

  &:hover {
    background-color: var(--color-primary-light);
    box-shadow: 0 6px 24px rgba(201, 168, 76, 0.25);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background-color: rgba(201, 168, 76, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: var(--radius-md);
  max-width: 560px;
  width: 100%;

  p {
    color: var(--color-primary-light);
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
  }
`;

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <Section>
        <PageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's <Accent>Connect</Accent>
        </PageTitle>
        <Divider />

        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind or just want to say hello? I'd love to hear from you.
          Fill out the form and I'll get back to you soon.
        </Subtitle>

        {submitted ? (
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p>Thank you — your message has been received. I'll be in touch soon.</p>
          </SuccessMessage>
        ) : (
          <FormCard
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <Label>
              Name
              <Input type="text" placeholder="Your name" required />
            </Label>
            <Label>
              Email
              <Input type="email" placeholder="your@email.com" required />
            </Label>
            <Label>
              Message
              <Textarea placeholder="Tell me about your project or just say hi..." required />
            </Label>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </SubmitButton>
          </FormCard>
        )}
      </Section>
    </PageWrapper>
  );
};

export default Contact;
