import "express-async-errors"

import express from "express";
import cors from "cors";
import prisma from "../database/prisma";
import routes from "./routes";
import errorHandler from "./errors/error-handler";
import { criptografar, descriptografar } from "../../utils/crypto";

prisma.$connect();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorHandler);

// prisma.user.findMany().then(res => console.log(res));

const cryptogra = criptografar("TEST", "oi")
console.log(cryptogra)
console.log(descriptografar(cryptogra, "oi").toString())

const PORT = process.env.PORT || "3333";
app.listen(PORT, () => {
    console.log("Server listen on http://localhost:" + PORT);
})

