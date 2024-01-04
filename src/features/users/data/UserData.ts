import UserInterface from "../interfaces/userInterface";

// Mock Data
const mockUserData: UserInterface = {
  "_id": "001",
  "name": {
    "first": "Jane",
    "last": "Doe"
  },
  "dateOfBirth": "1990-01-01",
  "email": "jane.doe@example.com",
  "password": "password123",
  "photo": "path/to/jane_photo.jpg",
  "createdAt": "2022-01-01",
  "isAdmin": false,
  "runningHistory": [
    {
      "runDate": "2022-04-15",
      "distanceKM": 8,
      "runningPaceOfOneKM": 5,
      "partner": {
        "name": {
          "first": "Alice",
          "last": "Johnson"
        },
        "dateOfBirth": "1992-05-10",
        "email": "alice.johnson@example.com",
        "createdAt": "2022-01-01",

      },
      "rating": 5
    },
    {
      "runDate": "2022-04-15",
      "distanceKM": 8,
      "runningPaceOfOneKM": 5,
      "partner": {
        "name": {
          "first": "Alice",
          "last": "Johnson"
        },
        "dateOfBirth": "1992-05-10",
        "email": "alice.johnson@example.com",
        "createdAt": "2022-01-01",

      },
      "rating": 5
    }
    // Additional runningHistory objects as needed...
  ],
  "totalKM": 0,
  "runningDays": 0,
  "address": {
    "country": "Country",
    "city": "City",
    "street": "Street",
    "houseNumber": 123
    // zipCode is optional and can be added if available
  }
}

export default mockUserData