
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://via.placeholder.com/1200x800'); /* Replace with your background image */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  padding: 1rem 2rem;
  background-color: #007BFF;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <HeroSection>
      <Title>Welcome to My Portfolio</Title>
      <Description>I'm a passionate developer, always eager to learn and grow. Explore my projects and skills.</Description>
      <Button href="#projects">Explore Projects</Button>
    </HeroSection>
  );
};

export default Home;
