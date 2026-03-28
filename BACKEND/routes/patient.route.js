import { Router } from "express";
import { admit, info } from "../controller/admit.controller.js";
import multer from "multer";
import path from "path";
import { advancePayment, dischargePatient, manageInfo,  managePatientInfo, updatePatient, viewRecord } from "../controller/manage.controller.js";

export const patientRouter = Router();

const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = file.fieldname + ext;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

patientRouter.route("/admit").post(upload.fields([
    { name: "consentPhoto", maxCount: 1 },
    { name: "patientPhoto", maxCount: 1 },
    { name: "photo1", maxCount: 1 },
    { name: "photo2", maxCount: 1 },
    { name: "photo3", maxCount: 1 },
  ]),admit);



  patientRouter.route("/info").get(info);
  patientRouter.route("/manageInfo").get(manageInfo);
  patientRouter.route("/managePatient/:fileYear/:fileNumber").get(managePatientInfo);


  // UPDATE
patientRouter.route("/manage-updatePatient").post(
  upload.fields([
    { name: "consentPhoto", maxCount: 1 },
    { name: "patientPhoto", maxCount: 1 },
    { name: "photo1", maxCount: 1 },
    { name: "photo2", maxCount: 1 },
    { name: "photo3", maxCount: 1 },
  ]),
  updatePatient
);

//Advance amount

patientRouter.route("/manage-advanceAmount").post(advancePayment);

patientRouter.route("/manage-discharge").post(dischargePatient);

patientRouter.route("/viewRecord").post(viewRecord);