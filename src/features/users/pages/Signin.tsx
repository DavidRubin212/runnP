import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2; // You can change the background color
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.h2`
  text-align: center;
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
