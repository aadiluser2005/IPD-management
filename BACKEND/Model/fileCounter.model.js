import mongoose from "mongoose";
import fileCounterSchema from "../Schema/fileCounter.schema.js";

export const fileCounterModel=mongoose.model("filecounter",fileCounterSchema);