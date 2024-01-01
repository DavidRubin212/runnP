var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcrypt';
import RequestError from "./RequestError.js";
import STATUS_CODES from "./StatusCodes.js";
import { userService } from '../service/userService.js';
const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
        throw new RequestError('Invalid Email', STATUS_CODES.BAD_REQUEST);
    }
};
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt.genSalt();
    return bcrypt.hash(password, salt);
});
const validateLogin = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService.getUserByEmailService(email);
    if (!user) {
        throw new RequestError('User not found', STATUS_CODES.BAD_REQUEST);
    }
    const hash = user[0];
    const isPasswordValid = yield userService.validatePasswordService(password, hash.password);
    if (!isPasswordValid) {
        throw new RequestError('Invalid password', STATUS_CODES.BAD_REQUEST);
    }
    return user;
});
export const validate = {
    validateEmail,
    hashPassword,
    validateLogin
};
//# sourceMappingURL=validate.js.map