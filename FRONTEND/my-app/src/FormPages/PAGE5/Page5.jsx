import React ,{useEffect}from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import "./Page5.css"
import Page5form from './Page5form';
import usePatientStore from '@/PatientStore/patientStore';
import { toast } from 'sonner';


function Page5() {
   
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
         if (patientInfo.guardianName===""||
   patientInfo.affidavitDate===""||
    patientInfo.amount===""||
   patientInfo.witness==="") {
    toast.warning("Fill all mandatory fields");
    return;
  }
       updatePageInfo("page6",true);
    }

  return (
 <div className="page grid grid-cols-12 w-full">

  <div className="col-span-6 mt-8  leftCol ">

     <div className='heading'>
        <h1>5. Affidavit</h1>
        <p  className='text-gray-400'>Enter the information of the affidavit</p>
     </div>
   


    <div className='patientForm'>
                 
              <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="patientName5">Patient Name *</Label>
            <Input 
             value={patientInfo.pName}
    onChange={(e)=>updateField("pName",e.target.value)}
            className="mt-2"
            type="text"
            id="patientName5"
            placeholder="Enter patient name"
           
             />
          </div>
        
        </div>

          <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="guardian">Guardian name *</Label>
            <Input 
             value={patientInfo.guardianName}
    onChange={(e)=>updateField("guardianName",e.target.value)}
            className="mt-2"
            type="text"
            id="guardian"
            placeholder="Enter guardian name"
           
          
             />
          </div>
        
        </div>


         <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="date5">Date *</Label>
            <Input 
             value={patientInfo.affidavitDate}
    onChange={(e)=>updateField("affidavitDate",e.target.value)}
            className="mt-2"
            type="date"
            id="date5"
            placeholder="Enter date"
           
          
             />
          </div>
        
        </div>


         <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="amount">Amount *</Label>
            <Input 
             value={patientInfo.amount}
    onChange={(e)=>updateField("amount",e.target.value)}
            className="mt-2"
            type="number"
            id="amount"
            placeholder="Enter amount"
           
          
             />
          </div>
        
        </div>


           <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="witness">Witness *</Label>
            <Input 
             value={patientInfo.witness}
    onChange={(e)=>updateField("witness",e.target.value)}
            className="mt-2"
            type="text"
            id="witness"
            placeholder="Enter witness name"
             />
          </div>
        
        </div>


         <div className="flex gap-3 p-2">
          <div className="flex-1">
            <Label htmlFor="address5">Address *</Label>
            <Input 
             value={patientInfo.pAddress}
     onChange={(e)=>updateField("pAddress",e.target.value)}
            className="mt-2"
            type="text"
            id="address5"
            placeholder="Enter address"
             />
          </div>
        
        </div>


       
   
   
                 

              </div>



  </div>
  <div className="col-span-6  rightCol">
      <h4 className=' ms-2 mt-2 text-gray-500'>LIVE PREVIEW</h4>
     <Page5form></Page5form>
  </div>
   

  <Button className={"nextbtn"} variant="outline" onClick={()=>handleNext()} disabled={pageShowInfo.page6}>Next</Button>

</div>
  )
}

export default Page5