import UserInterface from "../interfaces/userInterface";

// Mock Data
const mockUserData: UserInterface = {
    _id: '001',
    name: { first: 'Jane', last: 'Doe' },
    dateOfBirth: new Date('1990-01-01'),
    email: 'jane.doe@example.com',
    password: 'password123',
    photo: 'path/to/jane_photo.jpg',
    createdAt: new Date('2022-01-01'),
    isAdmin: false,
    runningHistory: [
      {
        runDate: new Date('2022-03-01'),
        distanceKM: 5,
        runningPaceOfOneKM: 6,
        partner: {
          _id: '002',
          name: { first: 'John', last: 'Smith' },
          dateOfBirth: new Date('1991-02-01'),
          email: 'john.smith@example.com',
          password: 'password123',
          photo: 'path/to/john_photo.jpg',
          createdAt: new Date('2022-01-01'),
          isAdmin: false,
          runningHistory: [],
          address: {
            country: 'Country',
            city: 'City',
            street: 'Street',
            houseNumber: 100
          }
        },
        rating: 4
      },
      // Additional running history records...
    ],
    address: {
      country: 'Country',
      city: 'City',
      street: 'Street',
      houseNumber: 123
    }
  };
export default mockUserData