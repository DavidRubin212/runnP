import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import mockUserData from '../data/UserData';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Styled Components
// const Container = styled.div`
//   padding: 2rem;
//   background-image:;
// `;
import { createGlobalStyle } from 'styled-components'; 

const GlobalStyle = createGlobalStyle`
  body {
    background: #f2f2f2;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`;

const UserName = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #1a83c6;
`;
// const UserName = styled.h1`
//   font-size: 2rem;
// `;

const RunDetailsBox = styled.div`
  margin-bottom: 2rem;
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 10px;
`;

const Detail = styled.p`
  margin: 0.5rem 0;
`;

const GraphContainer = styled.div`
  width: 50%;
  height: auto;
  margin-top: 2rem;
`;


const userData = mockUserData;

const InfoProfile = () => {
  // Prepare graph data
  const distanceData = {
    labels: userData.runningHistory.map(run => run.runDate.toISOString().split('T')[0]),
    datasets: [{
      label: 'Distance (km)',
      data: userData.runningHistory.map(run => run.distanceKM),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }],
  };

  const paceData = {
    labels: userData.runningHistory.map(run => run.runDate.toISOString().split('T')[0]),
    datasets: [{
      label: 'Pace (min/km)',
      data: userData.runningHistory.map(run => run.runningPaceOfOneKM),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }],
  };

  return (
    
    <Container>
      <UserName>{userData.name.first} {userData.name.last}</UserName>
      {userData.runningHistory.map((run, index) => (
        <RunDetailsBox key={index}>
          <Detail>Date: {run.runDate.toISOString().split('T')[0]}</Detail>
          <Detail>Distance: {run.distanceKM} km</Detail>
          <Detail>Pace: {run.runningPaceOfOneKM} min/km</Detail>
          <Detail>Partner: {run.partner.name.first} {run.partner.name.last}</Detail>
          <Detail>Rating: {run.rating}</Detail>
        </RunDetailsBox>
      ))}
      <GraphContainer>
        <Bar data={distanceData} options={{ scales: { y: { beginAtZero: true } } }} />
        <Bar data={paceData} options={{ scales: { y: { beginAtZero: true } } }} />
      </GraphContainer>
    </Container>
  );
};

export default InfoProfile;
