import RunInterface from "../../runningMatch/interfaces/runInterface";

interface UserInterface {
    _id: string;
    name: { first: string; middle?: string; last: string };
    dateOfBirth: Date;
    email: string;
    password: string;
    photo: string;
    createdAt: Date;
    isAdmin: boolean;
    runningHistory:RunInterface[]  
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

// type date = {
//     date:String
// }


// type running = {
//     distanceKM:number;
//     runningPaceOfOneKM:Number;
//     partner:UserInterface;
//     rating:number;
// }