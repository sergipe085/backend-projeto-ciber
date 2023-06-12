import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserRepository } from "../../../app/repositories/user-repository";
import { PrismaUserRepository } from "../../database/prisma/repositories/prisma-user-repository";
import { AppError } from "../errors/app-error";
import { InMemoryUserRepository } from "../../../app/repositories/in-memory-user-repository";
import { userRepository } from "../routes";

export async function useAuth(req: Request, res: Response, next: NextFunction) {
    var authToken = req.headers.authorization;

    if (!authToken) {
        throw new AppError("not authenticated", 401);
    }

    const userToken = authToken.split(" ")[1];
    const tokenPayload: any = jwt.verify(userToken, process.env.JWT_SECRET ?? "");

    if (!tokenPayload.email) {
        throw new AppError("not authenticated", 401);
    }

    // const usersRepository: UserRepository = new InMemoryUserRepository();

    var user = await userRepository.findByEmail(tokenPayload.email);

    console.log(user)

    if (!user) {
        throw new AppError("not authenticated", 401);
    }

    req.body.user = user;
    console.log(user);

    next();
}