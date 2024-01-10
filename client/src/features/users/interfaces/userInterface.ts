import RunInterface from "../../runningMatch/interfaces/runInterface";

interface UserInterface {
  _id: string;
  name: { 
    first: string;
    middle?: string;
    last: string  
  };
  dateOfBirth: string;
  email: string;
  password: string;
  photo: string; 
  createdAt: string;
  isAdmin: boolean;
  runningHistory: RunInterface[];
  totalKM: number;
  runningDays: number;
  address?: {
    state?: string;
    country: string; 
    city: string;
    street: string;
    houseNumber: number;
    zipCode?: number;
  }; 
}

export default UserInterface

