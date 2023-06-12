import { Router } from "express"
import { PrismaUserRepository } from "../../../infra/database/prisma/repositories/prisma-user-repository";
import prisma from "../../database/prisma/index";
import middlewares from "../middlewares";

import auth_routes from "./auth.routes";
import crypto_routes from "./crypto.routes";
import { InMemoryUserRepository } from "../../../app/repositories/in-memory-user-repository";

const routes = Router();

export const userRepository = new InMemoryUserRepository();

routes.use("/", auth_routes);
routes.use("/crypto", crypto_routes);

routes.get("/auth", middlewares.useAuth, (req, res) => {
    return res.json("AUTH")
})

export default routes;