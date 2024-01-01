var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import RequestError from "../utils/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";
import { validate } from '../utils/validate.js';
import { userDal } from '../dal/userDal.js';
const register = (userInput) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate email format
    validate.validateEmail(userInput.email);
    // hash password
    const hashedPassword = yield validate.hashPassword(userInput.password);
    // Create user object    
    const newUser = {
        id: userInput.id,
        first_name: userInput.first_name,
        last_name: userInput.last_name,
        email: userInput.email,
        password: hashedPassword,
        isAdmin: userInput.isAdmin
    };
    // Register the user
    const addedUser = yield userDal.addUser(newUser);
    return { message: "User registered successfully", user: addedUser };
});
const getUserByEmailService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDal.getUserByEmail(email);
    if (data)
        return data;
    throw new RequestError("error getting .service", STATUS_CODES.INTERNAL_SERVER_ERROR);
});
const validatePasswordService = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDal.validatePassword(password, hashedPassword);
    if (data)
        return data;
    throw new RequestError("error validate Password .service", STATUS_CODES.UNAUTHORIZED);
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userDal.deleteUser(id);
    if (!user) {
        throw new RequestError("error delete user", STATUS_CODES.NOT_FOUND);
    }
    return user;
});
const allUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDal.getAllDal();
    if (data)
        return data;
    throw new RequestError("error getting all users .service", STATUS_CODES.INTERNAL_SERVER_ERROR);
});
export const userService = {
    register,
    getUserByEmailService,
    validatePasswordService,
    deleteUser,
    allUsers
};
//# sourceMappingURL=userService.js.map