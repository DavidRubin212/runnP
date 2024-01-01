import { User } from '../schema/User.js';  // Adjust the path as needed
import bcrypt from 'bcrypt';
import RequestError from "../utils/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";

const addUser = async (user: any) => {
    const existingUser = await User.findOne({ email: user.email });

    if (existingUser) {
        throw new RequestError("User already exists", STATUS_CODES.CONFLICT);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = new User({
        name: user.name,
        familyName: user.familyName,
        email: user.email,
        password: hashedPassword,
        dateOfBirth: user.dateOfBirth,
        averageRunningLength: user.averageRunningLength,
        averagePace: user.averagePace
    });

    await newUser.save();
};

const getUserByEmail = async (email: string) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new RequestError("User not found", STATUS_CODES.NOT_FOUND);
    }
    return user;
};

const validatePassword = async (password: string, hashedPassword: string) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
        throw new RequestError("Invalid password", STATUS_CODES.UNAUTHORIZED);
    }
    return isMatch;
};

const deleteUser = async (id: string) => {
    const user = await User.findById(id);
    if (!user) {
        throw new RequestError("User not found", STATUS_CODES.NOT_FOUND);
    }

    await User.deleteOne({ _id: id });
    return `User with ID ${id} deleted successfully.`;
};


const getAllDal = async () => {
    const users = await User.find({});
    return users;
};

export const userDal = {
    addUser,
    getUserByEmail,
    validatePassword,
    deleteUser,
    getAllDal
};
