import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; // Full viewport width
  height: 100vh; // Full viewport height
  background-color: #f2f2f2; // Consider a more elegant color
  margin: 0; // Remove default margin
  padding: 2em; // Padding for smaller screens
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  background-color: #fff;
  padding: 2em;
  border-radius: 0.5em;
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);
  max-width: 30em; // Limits the width of the form for larger screens
  width: 100%; // Full width on smaller screens
`;

const Input = styled.input`
  padding: 0.75em;
  border: 1px solid #ddd;
  border-radius: 0.25em;
`;

const Button = styled.button`
  padding: 0.75em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
  transition: background-color 0.3s ease; // Smooth transition for hover effect

  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #333; // Classier text color
  margin-bottom: 1em; // Space between title and inputs
`;

// Sign In Component
const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the form submission
        console.log({ email, password });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Sign In</Title>
                <Input type="email" placeholder="Email:" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password:" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Sign In</Button>
            </Form>
        </Container>
    );
};

export default SignIn;
