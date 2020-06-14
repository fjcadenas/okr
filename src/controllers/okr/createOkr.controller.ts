import { Request, Response } from "express";
import createOkr from "../../interactors/createOkr.interactor";
import Okr from "../../core/entities/okr";

const createOkrController = async (request: Request, response: Response) => {
  const {
    body,
  } = request;
  const okrData: Okr = {
    companyId: body.companyId,
    title: body.title,
    description: body.description,
    startDate: new Date(body.startDate),
    endDate: new Date(body.endDate),
    createdAt: new Date(),
    modifiedAt: new Date(),
  }
  const okr: Okr = await createOkr(okrData);
  response.json(okr);
};

export default createOkrController;
