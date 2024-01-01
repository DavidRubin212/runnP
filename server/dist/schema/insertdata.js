// import mongoose from 'mongoose';
// import { User } from './User.js'; // Adjust the path as needed
export {};
// const usersData = {
//         "users": [
//                 {
//                   "name": "Alex",
//                   "familyName": "Johnson",
//                   "email": "alex.johnson@example.com",
//                   "password": "alexSecure123",
//                   "dateOfBirth": "1985-03-15",
//                   "averageRunningLength": 5.2,
//                   "averagePace": 5.8
//                 },
//                 {
//                   "name": "Maria",
//                   "familyName": "Gonzalez",
//                   "email": "maria.gonzalez@example.com",
//                   "password": "mariaPass789",
//                   "dateOfBirth": "1990-07-22",
//                   "averageRunningLength": 4.5,
//                   "averagePace": 6.1
//                 },
//                 {
//                   "name": "Samir",
//                   "familyName": "Patel",
//                   "email": "samir.patel@example.com",
//                   "password": "samir2023",
//                   "dateOfBirth": "1988-11-09",
//                   "averageRunningLength": 6.0,
//                   "averagePace": 5.5
//                 },
//                 {
//                   "name": "Liu",
//                   "familyName": "Wang",
//                   "email": "liu.wang@example.com",
//                   "password": "liuW4ng456",
//                   "dateOfBirth": "1992-04-17",
//                   "averageRunningLength": 5.0,
//                   "averagePace": 6.0
//                 },
//                 {
//                   "name": "Chloe",
//                   "familyName": "Brown",
//                   "email": "chloe.brown@example.com",
//                   "password": "chloB123",
//                   "dateOfBirth": "1986-09-30",
//                   "averageRunningLength": 4.8,
//                   "averagePace": 5.9
//                 },
//                 {
//                   "name": "Omar",
//                   "familyName": "Ali",
//                   "email": "omar.ali@example.com",
//                   "password": "omarA987",
//                   "dateOfBirth": "1991-02-15",
//                   "averageRunningLength": 5.5,
//                   "averagePace": 6.2
//                 },
//                 {
//                   "name": "Emily",
//                   "familyName": "Davis",
//                   "email": "emily.davis@example.com",
//                   "password": "emilyD321",
//                   "dateOfBirth": "1993-05-20",
//                   "averageRunningLength": 4.6,
//                   "averagePace": 5.7
//                 },
//                 {
//                   "name": "Aya",
//                   "familyName": "Moussa",
//                   "email": "aya.moussa@example.com",
//                   "password": "ayaMou123",
//                   "dateOfBirth": "1989-12-12",
//                   "averageRunningLength": 5.3,
//                   "averagePace": 5.6
//                 },
//                 {
//                   "name": "Ivan",
//                   "familyName": "Petrov",
//                   "email": "ivan.petrov@example.com",
//                   "password": "ivanP456",
//                   "dateOfBirth": "1994-08-08",
//                   "averageRunningLength": 6.1,
//                   "averagePace": 6.3
//                 },
//                 {
//                   "name": "Sara",
//                   "familyName": "Miller",
//                   "email": "sara.miller@example.com",
//                   "password": "saraM789",
//                   "dateOfBirth": "1987-01-29",
//                   "averageRunningLength": 5.7,
//                   "averagePace": 5.4
//                 }
//               ]
//             }
// const connectionString: string = process.env.CONNECTION_STRING || 'mongodb://localhost:27017/running';
// mongoose.connect(connectionString)
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.error('Could not connect to MongoDB:', err));
// const insertUsers = async (): Promise<void> => {
//   try {
//     const users = usersData.users;
//     const result = await User.insertMany(users);
//     console.log(`${users.length} users have been inserted`);
//     console.log(result);
//   } catch (err) {
//     console.error('Error inserting users:', err);
//   } finally {
//     mongoose.connection.close();
//   }
// };
// export default insertUsers;
//# sourceMappingURL=insertdata.js.map