import Okr from "../entities/okr";

interface OkrRepository {
  getById(id: string): Promise<Okr | null>;
  insert(data: Okr): Promise<Okr>;
}

export default OkrRepository;
