 import styled from 'styled-components';

const BackgroundContainer = styled.div`
  background-image: url('https://cdn.dribbble.com/users/3414434/screenshots/6272196/asasas.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  letter-spacing: 1rem;
  text-transform: uppercase;
  color: rgb(28, 28, 28);
  font-size: 5em;
  font-family: sans-serif;
`;

const AnimatedSpan = styled.span`
  display: inline-block;
  animation: animate 1s ease-in-out;
`;

const Home = () => {
  return (
    <BackgroundContainer>
      <Title>
        <AnimatedSpan>R</AnimatedSpan>
        <AnimatedSpan>U</AnimatedSpan>
        <AnimatedSpan>N</AnimatedSpan>
        <AnimatedSpan>2</AnimatedSpan>
        <AnimatedSpan>G</AnimatedSpan>
        <AnimatedSpan>E</AnimatedSpan>
        <AnimatedSpan>T</AnimatedSpan>
        <AnimatedSpan>H</AnimatedSpan>
        <AnimatedSpan>E</AnimatedSpan>
        <AnimatedSpan>R</AnimatedSpan>
        <br />
        <span>
          <h6>go go go !</h6>
        </span>
      </Title>
    </BackgroundContainer>
  );
};

export default Home;
