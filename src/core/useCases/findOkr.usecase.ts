import Okr from "../entities/okr";
import OkrRepository from "../repositories/okr.repository";

const findOkr = (okrRepository: OkrRepository) => async (
  okrId: string
): Promise<Okr> => {
  const okr: Okr = await okrRepository.getById(okrId);
  if (!okr) {
    throw Error("Okr not found!");
  }
  return okr;
};

export default findOkr;
