import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import mockUserData from "../data/UserData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";
import UserInterface from "../interfaces/userInterface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// // Styled Components
// const Container = styled.div`
//   padding: 2rem;
//   background-image:;
// `;

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
const Spann = styled.img`
  height: 5vh; // Adjust the size as needed
  border-radius: 50%;
  
`;
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
  width: auto;
  height: auto;
  margin-top: 2rem;
`;

const parseUserData = (data: UserInterface) => {
  return {
    ...data,
    // Convert date strings to Date objects
    dateOfBirth: new Date(data.dateOfBirth),
    createdAt: new Date(data.createdAt),
    runningHistory: data.runningHistory.map((run) => ({
      ...run,
      runDate: new Date(run.runDate),
      partner: {
        ...run.partner,
        // Convert partner's date strings to Date objects
        dateOfBirth: new Date(run.partner.dateOfBirth),
        createdAt: new Date(run.partner.createdAt),
      },
    })),
  };
};
const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  return isNaN(date.getTime())
    ? "Invalid date"
    : date.toISOString().split("T")[0];
};

const userData = parseUserData(mockUserData);

const InfoProfile = () => {
  // Prepare graph data
  const distanceData = {
    labels: userData.runningHistory.map(
      (run) => run.runDate.toString().split("T")[0]
    ),
    datasets: [
      {
        label: "Distance (km)",
        data: userData.runningHistory.map((run) => run.distanceKM),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const paceData = {
    labels: userData.runningHistory.map(
      (run) => run.runDate.toString().split("T")[0]
    ),
    datasets: [
      {
        label: "Pace (min/km)",
        data: userData.runningHistory.map((run) => run.runningPaceOfOneKM),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <UserName>
        {userData.name.first} {userData.name.last}
        <Spann src={userData.photo} alt={`${userData.name.first} ${userData.name.last}`} />
      </UserName>
      {userData.runningHistory.map((run, index) => (
        <RunDetailsBox key={index}>
          <Detail>Date: {formatDate(run.runDate)}</Detail>
          <Detail>Distance: {run.distanceKM} km</Detail>
          <Detail>Pace: {run.runningPaceOfOneKM} min/km</Detail>
          <Link to="/UserDetail">
            Partner: {run.partner.name.first} {run.partner.name.last}
          </Link>
          <Detail>Rating: {run.rating}</Detail>
        </RunDetailsBox>
      ))}
      <GraphContainer>
        <Bar
          data={distanceData}
          options={{ scales: { y: { beginAtZero: true } } }}
        />
        <Bar
          data={paceData}
          options={{ scales: { y: { beginAtZero: true } } }}
        />
      </GraphContainer>
    </Container>
  );
};

export default InfoProfile;
