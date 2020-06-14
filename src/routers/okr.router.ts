import { Router } from "express";
import { findOkr, createOkr } from "../controllers/okr";

const okrRouter = Router();

okrRouter.get("/:id", findOkr);
okrRouter.post("/", createOkr)

export default okrRouter;
