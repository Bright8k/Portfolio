import React, { useState } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../styles/GlobalStyles';

const ContactForm = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input,
  textarea {
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #007acc;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <PageWrapper>
      <h2>Contact Me</h2>
      <ContactForm onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        
          id="name"
          type="text"
        />  
        <input onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        
          id="email"
          type="email"
        />  
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
          
          

        <label htmlFor="email">Email</label>
        <input id="email" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows={5} required />

        <button type="submit">Send</button>
      </ContactForm>
    </PageWrapper>
  );
};

export default Contact;
