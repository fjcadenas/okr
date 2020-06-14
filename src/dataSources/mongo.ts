import OkrMongo from "./okrMongo.datasource";
import mongoose from "mongoose";

const uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/okr`;

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (errors: any) => {
    if (errors) {
      throw Error("Could not connect to MongoDb");
    }
    console.log("MongoDb connected!");
  }
);

const okrRepository = new OkrMongo();

export { okrRepository };
