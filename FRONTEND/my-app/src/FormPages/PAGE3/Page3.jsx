import React, { useEffect,useState } from 'react'
import "./Page3.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import Page3form from './Page3form.jsx'
import { useStore } from 'zustand';
import usePatientStore from '@/PatientStore/patientStore';
import { toast } from 'sonner';

function Page3() {
   
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

    if(  patientInfo.pvtCharge===""||
   patientInfo.genCharge===""||
   patientInfo.oxyCharge===""||
   patientInfo.monitorCharge===""||
   patientInfo.ventiCharge===""||
  patientInfo.nursingCharge===""||
   patientInfo.doctorFee===""){
       toast.warning("Fill all mandatory fields");
    }else{
          updatePageInfo("page4",true);
    }
            
      
    }

  return (
   <div className="page grid grid-cols-12 w-full">

  <div className="col-span-6  leftCol mt-8 ">

     <div className='heading'>
        <h1>3. Hospital Expenses</h1>
        <p  className='text-gray-400'>Enter the information of the expense</p>
     </div>
   


    <div className='patientForm'>
                 
              <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="perdaypvtCharge">Perday private room *</Label>
            <Input 
             value={patientInfo.pvtCharge}
     onChange={(e)=>updateField("pvtCharge",e.target.value)}
            className="mt-2"
            type="number"
            id="perdaypvtCharge"
            placeholder="Enter perday private charges"
           
          
             />
          </div>
        
        </div>

          <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="perdaygenCharge">Perday general ward *</Label>
            <Input 
              value={patientInfo.genCharge}
     onChange={(e)=>updateField("genCharge",e.target.value)}
            className="mt-2"
            type="number"
            id="perdaygenCharge"
            placeholder="Enter perday general ward charges"
           
          
             />
          </div>
        
        </div>


         <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="oxyCharge">Oxygen charges *</Label>
            <Input 
              value={patientInfo.oxyCharge}
     onChange={(e)=>updateField("oxyCharge",e.target.value)}
            className="mt-2"
            type="number"
            id="oxyCharge"
            placeholder="Enter oxygen charges"
           
          
             />
          </div>
        
        </div>


         <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="monitorCharge">Monitor charges *</Label>
            <Input 

              value={patientInfo.monitorCharge}
     onChange={(e)=>updateField("monitorCharge",e.target.value)}
            className="mt-2"
            type="number"
            id="monitorCharge"
            placeholder="Enter monitor charges"
           
          
             />
          </div>
        
        </div>


           <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="ventiCharge">Ventilator charges *</Label>
            <Input 

              value={patientInfo.ventiCharge}
     onChange={(e)=>updateField("ventiCharge",e.target.value)}
            className="mt-2"
            type="number"
            id="ventiCharge"
            placeholder="Enter ventilator charges"
           
          
             />
          </div>
        
        </div>


         <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="nurseCharge">Nursing charges *</Label>
            <Input 
              value={patientInfo.nursingCharge}
     onChange={(e)=>updateField("nursingCharge",e.target.value)}
            className="mt-2"
            type="number"
            id="nurseCharge"
            placeholder="Enter nursing charges"
           
          
             />
          </div>
        
        </div>


           <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="doctFee">Doctor Fee *</Label>
            <Input 
              value={patientInfo.doctorFee}
     onChange={(e)=>updateField("doctorFee",e.target.value)}
            className="mt-2"
            type="number"
            id="doctFee"
            placeholder="Enter doctor fee"
           
          
             />
          </div>
        
        </div>
   
   
                 

              </div>



  </div>
  <div className="col-span-6  rightCol">
    <h4 className=' ms-2 mt-2 text-gray-500'>LIVE PREVIEW</h4>
     
     <Page3form></Page3form>
  </div>
   

  <Button className={"nextbtn"} variant="outline"  onClick={()=>handleNext()} disabled={pageShowInfo.page4} >Next</Button>

</div>

  )
}

export default Page3