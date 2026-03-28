import React, { useState,useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import "./Page4.css";
import Page4form from './Page4form';
import usePatientStore from '@/PatientStore/patientStore';
import { toast } from 'sonner';


function Page4() {
   
  const patientInfo=usePatientStore((state)=>state.patientInfo);
  const updateField=usePatientStore((state)=>state.updateField);
   const {setPhoto}=usePatientStore();
   const updatePageInfo=usePatientStore((state)=>state.updatePageInfo);
 const pageShowInfo=usePatientStore((state)=>state.pageShowInfo);
useEffect(() => {
  window.scrollTo({
    top: window.scrollY + 650,
    behavior: "smooth",
  });
}, []);
   

  const handleNext=()=>{
      
    if( patientInfo.consentDate===""||
   patientInfo.consentTime===""||
   patientInfo.attendantName===""||
   patientInfo.consentPhoto===null||
   patientInfo.consentPreview===null){
      toast.warning("Fill all mandatory fields");
   }else{
       updatePageInfo("page5",true);
   }
  
       
    }




  return (
    <div className="page grid grid-cols-12 w-full">

  <div className="col-span-6 mt-8  leftCol ">

     <div className='heading'>
        <h1>4. Consent letter</h1>
        <p  className='text-gray-400'>Enter the information of the consent</p>
     </div>
   


    <div className='patientForm'>
                 
                 <div className="flex gap-3 p-2">
               <div className="flex-[7]">
                 <Label htmlFor="patientName4">Patient Name *</Label>
                 <Input 
                   value={patientInfo.pName}
    onChange={(e)=>updateField("pName",e.target.value)}
                 className="mt-2"
                 type="text"
                 id="patientName4"
                 placeholder="Enter patient name"
                
                  />
               </div>
             
               <div className="flex-[3]">
                 <Label htmlFor="age4">Age *</Label>
                 <Input 
                      value={patientInfo.pAge}
     onChange={(e)=>updateField("pAge",e.target.value)}
                 className="mt-2" type="number" id="age4" placeholder="Age" />
               </div>
             
             
             </div>

             <div className="flex gap-3 p-2">
               <div className="flex-1">
                 <Label htmlFor="address4">Address  *</Label>
                 <Input 
                      value={patientInfo.pAddress}
     onChange={(e)=>updateField("pAddress",e.target.value)}

                 className="mt-2" id="address4" placeholder="Enter address" />
               </div>
               
             </div>

               <div className="flex gap-3 p-2">
                    <div className="flex-[7]">
                      <Label htmlFor="date4">Date of consent *</Label>
                      <Input 
                             value={patientInfo.consentDate}
     onChange={(e)=>updateField("consentDate",e.target.value)}


                       className="mt-2"
                       type="date"
                      id="date4"
                      placeholder="Enter date of admission"
                       />
                    </div>
                  
                    <div className="flex-[3]">
                      <Label htmlFor="time4">Time of consent *</Label>
                      <Input 
                            value={patientInfo.consentTime}
     onChange={(e)=>updateField("consentTime",e.target.value)}

                      className="mt-2" type="time" id="time4" placeholder="Enter time of admission" />
                    </div>
                  
                  
                  </div>


                  <div className="flex gap-3 p-2">
                    <div className="flex-1">
                     <Label htmlFor="photo">Upload Photo *</Label>

                     <Input

                     onChange={(e)=>{
                      const file=e.target.files[0];

                      if(file){
                         setPhoto(file);
                      }
                     }}
                      
                    id="photo"
                    type="file"
                     accept="image/*"
                     className="
                     cursor-pointer
                     file:mr-4
                     file:rounded-md
                     file:border
                   file:border-gray-200
                    file:bg-gray-300
                     file:px-4
                     file:text-sm
                    file:font-md
                  hover:file:bg-gray-200
                    "
                    />
                       </div>
                  </div>




                   <div className="flex gap-3 p-2">
              <div className="flex-[7]">
                 <Label htmlFor="attendantName">Attendant Name *</Label>
                 <Input 
                    value={patientInfo.attendantName}
     onChange={(e)=>updateField("attendantName",e.target.value)}

                 className="mt-2"
                 type="text"
                 id="attendantName"
                 placeholder="Enter attendant name"
                
                  />


                  </div>
               
             </div>

        


         
      




          


        


  



      
             <Button className={"fingerCapture"} variant="outline">Capture fingerprint</Button>
                 
    
              </div>



  </div>
  <div className="col-span-6  rightCol">
      <h4 className=' ms-2 mt-2 text-gray-500'>LIVE PREVIEW</h4>
     <Page4form></Page4form>
  </div>
   

  <Button className={"nextbtn"} variant="outline" onClick={()=>handleNext()} disabled={pageShowInfo.page5}>Next</Button>

</div>
  )
}

export default Page4