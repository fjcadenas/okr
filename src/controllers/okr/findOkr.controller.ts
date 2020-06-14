import { Request, Response } from "express";
import findOkr from "../../interactors/findOkr.interactor";
import Okr from "../../core/entities/okr";

const findOkrController = async (request: Request, response: Response) => {
  const {
    params: { id },
  } = request;
  const okr: Okr = await findOkr(id);
  response.json(okr);
};

export default findOkrController;
