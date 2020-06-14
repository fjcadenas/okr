import findOkr from "../core/useCases/findOkr.usecase";
import { okrRepository } from "../dataSources/mongo";

export default findOkr(okrRepository);
