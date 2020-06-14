import dotEnv from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

dotEnv.config();

import okrRouter from "./routers/okr.router";

const app = express();
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from express in ts");
});

// configure routers
app.use("/okr", okrRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening in port ${process.env.PORT}`);
});
