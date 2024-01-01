var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import RequestError from "../types/errors/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";
export const createToken = (email) => {
    if (process.env.JWT_SECRET) {
        const user = { email: email };
        return jwt.sign(user, process.env.JWT_SECRET);
    }
    else {
        throw new RequestError("ACCESS_TOKEN_SECRET is not defined", STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
};
export const autoToken = asyncHandler((req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.token;
    if (!token) {
        throw new RequestError('Not authorized, no token', STATUS_CODES.UNAUTHORIZED);
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.isAdmin = decoded.isAdmin;
        next();
    }
    catch (err) {
        throw new RequestError('Not authorized, token failed', 403);
    }
}));
//# sourceMappingURL=token.js.map