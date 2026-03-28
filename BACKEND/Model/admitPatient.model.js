import mongoose from "mongoose";
import patientSchema from "../Schema/admitPateint.schema.js";


 export const AdmitModel= mongoose.model("admitPatient", patientSchema);