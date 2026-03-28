import mongoose from "mongoose";
import recordSchema from "../Schema/recordPateint.schema.js";


export const RecordModel=mongoose.model("recordPatient",recordSchema);