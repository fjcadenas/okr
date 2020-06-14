import OkrRepository from "../core/repositories/okr.repository";
import Okr from "../core/entities/okr";
import * as mongoose from "mongoose";

interface OkrDocument extends Okr, mongoose.Document {
  id: string;
}

const okrSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  companyId: { type: String, required: true },
  createdAt: { type: Date, required: true },
  modifiedAt: { type: Date, required: true },
});

class OkrMongo implements OkrRepository {
  private readonly _model: mongoose.Model<OkrDocument>;
  constructor() {
    this._model = mongoose.model<OkrDocument>("Okr", okrSchema, "okrs");
  }

  public async getById(id: string) {
    const okr = await this._model.findById(id);
    if (okr) {
      const { _id, ...record } = okr.toObject({ versionKey: false });
      return { id: _id, ...record };
    }
    return null;
  }

  public async insert(data: Okr): Promise<Okr> {
    const result = await this._model.create(data);
    const { _id, ...record } = result.toObject({ versionKey: false });
    return { id: _id, ...record };
  }
}

export default OkrMongo;
