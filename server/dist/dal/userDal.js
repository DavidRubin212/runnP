var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from '../schema/User.js'; // Adjust the path as needed
import bcrypt from 'bcrypt';
import RequestError from "../utils/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield User.findOne({ email: user.email });
    if (existingUser) {
        throw new RequestError("User already exists", STATUS_CODES.CONFLICT);
    }
    // Hash password
    const hashedPassword = yield bcrypt.hash(user.password, 10);
    const newUser = new User({
        name: user.name,
        familyName: user.familyName,
        email: user.email,
        password: hashedPassword,
        dateOfBirth: user.dateOfBirth,
        averageRunningLength: user.averageRunningLength,
        averagePace: user.averagePace
    });
    yield newUser.save();
});
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findOne({ email });
    if (!user) {
        throw new RequestError("User not found", STATUS_CODES.NOT_FOUND);
    }
    return user;
});
const validatePassword = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const isMatch = yield bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
        throw new RequestError("Invalid password", STATUS_CODES.UNAUTHORIZED);
    }
    return isMatch;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findById(id);
    if (!user) {
        throw new RequestError("User not found", STATUS_CODES.NOT_FOUND);
    }
    yield User.deleteOne({ _id: id });
    return `User with ID ${id} deleted successfully.`;
});
const getAllDal = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.find({});
    return users;
});
export const userDal = {
    addUser,
    getUserByEmail,
    validatePassword,
    deleteUser,
    getAllDal
};
//# sourceMappingURL=userDal.js.map