import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const StyledContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f3f3f3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
`;

const StyledTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

// Component
const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        familyName: '',
        email: '',
        password: '',
        dateOfBirth: '',
        averageRunningLength: 0,
        averagePace: 0,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData); // Implement your submit logic here
    };

    return (
        <StyledContainer>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel htmlFor="name" ></StyledLabel>
                <StyledInput placeholder='name:' id="name" name="name" type="text" required onChange={handleInputChange} />

                <StyledLabel htmlFor="familyName"></StyledLabel>
                <StyledInput placeholder='Family Name:' id="familyName" name="familyName" type="text" required onChange={handleInputChange} />

                <StyledLabel htmlFor="email"></StyledLabel>
                <StyledInput placeholder='Email:' id="email" name="email" type="email" required onChange={handleInputChange} />

                <StyledLabel htmlFor="password"></StyledLabel>
                <StyledInput placeholder='Password:' id="password" name="password" type="password" required onChange={handleInputChange} />

                <StyledLabel htmlFor="dateOfBirth"></StyledLabel>
                <StyledInput placeholder='Date of Birth:' id="dateOfBirth" name="dateOfBirth" type="date" required onChange={handleInputChange} />

                <StyledLabel htmlFor="averageRunningLength"></StyledLabel>
                <StyledInput placeholder='Average Running Length (km):' id="averageRunningLength" name="averageRunningLength" type="number" required onChange={handleInputChange} />

                <StyledLabel htmlFor="averagePace"></StyledLabel>
                <StyledInput placeholder='Average Pace (min/km):' id="averagePace" name="averagePace" type="number" required onChange={handleInputChange} />

                <StyledButton type="submit">Register</StyledButton>
            </StyledForm>
        </StyledContainer>
    );
};

export default Register;
