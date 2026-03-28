import { create } from "zustand";
import { persist } from "zustand/middleware";



const initialPatientInfo = {
  managePatient:false,
  fileYear:"",
  fileNumber:"",
  pName:"",
  pAge:"",
  pGender:"",
  pFather:"",
  pAddress:"",
  pAadhar:"",
  pPincode:"",
  pContact:"",
  admissionDate:"",
  admissionTime:"",
  operationDate:"",
  operationTime:"",
  dischargeDate:"",
  dischargeTime:"",
  diagnosisProvi:"",
  diagnosisFin:"",
  consultant:"",
  department:"",
  operativeProce:"",

  bedNum:"",
  disease:"",
  patientPhoto:null,
  patientPreview:null,
  webcamOpen:false,

  pvtCharge:"",
  genCharge:"",
  oxyCharge:"",
  monitorCharge:"",
  ventiCharge:"",
  nursingCharge:"",
  doctorFee:"",

  consentDate:"",
  consentTime:"",
  attendantName:"",
  consentPhoto:null,
  consentPreview:null,

  guardianName:"",
  affidavitDate:"",
  amount:"",
  witness:"",
};


const initialBillInfo = {
  regDay:"",
  regChg:"",
  cons1Day:"",
  cons1Chg:"",
  cons2Day:"",
  cons2Chg:"",
  roomBedDay:"",
  roomBedChg:"",
  nursingDay:"",
  nursingChg:"",
  operationDay:"",
  operationChg:"",
  otlrDay:"",
  otlrChg:"",
  anaesthesiaDay:"",
  anaesthesiaChg:"",
  medicineDay:"",
  medicineChg:"",
  xrayDay:"",
  xrayChg:"",
  cArmDay:"",
  cArmChg:"",
  pathologyDay:"",
  pathologyChg:"",
  monitorEcgDay:"",
  monitorEcgChg:"",
  incubatorDay:"",
  incubatorChg:"",
  physiotherapyDay:"",
  physiotherapyChg:"",
  ultrasoundDay:"",
  ultrasoundChg:"",
  icuDay:"",
  icuChg:"",
  assistantDay:"",
  assistantChg:"",
  implantDay:"",
  implantChg:"",
  emergencyDay:"",
  emergencyChg:"",
  oxygenDay:"",
  oxygenChg:"",

  field22:"",
  field23:"",
  field24:"",
  field25:"",
  field26:"",
  field27:"",
  field28:"",
  field29:"",
  field30:"",

  field22Day:"",
  field22Chg:"",
  field23Day:"",
  field23Chg:"",
  field24Day:"",
  field24Chg:"",
  field25Day:"",
  field25Chg:"",
  field26Day:"",
  field26Chg:"",
  field27Day:"",
  field27Chg:"",
  field28Day:"",
  field28Chg:"",
  field29Day:"",
  field29Chg:"",
  field30Day:"",
  field30Chg:"",

  advanceAmt:"",
  total:"",
};

const initialAttachment = {
  photo1:null,
  preview1:null,
  photo2:null,
  preview2:null,
  photo3:null,
  preview3:null,
};


const initialPageShowInfo = {
  page2:false,
  page3:false,
  page4:false,
  page5:false,
  page6:false,
  page7:false,
  page8:false,
  page9:false,
};


// const usePatientStore = create((set) => ({
// //   patientInfo: {

// //     // PAGE1
// //     fileYear:"",
// //     fileNumber:"",
// //     pName: "",
// //     pAge: "",
// //     pGender: "",
// //     pFather: "",
// //     pAddress: "",
// //     pAadhar: "",
// //     pPincode: "",
// //     pContact: "",
// //     admissionDate: "",
// //     admissionTime: "",
// //     operationDate: "",
// //     operationTime: "",
// //     dischargeDate:"",
// //     dischargeTime:"",
// //     diagnosisProvi: "",
// //     diagnosisFin: "",
// //     consultant: "",
// //     department: "",
// //     operativeProce: "",

// //     // PAGE2
    
// //     bedNum:"",
// //     disease:"",
// //      patientPhoto:null,
// //    patientPreview:null,
// //    webcamOpen:false,
    
// //    //PAGE3
    
// //    pvtCharge:"",
// //    genCharge:"",
// //    oxyCharge:"",
// //    monitorCharge:"",
// //    ventiCharge:"",
// //    nursingCharge:"",
// //    doctorFee:"",


// //    //PAGE4 
// //    consentDate:"",
// //    consentTime:"",
// //    attendantName:"",
// //    consentPhoto:null,
// //    consentPreview:null,
  

// //    //PAGE5
    
// //    guardianName:"",
// //    affidavitDate:"",
// //    amount:"",
// //    witness:"",

// //   },

// // billInfo: {
// //   regDay: "",
// //   regChg: "",

// //   cons1Day: "",
// //   cons1Chg: "",

// //   cons2Day: "",
// //   cons2Chg: "",

// //   roomBedDay: "",
// //   roomBedChg: "",

// //   nursingDay: "",
// //   nursingChg: "",

// //   operationDay: "",
// //   operationChg: "",

// //   otlrDay: "",
// //   otlrChg: "",

// //   anaesthesiaDay: "",
// //   anaesthesiaChg: "",

// //   medicineDay: "",
// //   medicineChg: "",

// //   xrayDay: "",
// //   xrayChg: "",

// //   cArmDay: "",
// //   cArmChg: "",

// //   pathologyDay: "",
// //   pathologyChg: "",

// //   monitorEcgDay: "",
// //   monitorEcgChg: "",

// //   incubatorDay: "",
// //   incubatorChg: "",

// //   physiotherapyDay: "",
// //   physiotherapyChg: "",

// //   ultrasoundDay: "",
// //   ultrasoundChg: "",

// //   icuDay: "",
// //   icuChg: "",

// //   assistantDay: "",
// //   assistantChg: "",

// //   implantDay: "",
// //   implantChg: "",

// //   emergencyDay: "",
// //   emergencyChg: "",

// //   oxygenDay: "",
// //   oxygenChg: "",

  
// //   field22:"",
// //   field23:"",
// //   field24:"",
// //   field25:"",
// //   field26:"",
// //   field27:"",
// //   field28:"",
// //   field29:"",
// //   field30:"",

// //   field22Day:"",
// //   field22Chg:"",

// //    field23Day:"",
// //   field23Chg:"",

// //   field24Day:"",
// //   field24Chg:"",

// //   field25Day:"",
// //   field25Chg:"",

// //   field26Day:"",
// //   field26Chg:"",

// //   field27Day:"",
// //   field27Chg:"",

// //   field28Day:"",
// //   field28Chg:"",

// //   field29Day:"",
// //   field29Chg:"",

// //   field30Day:"",
// //   field30Chg:"",

 
// //  advanceAmt:"",
// //   total:"",
// // },





// //   attachment: {
// //     photo1: null,
// //     preview1: null,
// //     photo2: null,
// //     preview2: null,
// //     photo3: null,
// //     preview3: null,
// //   },

// //   pageShowInfo:{
// //   page2:false,
// //   page3:false,
// //   page4:false,
// //   page5:false,
// //   page6:false,
// //   page7:false,
// //   page8:false,
// //   page9:false,
// // },



// patientInfo: initialPatientInfo,
// billInfo: initialBillInfo,
// attachment: initialAttachment,
// pageShowInfo: initialPageShowInfo,

//   showModal:true,

//   setShowModal:(value)=>set({showModal:value}),




   
//   updateField:(field,value)=>set((state)=>({
//     patientInfo:{...state.patientInfo,
//         [field]:value,
//     },

//   })),

//    updateBillField:(field,value)=>set((state)=>({
//     billInfo:{...state.billInfo,
//         [field]:value,
//     },

//   })),


// setPhoto: (file) =>
//   set((state) => {

//     const oldPreview = state.patientInfo.consentPreview;
//     // this is to remove temporary blob URL to avoid unnecessary browser memory usage
//     if (oldPreview && oldPreview.startsWith("blob:")) {
//       URL.revokeObjectURL(oldPreview);
//     }

//     let preview = null;

//     if (file instanceof File) {
//       preview = URL.createObjectURL(file);
//     } else if (typeof file === "string") {
//       preview = file; // backend URL
//     }

//     return {
//       patientInfo: {
//         ...state.patientInfo,
//         consentPhoto: file,
//         consentPreview: preview,
//       },
//     };
//   }),



//    setPatientPhoto: (file) =>
//   set((state) => {

//     const oldPreview = state.patientInfo.patientPreview;
//     // this is to remove temporary blob URL to avoid unnecessary browser memory usage
//     if (oldPreview && oldPreview.startsWith("blob:")) {
//       URL.revokeObjectURL(oldPreview);
//     }

//     let preview = null;

//     if (file instanceof File) {
//       preview = URL.createObjectURL(file);
//     } else if (typeof file === "string") {
//       preview = file; // backend URL
//     }

//     return {
//       patientInfo: {
//         ...state.patientInfo,
//         patientPhoto: file,
//         patientPreview: preview,
//       },
//     };
//   }),


// setAttachment: (photoKey, previewKey, file) =>
//   set((state) => {

//     const oldPreview = state.attachment[previewKey];
//     // this is to remove temporary blob URL to avoid unnecessary browser memory usage
//     if (oldPreview && oldPreview.startsWith("blob:")) {
//       URL.revokeObjectURL(oldPreview);
//     }

//     let preview = null;

//     if (file instanceof File) {
//       preview = URL.createObjectURL(file);
//     } else if (typeof file === "string") {
//       preview = file; // backend URL
//     }

//     return {
//       attachment: {
//         ...state.attachment,
//         [photoKey]: file,
//         [previewKey]: preview,
//       },
//     };
//   }),



//     updatePageInfo:(field,value)=>set((state)=>({
//     pageShowInfo:{...state.pageShowInfo,
//         [field]:value,
//     },

//   })),




//   resetPateint: () =>
//   set(() => ({
//     patientInfo: { ...initialPatientInfo },
//     billInfo: { ...initialBillInfo },
//     attachment: { ...initialAttachment },
//     pageShowInfo: { ...initialPageShowInfo },
//   })),



// }));



const usePatientStore = create(
  persist(
    (set) => ({

      patientInfo: initialPatientInfo,
      billInfo: initialBillInfo,
      attachment: initialAttachment,
      pageShowInfo: initialPageShowInfo,

      showModal:true,

      setShowModal:(value)=>set({showModal:value}),

      updateField:(field,value)=>set((state)=>({
        patientInfo:{
          ...state.patientInfo,
          [field]:value,
        },
      })),

       updateBillField:(field,value)=>set((state)=>({
    billInfo:{...state.billInfo,
        [field]:value,
    },

  })),


setPhoto: (file) =>
  set((state) => {

    const oldPreview = state.patientInfo.consentPreview;
    // this is to remove temporary blob URL to avoid unnecessary browser memory usage
    if (oldPreview && oldPreview.startsWith("blob:")) {
      URL.revokeObjectURL(oldPreview);
    }

    let preview = null;

    if (file instanceof File) {
      preview = URL.createObjectURL(file);
    } else if (typeof file === "string") {
      preview = file; // backend URL
    }

    return {
      patientInfo: {
        ...state.patientInfo,
        consentPhoto: file,
        consentPreview: preview,
      },
    };
  }),



   setPatientPhoto: (file) =>
  set((state) => {

    const oldPreview = state.patientInfo.patientPreview;
    // this is to remove temporary blob URL to avoid unnecessary browser memory usage
    if (oldPreview && oldPreview.startsWith("blob:")) {
      URL.revokeObjectURL(oldPreview);
    }

    let preview = null;

    if (file instanceof File) {
      preview = URL.createObjectURL(file);
    } else if (typeof file === "string") {
      preview = file; // backend URL
    }

    return {
      patientInfo: {
        ...state.patientInfo,
        patientPhoto: file,
        patientPreview: preview,
      },
    };
  }),


setAttachment: (photoKey, previewKey, file) =>
  set((state) => {

    const oldPreview = state.attachment[previewKey];
    // this is to remove temporary blob URL to avoid unnecessary browser memory usage
    if (oldPreview && oldPreview.startsWith("blob:")) {
      URL.revokeObjectURL(oldPreview);
    }

    let preview = null;

    if (file instanceof File) {
      preview = URL.createObjectURL(file);
    } else if (typeof file === "string") {
      preview = file; // backend URL
    }

    return {
      attachment: {
        ...state.attachment,
        [photoKey]: file,
        [previewKey]: preview,
      },
    };
  }),



    updatePageInfo:(field,value)=>set((state)=>({
    pageShowInfo:{...state.pageShowInfo,
        [field]:value,
    },

  })),


      resetPateint: () =>
        set(() => ({
          patientInfo: { ...initialPatientInfo },
          billInfo: { ...initialBillInfo },
          attachment: { ...initialAttachment },
          pageShowInfo: { ...initialPageShowInfo },
        })),

    }),
    {
      name: "patient-store",

      // persist only managePatient
      partialize: (state) => ({
        patientInfo: {
          managePatient: state.patientInfo.managePatient,
        },
      }),
    }
  )
);

export default usePatientStore;
