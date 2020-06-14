import Okr from "../entities/okr";
import OkrRepository from "../repositories/okr.repository";

const createOkr = (okrRepository: OkrRepository) => async (
  data: Okr
): Promise<Okr> => {
  // todo: do validation
  const result: Okr = await okrRepository.insert(data);
  return result;
};

export default createOkr;
