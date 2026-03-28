import React from 'react'
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import usePatientStore from '@/PatientStore/patientStore';

function Entry({subject,day,charge}) {
   const billInfo=usePatientStore((state)=>state.billInfo);
  const updateBillField=usePatientStore((state)=>state.updateBillField);
  return (
    <div className="flex gap-3 p-2">
                   
             <div className="single">
               <h6 className='mr-1' >{subject} = </h6>
               <Label htmlFor={`${subject}day`} className="mr-1">Day/Type * </Label>
               <Input 
               value={billInfo[day]}
    onChange={(e)=>updateBillField(day,e.target.value)}
               className=""
               type="number"
               id={`${subject}day`}
             
              
                />
             </div>
   
              <div className="single">
              
               <Label htmlFor={`${subject}chg`} className="mr-1">Charges/Day *</Label>
               <Input 
                value={billInfo[charge]}
    onChange={(e)=>updateBillField(charge,e.target.value)}
               className=""
               type="number"
               id={`${subject}chg`}
             
              
                />
             </div>
           
           </div>
  )
}

export default Entry