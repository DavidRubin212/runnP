import express from "express";
import * as mongoose from 'mongoose';
import { User } from "./schema/User.js";
import usersRoutes from "../src/routes/usersroutes.js"
// import  insertUsers  from "../src/schema/insertdata.js";

const port = 4003;

const app = express();
app.get("/",(req:any,res:any)=>{
    res.send("goe king?!")
})
// app.use('/users', usersRoutes);




// Assuming you are using environment variables for configuration
const connectionString = process.env.CONNECTION_STRING || 'mongodb://localhost:27017/running';

// insertUsers();

// Rest of your server code...


app.listen(port,()=>{
    console.log("on");
    console.log("hii");
    console.log("bye");    
})
mongoose.connect(connectionString)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));
