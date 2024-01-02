import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const StyledContainer = styled.div`
  max-width: 400px; // Adjust as needed
  margin: 0 auto;
  padding: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: blue; // Adjust the color as needed
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  margin-top: 10px;
`;

const StyledTitle = styled.h1`
  text-align: center;
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
        // Implement your submit logic here
        console.log(formData);
    };

    return (
        <StyledContainer>
            {/* <StyledTitle>Register</StyledTitle> */}
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel htmlFor="name">Name</StyledLabel>
                <StyledInput id="name" name="name" type="text" required onChange={handleInputChange} />
                
                <StyledLabel htmlFor="familyName">Family Name</StyledLabel>
                <StyledInput id="familyName" name="familyName:" type="text" required onChange={handleInputChange} />
                
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput id="email" name="email:" type="email" required onChange={handleInputChange} />
                
                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput id="password" name="password:" type="password" required onChange={handleInputChange} />
                
                <StyledLabel htmlFor="dateOfBirth">Date of Birth</StyledLabel>
                <StyledInput id="dateOfBirth" name="dateOfBirth" type="date" required onChange={handleInputChange} />
                
                <StyledLabel htmlFor="averageRunningLength">Average Running Length (km)</StyledLabel>
                <StyledInput id="averageRunningLength" name="averageRunningLength" type="number" required onChange={handleInputChange} />
                
                <StyledLabel htmlFor="averagePace">Average Pace (min/km)</StyledLabel>
                <StyledInput id="averagePace" name="averagePace" type="number" required onChange={handleInputChange} />
                
                <StyledButton type="submit">Register</StyledButton>
            </StyledForm>
        </StyledContainer>
    );
};

export default Register;
