import express, { Request, Response, NextFunction } from "express";
export const route = express.Router();

route.get("/a", (req: Request, res: Response) => {
  res.send("deu certo");
});
