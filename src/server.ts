import dotenv from "dotenv";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { route } from "./routers/router";
const app = express();
const PORT = parseInt(`${process.env.PORT || 3000}`);
dotenv.config();
app.use(morgan("tiny"));

app.use(cors());

app.use(helmet());

app.use(express.json());
app.use(route);



;

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));