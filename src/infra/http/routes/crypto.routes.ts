import { Router } from "express"
import { LoginUseCase } from "../../../app/use-cases/auth/login-usecase";
import { RegisterUseCase } from "../../../app/use-cases/auth/register-usecase";
import { PrismaUserRepository } from "../../database/prisma/repositories/prisma-user-repository";
import middlewares from "../middlewares";
import { AddPassword } from "../../../app/use-cases/crypto/add-password";
import { InMemoryPasswordRepository } from "../../../app/repositories/inmemory-password-repository";
import { InMemoryUserRepository } from "../../../app/repositories/in-memory-user-repository";
import { ListPassword } from "../../../app/use-cases/crypto/list-passwords";
import { descriptografar } from "../../../utils/crypto";

const crypto_routes = Router();

const cryptoRepository = new InMemoryUserRepository();
const passwordRepository = new InMemoryPasswordRepository();

crypto_routes.post("/password", middlewares.useAuth, async (req, res) => {
    const { service_name, password, key } = req.body;
    const user = req.body.user;
    console.log(user);

    const add_password = new AddPassword(passwordRepository);
    const response = await add_password.execute({ user_id: user.id, service_name, password, key })

    return res.json(response)
});

crypto_routes.get("/password", middlewares.useAuth, async (req, res) => {
    const user = req.body.user;
    console.log(user);

    const add_password = new ListPassword(passwordRepository);
    const response = await add_password.execute({ user_id: user.id })

    return res.json(response)
});

crypto_routes.post("/descriptografar", (req, res) => {
    const { password, key } = req.body;

    const a = descriptografar(password, key);
    console.log(a.toString())

    return res.json({
        password: a.toString()
    })
})


export default crypto_routes;