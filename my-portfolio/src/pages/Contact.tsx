import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
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
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
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
    opacity: 0.45;
  }

  &:focus {
    border-color: rgba(200, 171, 120, 0.5);
    box-shadow: 0 0 0 3px rgba(200, 171, 120, 0.07);
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
  min-height: 140px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  font-weight: 300;

  &::placeholder {
    color: var(--color-text-light);
    opacity: 0.45;
  }

  &:focus {
    border-color: rgba(200, 171, 120, 0.5);
    box-shadow: 0 0 0 3px rgba(200, 171, 120, 0.07);
    background-color: var(--color-surface-2);
  }
`;

const SubmitButton = styled(motion.button)<{ $loading: boolean }>`
  padding: 0.9rem 2rem;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: ${({ $loading }) =>
    $loading
      ? 'rgba(200, 171, 120, 0.4)'
      : 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 60%, var(--color-primary-dark) 100%)'};
  color: ${({ $loading }) => ($loading ? 'rgba(8,9,15,0.6)' : '#08090F')};
  border: none;
  border-radius: 2px;
  cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};
  transition: filter 0.2s ease, box-shadow 0.2s ease;
  margin-top: 0.25rem;

  &:hover:not(:disabled) {
    filter: brightness(1.08);
    box-shadow: 0 8px 28px rgba(200, 171, 120, 0.25);
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2.5rem 2rem;
  background-color: rgba(200, 171, 120, 0.05);
  border: 1px solid rgba(200, 171, 120, 0.2);
  border-radius: var(--radius-md);
  max-width: 560px;
  width: 100%;

  p {
    color: var(--color-primary-light);
    font-size: 1rem;
    font-weight: 300;
    margin: 0 0 0.25rem;
    line-height: 1.7;
  }

  span {
    font-size: 0.75rem;
    color: var(--color-text-light);
    letter-spacing: 0.3px;
  }
`;

const ErrorBanner = styled(motion.p)`
  font-size: 0.8rem;
  color: #e57373;
  background-color: rgba(229, 115, 115, 0.08);
  border: 1px solid rgba(229, 115, 115, 0.2);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  margin: 0;
  text-align: center;
`;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
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

        <AnimatePresence mode="wait">
          {submitted ? (
            <SuccessMessage
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p>Message received — thank you.</p>
              <span>I'll be in touch soon.</span>
            </SuccessMessage>
          ) : (
            <FormCard
              key="form"
              ref={formRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              onSubmit={handleSubmit}
            >
              <Label>
                Name
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  required
                  disabled={loading}
                />
              </Label>
              <Label>
                Email
                <Input
                  type="email"
                  name="reply_to"
                  placeholder="your@email.com"
                  required
                  disabled={loading}
                />
              </Label>
              <Label>
                Message
                <Textarea
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  required
                  disabled={loading}
                />
              </Label>

              <AnimatePresence>
                {error && (
                  <ErrorBanner
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Something went wrong — please try again or email me directly at dalbright343@gmail.com
                  </ErrorBanner>
                )}
              </AnimatePresence>

              <SubmitButton
                type="submit"
                $loading={loading}
                disabled={loading}
                whileHover={loading ? {} : { scale: 1.02 }}
                whileTap={loading ? {} : { scale: 0.98 }}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </SubmitButton>
            </FormCard>
          )}
        </AnimatePresence>
      </Section>
    </PageWrapper>
  );
};

export default Contact;
