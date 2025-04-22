// src/pages/Contact.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageWrapper } from '../styles/GlobalStyles';

const Form = styled(motion.form)`
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    resize: none;
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #007acc;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #005fa3;
    }
  }
`;

const Contact: React.FC = () => {
  return (
    <PageWrapper>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <Form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent!');
        }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows={5} placeholder="Your Message" required />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
        >
          Send Message
        </motion.button>
      </Form>
    </PageWrapper>
  );
};

export default Contact;
