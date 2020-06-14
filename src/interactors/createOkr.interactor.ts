import createOkr from "../core/useCases/createOkr.usecase";
import { okrRepository } from "../dataSources/mongo";

export default createOkr(okrRepository);
