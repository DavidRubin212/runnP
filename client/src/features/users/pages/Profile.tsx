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
const StyledContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  height: 100vh; // Set a minimum height
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
    <StyledContainer>
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Running Time" />
      <Input type="text" placeholder="Distance" />
      <Input type="text" placeholder="Kilometer Pace" />
      <SubmitButton type="submit">Find Partner</SubmitButton>
    </Form>
    </StyledContainer>
  );
};

export default RunningAppForm;
