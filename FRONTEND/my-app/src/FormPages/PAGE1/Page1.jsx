import React, { useEffect, useState } from 'react'
import "./Page1.css";
import Page1form from './Page1form';
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button"
import usePatientStore from '@/PatientStore/patientStore';
import { toast } from 'sonner';


function Page1({parent}) {
 
    const patientInfo=usePatientStore((state)=>state.patientInfo);
    const updateField=usePatientStore((state)=>state.updateField);
    const updatePageInfo=usePatientStore((state)=>state.updatePageInfo);
    const pageShowInfo=usePatientStore((state)=>state.pageShowInfo);
   const resetPatient = usePatientStore((state) => state.resetPateint);   


  

  
const handleNext = () => {



  const requiredFields = [
    "pName",
    "pAge",
    "pGender",
    "pFather",
    "pAddress",
    "pAadhar",
    "pPincode",
    "pContact",
    "admissionDate",
    "admissionTime",
    "diagnosisProvi",
    "diagnosisFin",
    "consultant",
    "department",
    "operativeProce",
  ];

  const isInvalid = requiredFields.some(
    (field) =>
      !patientInfo[field] || patientInfo[field].toString().trim() === ""
  );

  if (isInvalid) {
    toast.warning("Fill all mandatory fields");
    return;
  }

  updatePageInfo("page2", true);
};

useEffect(() => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  if (parent === "admit") {
    updateField("managePateint",false);
    resetPatient();
  }
}, [parent]);

//console.log(parent);


    
   

  return (
  <div className="page grid grid-cols-12 w-full">

  <div className="col-span-6  leftCol mt-8">

     <div className='heading'>
        <h1>1. Patient Details</h1>
        <p  className='text-gray-400'>Enter the primary information of the patient</p>
     </div>
      
      <div className='patientForm'>
         
      <div className="flex gap-3 p-2">
  <div className="flex-[7]">
    <Label htmlFor="patientName">Patient Name *</Label>
    <Input 
    className="mt-2"
    type="text"
    id="patientName"
    placeholder="Enter patient name"
    value={patientInfo.pName}
    onChange={(e)=>updateField("pName",e.target.value)}
     />
  </div>

  <div className="flex-[3]">
    <Label htmlFor="age">Age *</Label>
    <Input
     value={patientInfo.pAge}
     onChange={(e)=>updateField("pAge",e.target.value)}
    className="mt-2" type="number" id="age" placeholder="Age" />
  </div>


</div>


   <div className="flex gap-3 p-2">
     <div className="flex-[3]">
  <Label htmlFor="gender">Select gender *</Label>

  <select
    id="gender"
    className="mt-2 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    defaultValue=""
    onChange={(e)=>updateField("pGender",e.target.value)}
  >
    <option value="" disabled>
      Select your gender
    </option>
    <option value="M">Male</option>
    <option value="F">Female</option>
    <option value="O">Other</option>
  </select>
</div>



   <div className="flex-[7]">
    <Label htmlFor="fathersName">Father's/Husband Name *</Label>
    <Input value={patientInfo.pFather}
     onChange={(e)=>updateField("pFather",e.target.value)}
     className="mt-2" id="fathersName" placeholder="Enter father's/husband name" />
  </div>


       

</div>






<div className="flex gap-3 p-2">
  <div className="flex-1">
    <Label htmlFor="address">Address (Local / Permanent) *</Label>
    <Input 
    value={patientInfo.pAddress}
     onChange={(e)=>updateField("pAddress",e.target.value)}
    
    className="mt-2" id="address" placeholder="Enter address" />
  </div>
  
</div>


 <div className="flex gap-3 p-2">
  <div className="flex-[7]">
    <Label htmlFor="aadhar">Aadhar *</Label>
    <Input 
    value={patientInfo.pAadhar}
    onChange={(e)=>updateField("pAadhar",e.target.value)}
     className="mt-2"
      // min="12"
     max="12"
     type="tele"
     maxLength={12}
    id="aadhar"
    placeholder="Enter aadhar number"
     />
  </div>

  <div className="flex-[3]">
    <Label htmlFor="pincode">Pincode *</Label>
    <Input 
     value={patientInfo.pPincode}
      onChange={(e)=>updateField("pPincode",e.target.value)}
    className="mt-2"  type="tele"  maxLength={6} id="pincode" placeholder="Enter pincode" />
  </div>


</div>

<div className="flex gap-3 p-2">
  <div className="flex-1">
    <Label htmlFor="contact">Contact Phone No. *</Label>
    <Input 
    value={patientInfo.pContact}
     onChange={(e)=>updateField("pContact",e.target.value)}
    type="tele" maxLength={10} className="mt-2" id="contact" placeholder="Enter contact number" />
  </div>
  
</div>


<div className="flex gap-3 p-2">
  <div className="flex-[7]">
    <Label htmlFor="date">Date of addmission *</Label>
    <Input 
    value={patientInfo.admissionDate}
     onChange={(e)=>updateField("admissionDate",e.target.value)}
     className="mt-2"
     type="date"
    id="date"
    placeholder="Enter date of admission"
     />
  </div>

  <div className="flex-[3]">
    <Label htmlFor="time">Time of admission *</Label>
    <Input  
    value={patientInfo.admissionTime}
     onChange={(e)=>updateField("admissionTime",e.target.value)}
    className="mt-2" type="time" id="time" placeholder="Enter time of admission" />
  </div>


</div>

<div className="flex gap-3 p-2">
  <div className="flex-[7]">
    <Label htmlFor="dateOperation">Date of operation *</Label>
    <Input 
    value={patientInfo.operationDate}
    onChange={(e)=>updateField("operationDate",e.target.value)}
     className="mt-2"
     type="date"
    id="dateOperation"
     />
  </div>

  <div className="flex-[3]">
    <Label htmlFor="timeOperation">Time of operation *</Label>
    <Input  
    value={patientInfo.operationTime}
    onChange={(e)=>updateField("operationTime",e.target.value)}
    className="mt-2" type="time" id="timeOperation"  />
  </div>


</div>


<div className="flex gap-3 p-2">
  <div className="flex-[7]">
    <Label htmlFor="dateDischarge">Date of discharge *</Label>
    <Input 
    value={patientInfo.dischargeDate}
    onChange={(e)=>updateField("dischargeDate",e.target.value)}
     className="mt-2"
     type="date"
    id="dateDischarge"
     />
  </div>

  <div className="flex-[3]">
    <Label htmlFor="timeDischarge">Time of discharge *</Label>
    <Input  
    value={patientInfo.dischargeTime}
    onChange={(e)=>updateField("dischargeTime",e.target.value)}
    className="mt-2" type="time" id="timeDischarge"  />
  </div>


</div>

  
        
    
 <div className="flex gap-3 p-2">

     <div className="flex-[5]">
    <Label htmlFor="diagnosis">Diagnosis (Provisional) *</Label>
    <Input 
     value={patientInfo.diagnosisProvi}
      onChange={(e)=>updateField("diagnosisProvi",e.target.value)}
    type="text" className="mt-2" id="diagnosis" placeholder="Enter diagnosis information" />
  </div>

 <div className="flex-[5]">
    <Label htmlFor="diagnosisFinal">Diagnosis (Final) *</Label>
    <Input  
    value={patientInfo.diagnosisFin}
     onChange={(e)=>updateField("diagnosisFin",e.target.value)}
    type="text" className="mt-2" id="diagnosisFinal" placeholder="Enter diagnosis information" />
  </div>

</div>


 <div className="flex gap-3 p-2">
  <div className="flex-[5]">
    <Label htmlFor="consultant">Consultant Incharge *</Label>
    <Input 
    value={patientInfo.consultant}
     onChange={(e)=>updateField("consultant",e.target.value)}
     className="mt-2"
     type="text"
    id="consultant"
    placeholder="Enter consultant incharge"
     />
  </div>

  <div className="flex-[5]">
    <Label htmlFor="department">Department *</Label>
    <Input 
    value={patientInfo.department}
     onChange={(e)=>updateField("department",e.target.value)}
    className="mt-2" type="text" id="department" placeholder="Enter department" />
  </div>


</div>

<div className="flex gap-3 p-2">
  <div className="flex-1">
    <Label htmlFor="procedure">Operative Procedure *</Label>
    <Input 
     value={patientInfo.operativeProce}
      onChange={(e)=>updateField("operativeProce",e.target.value)}
    type="text" className="mt-2" id="procedure" placeholder="Enter operative procedure" />
  </div>
  
</div>
      </div>

  </div>
  <div className="col-span-6  rightCol">
    <h4 className=' ms-2 mt-2 text-gray-500'>LIVE PREVIEW</h4>
    <Page1form parent={parent}></Page1form></div>
   

  <Button className={"nextbtn"} variant="outline" onClick={()=>handleNext()} disabled={pageShowInfo.page2}>Next</Button>

</div>

  )
}

export default Page1