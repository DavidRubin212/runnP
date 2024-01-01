import { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: String,
    familyName: String,
    email: String,
    password: String,
    dateOfBirth: Date,
    averageRunningLength: Number,
    averagePace: Number
});
export const User = model('User', userSchema);
//# sourceMappingURL=User.js.map