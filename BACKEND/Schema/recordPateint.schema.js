import mongoose from "mongoose";

const recordSchema=new mongoose.Schema({
      // File Info
  fileYear: { type: String, required: true },
  fileNumber: { type: String, required: true },

  // Personal Details
  pName: { type: String, required: true },
  pAge: { type: String },
  pGender: { type: String },
  pFather: { type: String },
  pAddress: { type: String },
  pAadhar: { type: String },
  pPincode: { type: String },
  pContact: { type: String },

  // Admission Details
  admissionDate: { type: String },
  admissionTime: { type: String },
  operationDate: { type: String },
  operationTime: { type: String },
  dischargeDate: { type: String },
  dischargeTime: { type: String },

  diagnosisProvi: { type: String },
  diagnosisFin: { type: String },
  consultant: { type: String },
  department: { type: String },
  operativeProce: { type: String },
  bedNum: { type: String },
  disease: { type: String },

  // Fixed Charges
  pvtCharge: { type: String },
  genCharge: { type: String },
  oxyCharge: { type: String },
  monitorCharge: { type: String },
  ventiCharge: { type: String },
  nursingCharge: { type: String },
  doctorFee: { type: String },

  // Consent Details
  consentDate: { type: String },
  consentTime: { type: String },
  attendantName: { type: String },
  guardianName: { type: String },
  affidavitDate: { type: String },
  amount: { type: String },
  witness: { type: String },

  // Photos (store file path or URL)
  patientPhoto: { type: String },
  consentPhoto: { type: String },
  photo1:{type:String},
   photo2:{type:String},
    photo3:{type:String},

  // Billing Fields
  regDay: {type :String},
  regChg: {type :String},
  cons1Day: {type :String},
  cons1Chg: {type :String},
  cons2Day: {type :String},
  cons2Chg: {type :String},
  roomBedDay: {type :String},
  roomBedChg: {type :String},
  nursingDay: {type :String},
  nursingChg: {type :String},
  operationDay: {type :String},
  operationChg: {type :String},
  otlrDay: {type :String},
  otlrChg: {type :String},
  anaesthesiaDay: {type :String},
  anaesthesiaChg: {type :String},
  medicineDay: {type :String},
  medicineChg: {type :String},
  xrayDay: {type :String},
  xrayChg: {type :String},
  cArmDay: {type :String},
  cArmChg: {type :String},
  pathologyDay: {type :String},
  pathologyChg: {type :String},
  monitorEcgDay: {type :String},
  monitorEcgChg: {type :String},
  incubatorDay: {type :String},
  incubatorChg: {type :String},
  physiotherapyDay: {type :String},
  physiotherapyChg: {type :String},
  ultrasoundDay: {type :String},
  ultrasoundChg: {type :String},
  icuDay: {type :String},
  icuChg: {type :String},
  assistantDay: {type :String},
  assistantChg: {type :String},
  implantDay: {type :String},
  implantChg: {type :String},
  emergencyDay: {type :String},
  emergencyChg: {type :String},
  oxygenDay: {type :String},
  oxygenChg: {type :String},

  field22: {type :String},
  field23: {type :String},
  field24: {type :String},
  field25: {type :String},
  field26: {type :String},
  field27: {type :String},
  field28: {type :String},
  field29: {type :String},
  field30: {type :String},

  field22Day: {type :String},
  field22Chg: {type :String},
  field23Day: {type :String},
  field23Chg: {type :String},
  field24Day: {type :String},
  field24Chg: {type :String},
  field25Day: {type :String},
  field25Chg: {type :String},
  field26Day: {type :String},
  field26Chg: {type :String},
  field27Day: {type :String},
  field27Chg: {type :String},
  field28Day: {type :String},
  field28Chg: {type :String},
  field29Day: {type :String},
  field29Chg: {type :String},
  field30Day: {type :String},
  field30Chg: {type :String},

  advanceAmt: {type :Number, default:0},
  total: { type: Number, default:0 } // since you're receiving 10300 as number
}, { timestamps: true });

recordSchema.index(
    {fileYear:1,fileNumber:1},
    {unique:true}
);

export default recordSchema;