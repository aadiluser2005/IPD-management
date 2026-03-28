export const mapPatientResponse = (
  data,
  updateField,
  updateBillField,
  setAttachment,
  setPhoto,
  setPatientPhoto
) => {

  // patientInfo fields
  const patientFields = [
    "fileYear","fileNumber","pName","pAge","pGender","pFather","pAddress",
    "pAadhar","pPincode","pContact","admissionDate","admissionTime",
    "operationDate","operationTime","dischargeDate","dischargeTime",
    "diagnosisProvi","diagnosisFin","consultant","department","operativeProce",
    "bedNum","disease","pvtCharge","genCharge","oxyCharge",
    "monitorCharge","ventiCharge","nursingCharge","doctorFee",
    "consentDate","consentTime","attendantName",
    "guardianName","affidavitDate","amount","witness"
  ];

  patientFields.forEach((field) => {
    if (data[field] !== undefined) {
      updateField(field, data[field]);
    }
  });


  // billInfo fields
  const billFields = [
    "regDay","regChg","cons1Day","cons1Chg","cons2Day","cons2Chg",
    "roomBedDay","roomBedChg","nursingDay","nursingChg",
    "operationDay","operationChg","otlrDay","otlrChg",
    "anaesthesiaDay","anaesthesiaChg","medicineDay","medicineChg",
    "xrayDay","xrayChg","cArmDay","cArmChg","pathologyDay","pathologyChg",
    "monitorEcgDay","monitorEcgChg","incubatorDay","incubatorChg",
    "physiotherapyDay","physiotherapyChg","ultrasoundDay","ultrasoundChg",
    "icuDay","icuChg","assistantDay","assistantChg","implantDay","implantChg",
    "emergencyDay","emergencyChg","oxygenDay","oxygenChg",
    "field22","field23","field24","field25","field26","field27",
    "field28","field29","field30",
    "field22Day","field22Chg","field23Day","field23Chg",
    "field24Day","field24Chg","field25Day","field25Chg",
    "field26Day","field26Chg","field27Day","field27Chg",
    "field28Day","field28Chg","field29Day","field29Chg",
    "field30Day","field30Chg",
    "advanceAmt","total"
  ];

  billFields.forEach((field) => {
    if (data[field] !== undefined) {
      updateBillField(field, data[field]);
    }
  });


  // attachments
  if (data.photo1) setAttachment("photo1", "preview1", data.photo1);
  if (data.photo2) setAttachment("photo2", "preview2", data.photo2);
  if (data.photo3) setAttachment("photo3", "preview3", data.photo3);


  // patient photo
  if (data.patientPhoto) {
    setPatientPhoto(data.patientPhoto);
  }

  // consent photo
  if (data.consentPhoto) {
    setPhoto(data.consentPhoto);
  }

};