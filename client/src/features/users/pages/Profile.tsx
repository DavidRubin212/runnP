import React from 'react';
import styled from 'styled-components';

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #f0f0f0; // Adjust background color as needed
  padding: 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #4CAF50; // Adjust button color as needed
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// Main component
const RunningAppForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Running Time" />
      <Input type="text" placeholder="Distance" />
      <Input type="text" placeholder="Kilometer Pace" />
      <SubmitButton type="submit">Find Partner</SubmitButton>
    </Form>
  );
};

export default RunningAppForm;
