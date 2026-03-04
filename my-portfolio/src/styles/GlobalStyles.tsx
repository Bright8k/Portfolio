import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;
