var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import asyncHandler from "express-async-handler";
import { userService } from "../service/userService.js";
import { createToken } from "../middlewares/token.js";
import RequestError from "../utils/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";
const registerUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reg = yield userService.register(req.body);
    if (!reg) {
        throw new RequestError("An error occurred", STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
    res.status(STATUS_CODES.OK).json(reg);
}));
const validateLogin = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService.getUserByEmailService(email);
    if (!user) {
        throw new RequestError("User not found", STATUS_CODES.UNAUTHORIZED);
    }
    // Ensure user.password is a string before proceeding
    if (typeof user.password !== 'string') {
        // Handle the case where password is null or undefined
        throw new RequestError("Invalid user data", STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
    const isPasswordValid = yield userService.validatePasswordService(password, user.password);
    if (!isPasswordValid) {
        throw new RequestError("Invalid password", STATUS_CODES.UNAUTHORIZED);
    }
    return user;
});
const loginController = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    //   validate
    const user = yield validateLogin(email, password);
    if (!user) {
        throw new RequestError("An error occurred", STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
    //   create token
    const userEmail = req.body.email;
    const token = createToken(userEmail);
    res.setHeader('Authorization', token);
    res.status(STATUS_CODES.OK).json({ user, message: "Login successful" });
}));
const logoutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        console.error('Logout failed:', error);
        res.status(500).json({ error: 'Internal server error . controller logout' });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService.allUsers();
        res.status(200).json({ message: 'gating all users successful', users });
    }
    catch (error) {
        console.error('gating all users failed:', error);
        res.status(500).json({ error: 'Internal server error . controller get all' });
    }
});
// const deleteUser = asyncHandler(async (req: Request, res: Response) => {
//     const id = req.params.id
//     if (!req.isAdmin){
//         throw new RequestError("Only admin can delete", STATUS_CODES.BAD_REQUEST)
//     }
//     const response = await userService.deleteUser(id)
//     if (!response) {
//         throw new RequestError("An error occurred", STATUS_CODES.INTERNAL_SERVER_ERROR)
//     }
//     res.status(STATUS_CODES.OK).json(response)
// })
export const userController = {
    registerUser,
    loginController,
    logoutController,
    getAllUsers,
    // deleteUser
};
//# sourceMappingURL=userController.js.map