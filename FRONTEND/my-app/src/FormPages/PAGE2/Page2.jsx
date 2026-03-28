import React, { useEffect, useState } from 'react'
import Page2form from './Page2form.jsx';
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button"
import "./Page2.css"
import usePatientStore from '@/PatientStore/patientStore.js';
import WebcamCapture from '@/components/ui/WebcamCapture';
import { toast } from 'sonner';

function Page2() {
 

  const patientInfo=usePatientStore((state)=>state.patientInfo);
  const updateField=usePatientStore((state)=>state.updateField);
  const updatePageInfo=usePatientStore((state)=>state.updatePageInfo);
   const pageShowInfo=usePatientStore((state)=>state.pageShowInfo);
   
useEffect(() => {
  window.scrollTo({
    top: window.scrollY + 650,
    behavior: "smooth",
  });
}, []);
   

  const handleNext=()=>{

   
     
    
  if (patientInfo.bedNum===""||
   patientInfo.disease===""||
    patientInfo.patientPhoto==null||
   patientInfo.patientPreview==null) {
    toast.warning("Fill all mandatory fields");
    return;
  }
       updatePageInfo("page3",true);
    }



  return (
  <div className="page grid grid-cols-12 w-full">

  <div className="col-span-6  leftCol mt-8">
        
          <div className='heading'>
        <h1>2. Consent Details</h1>
        <p  className='text-gray-400'>Enter the information of the consent</p>
     </div>


     <div className='patientForm'>
              
           <div className="flex gap-3 p-2">
       <div className="flex-1">
         <Label htmlFor="patientName2">Patient Name *</Label>
         <Input 
         value={patientInfo.pName}
    onChange={(e)=>updateField("pName",e.target.value)}
         className="mt-2"
         type="text"
         id="patientName2"
         placeholder="Enter patient name"
        
       
          />
       </div>
     
     </div>


              
           <div className="flex gap-3 p-2">
     
     
       <div className="flex-[5]">
         <Label htmlFor="age2">Age *</Label>
         <Input 
          value={patientInfo.pAge}
     onChange={(e)=>updateField("pAge",e.target.value)}
         className="mt-2" type="number" id="age2" placeholder="Age" />
       </div>
        <div className="flex-[5]">
         <Label htmlFor="bed">Bed No. *</Label>
         <Input
         
           value={patientInfo.bedNum}
     onChange={(e)=>updateField("bedNum",e.target.value)}
         type="number" className="mt-2" id="bed" placeholder="Enter bed number" />
       </div>
     
     
     </div>
     
     
     
     <div className="flex gap-3 p-2">
       <div className="flex-1">
         <Label htmlFor="address2">Address (Local / Permanent) *</Label>
         <Input 
          value={patientInfo.pAddress}
     onChange={(e)=>updateField("pAddress",e.target.value)}
         className="mt-2" id="address2" placeholder="Enter address" />
       </div>
       
     </div>
     
      <div className="flex gap-3 p-2">
       <div className="flex-[5]">
         <Label htmlFor="doctorName">Doctor Name *</Label>
         <Input 

           value={patientInfo.consultant}
     onChange={(e)=>updateField("consultant",e.target.value)}
          className="mt-2"
          type="text"
         id="doctorName"
         placeholder="Enter doctor name"
          />
       </div>
     
       <div className="flex-[5]">
         <Label htmlFor="disease">Disease *</Label>
         <Input 
             value={patientInfo.disease}
     onChange={(e)=>updateField("disease",e.target.value)}          
         className="mt-2" type="text" id="disease" placeholder="Enter disease" />
       </div>
     
     
     </div>
      
     
 
     
     <div className="flex gap-3 p-2">
       <div className="flex-[7]">
         <Label htmlFor="date2">Date of addmission *</Label>
         <Input 

           value={patientInfo.admissionDate}
     onChange={(e)=>updateField("admissionDate",e.target.value)}
          className="mt-2"
          type="date"
         id="date2"
         placeholder="Enter date of admission"
          />
       </div>
     
       <div className="flex-[3]">
         <Label htmlFor="time2">Time of admission *</Label>
         <Input 
            value={patientInfo.admissionTime}
     onChange={(e)=>updateField("admissionTime",e.target.value)}
         className="mt-2" type="time" id="time2" placeholder="Enter time of admission" />
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
       <div className="flex-[7]">
         <Label htmlFor="aadhar2">Aadhar *</Label>
         <Input 
            value={patientInfo.pAadhar}
    onChange={(e)=>updateField("pAadhar",e.target.value)}
          
          className="mt-2"
          type="number"
         id="aadhar2"
         placeholder="Enter aadhar number"
          />
       </div>
     
       <div className="flex-[3]">
         <Label htmlFor="date3">Date *</Label>
         <Input 
           value={patientInfo.admissionDate}
     onChange={(e)=>updateField("admissionDate",e.target.value)}
         
         className="mt-2" type="date" id="date3" placeholder="Enter date" />
       </div>
     
     
     </div>
       
             
         
      
     
     
     
     
    
           </div>
             
             <div className='webCamDiv'>
                {patientInfo.webcamOpen && <WebcamCapture />}
             </div>

           <div className='captureDiv'>
             
       <Button onClick={() => updateField("webcamOpen",true)} className={"fingerCapture"} variant="outline">Capture Image</Button>
      <Button className={"fingerCapture"} variant="outline">Capture fingerprint</Button>
           </div>
            

     
  
  </div>
  <div className="col-span-6  rightCol">

    <h4 className=' ms-2  text-gray-500'>LIVE PREVIEW</h4>
    <Page2form></Page2form></div>
   

  <Button className={"nextbtn"} variant="outline" onClick={()=>handleNext()} disabled={pageShowInfo.page3} >Next</Button>

</div>

  )
}

export default Page2;