import dotenv from "dotenv";
import "express-async-errors";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import UserRoutes from "./routers/router";

const app = express();

dotenv.config();
app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(UserRoutes);

export default app;
