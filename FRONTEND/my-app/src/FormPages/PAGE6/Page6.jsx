import React, { useState,useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";

import "./Page6.css"
import Page6form from './Page6form';
import Entry from './Entry';
import usePatientStore from '@/PatientStore/patientStore';
import { AdvanceDialog } from './AdvanceDialog.jsx';
import { Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field";
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function Page6() {
   
   const patientInfo=usePatientStore((state)=>state.patientInfo);
  const billInfo=usePatientStore((state)=>state.billInfo);
   const updateBillField=usePatientStore((state)=>state.updateBillField);
    const updatePageInfo=usePatientStore((state)=>state.updatePageInfo);
    const pageShowInfo=usePatientStore((state)=>state.pageShowInfo);
useEffect(() => {
  window.scrollTo({
    top: window.scrollY + 650,
    behavior: "smooth",
  });
}, []);
   

  const handleNext=()=>{
            
       updatePageInfo("page7",true);
    }

    


   const billItems = [
  { id: 1,  label: "Registration", key: "reg" },
  { id: 2,  label: "Cons. Charges I", key: "cons1" },
  { id: 3,  label: "Cons. Charges II", key: "cons2" },
  { id: 4,  label: "Room / Bed Charges", key: "roomBed" },
  { id: 5,  label: "Nursing Charges", key: "nursing" },
  { id: 6,  label: "Operation Charge", key: "operation" },
  { id: 7,  label: "O.T./L.R. Charge", key: "otlr" },
  { id: 8,  label: "Anaesthesia Charge", key: "anaesthesia" },
  { id: 9,  label: "Medicine Charge", key: "medicine" },
  { id: 10, label: "X-Ray Charge", key: "xray" },
  { id: 11, label: "C-Arm Charge", key: "cArm" },
  { id: 12, label: "Pathology Charge", key: "pathology" },
  { id: 13, label: "Monitor / ECG Charge", key: "monitorEcg" },
  { id: 14, label: "Incubator / Phototherapy", key: "incubator" },
  { id: 15, label: "Physiotherapy Charge", key: "physiotherapy" },
  { id: 16, label: "Ultrasound Charge", key: "ultrasound" },
  { id: 17, label: "I.C.U. Charge", key: "icu" },
  { id: 18, label: "Assistant Charge", key: "assistant" },
  { id: 19, label: "Implant Charge", key: "implant" },
  { id: 20, label: "Emergency Charge", key: "emergency" },
  { id: 21, label: "Oxygen (O₂)", key: "oxygen" },
];


const getTotal = () => {
  let total = 0;

  billItems.forEach((item) => {
    const day = Number(billInfo[`${item.key}Day`]) || 0;
    const charge = Number(billInfo[`${item.key}Chg`]) || 0;

    total += day * charge;
  });

  for (let i = 22; i <= 30; i++) {
  total += Number(billInfo[`field${i}Day`]) * Number(billInfo[`field${i}Chg`]);
}
  

total-=billInfo.advanceAmt;
  
  
  
  
  
    
   updateBillField("total",total);

   console.log("executed");
};

const [loading,setLoading]=useState(false);
const navigate=useNavigate();
const updateAdvance = async () => {
   
  setLoading(true);

  const formData = {
    fileNumber: patientInfo.fileNumber,
    fileYear: patientInfo.fileYear,
    amount: billInfo.advanceAmt
  };

  try {

    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/IPDservice/manage-advanceAmount`,
      formData,
      { withCredentials: true }
    );

    console.log(res);
   
    toast.success(res.data.message);
    navigate("/manage/advanceReceipt");
    // window.location.reload();

  } catch (e) {

    console.log(e.response);

    toast.error(e.response.data.message);

  } finally {
     setLoading(false);
    console.log("Working fine");

  }

};




//  console.log("AFTER",showModal);


  return (
     <div className="page grid grid-cols-12 w-full">

  <div className="col-span-6  mt-8 leftCol ">

     <div className='heading'>
        <h1>6. Cash Memo / Bill</h1>
        <p  className='text-gray-400'>Enter the information of the bill</p>
     </div>
   


    <div className='patientForm'>
                 
           {billItems.map((item) => (
  <Entry
    key={item.id}
    subject={`${item.id}. ${item.label}`}
    day={`${item.key}Day`}
    charge={`${item.key}Chg`}
  />
))}


              <div className="flex p-2">


                 <div  className="customField"> <h6>22.</h6> <Input 
                           value={billInfo.field22}
                           onChange={(e)=>updateBillField("field22",e.target.value)}
                           className=""
                           type="text"
                            />  = </div>
                               
                         <div className="custom">
                          
                           <Label htmlFor="22day" className="mr-1 ">Day/Type *</Label>
                           <Input 
                            value={billInfo.field22Day}
                           onChange={(e)=>updateBillField("field22Day",e.target.value)}
                           className=""
                           type="number"
                           id="22day"
                          />
                         </div>
               
                          <div className="custom">
                          
                           <Label htmlFor="22chg" className="mr-1">Charges/Day *</Label>
                           <Input 
                            value={billInfo.field22Chg}
                           onChange={(e)=>updateBillField("field22Chg",e.target.value)}
                           className=""
                           type="number"
                           id="22chg"
                         
                          
                            />
                         </div>
                       
                       </div>


                       <div className="flex p-2">


                 <div  className="customField"> <h6>23.</h6> <Input 
                       value={billInfo.field23}
                           onChange={(e)=>updateBillField("field23",e.target.value)}
                           className=""
                           type="text"
                            />  = </div>
                               
                         <div className="custom">
                          
                           <Label htmlFor="23day" className="mr-1 ">Day / Type *</Label>
                           <Input 
                            value={billInfo.field23Day}
                           onChange={(e)=>updateBillField("field23Day",e.target.value)}
                          
                           className=""
                           type="number"
                           id="23day"
                          />
                         </div>
               
                          <div className="custom">
                          
                           <Label htmlFor="23chg" className="mr-1">Charges / Day *</Label>
                           <Input 
                             value={billInfo.field23Chg}
                           onChange={(e)=>updateBillField("field23Chg",e.target.value)}
                           className=""
                           type="number"
                           id="23chg"
                         
                          
                            />
                         </div>
                       
                       </div>



                       <div className="flex p-2">


                 <div  className="customField"> <h6>24.</h6> <Input 
                   value={billInfo.field24}
                           onChange={(e)=>updateBillField("field24",e.target.value)}
                           className=""
                           type="text"
                            />  = </div>
                               
                         <div className="custom">
                          
                           <Label htmlFor="24day" className="mr-1 ">Day / Type *</Label>
                           <Input 
                             value={billInfo.field24Day}
                           onChange={(e)=>updateBillField("field24Day",e.target.value)}
                           className=""
                           type="number"
                           id="24day"
                          />
                         </div>
               
                          <div className="custom">
                          
                           <Label htmlFor="24chg" className="mr-1">Charges / Day *</Label>
                           <Input 
                             value={billInfo.field24Chg}
                           onChange={(e)=>updateBillField("field24Chg",e.target.value)}
                           className=""
                           type="number"
                           id="24chg"
                         
                          
                            />
                         </div>
                       
                       </div>


                       <div className="flex p-2">


                 <div  className="customField"> <h6>25.</h6> <Input 
                   value={billInfo.field25}
                           onChange={(e)=>updateBillField("field25",e.target.value)}
                           className=""
                           type="text"
                            />  = </div>
                               
                         <div className="custom">
                          
                           <Label htmlFor="25day" className="mr-1 ">Day / Type *</Label>
                           <Input 
                               value={billInfo.field25Day}
                           onChange={(e)=>updateBillField("field25Day",e.target.value)}
                           className=""
                           type="number"
                           id="25day"
                          />
                         </div>
               
                          <div className="custom">
                          
                           <Label htmlFor="25chg" className="mr-1">Charges / Day *</Label>
                           <Input 
                            value={billInfo.field25Chg}
                           onChange={(e)=>updateBillField("field25Chg",e.target.value)}
                           className=""
                           type="number"
                           id="25chg"
                         
                          
                            />
                         </div>
                       
                       </div>


                        <div className="flex p-2">


                 <div  className="customField"> <h6>26.</h6> <Input 
                   value={billInfo.field26}
                           onChange={(e)=>updateBillField("field26",e.target.value)}
                           className=""
                           type="text"
                            />  = </div>
                               
                         <div className="custom">
                          
                           <Label htmlFor="26day" className="mr-1 ">Day / Type *</Label>
                           <Input 
                               value={billInfo.field26Day}
                           onChange={(e)=>updateBillField("field26Day",e.target.value)}
                           className=""
                           type="number"
                           id="26day"
                          />
                         </div>
               
                          <div className="custom">
                          
                           <Label htmlFor="26chg" className="mr-1">Charges / Day *</Label>
                           <Input 
                            value={billInfo.field26Chg}
                           onChange={(e)=>updateBillField("field26Chg",e.target.value)}
                           className=""
                           type="number"
                           id="26chg"
                         
                          
                            />
                         </div>
                       
                       </div>
                      

                       <div className="flex p-2">


                 <div  className="customField"> <h6>27.</h6> <Input 
                   value={billInfo.field27}
                           onChange={(e)=>updateBillField("field27",e.target.value)}
                           className=""
                           type="text"
                            />  = </div>
                               
                         <div className="custom">
                          
                           <Label htmlFor="27day" className="mr-1 ">Day / Type *</Label>
                           <Input 
                               value={billInfo.field27Day}
                           onChange={(e)=>updateBillField("field27Day",e.target.value)}
                           className=""
                           type="number"
                           id="27day"
                          />
                         </div>
               
                          <div className="custom">
                          
                           <Label htmlFor="27chg" className="mr-1">Charges / Day *</Label>
                           <Input 
                            value={billInfo.field27Chg}
                           onChange={(e)=>updateBillField("field27Chg",e.target.value)}
                           className=""
                           type="number"
                           id="27chg"
                         
                          
                            />
                         </div>
                       
                       </div>


                     <div className="flex p-2">


                 <div  className="customField"> <h6>28.</h6> <Input 
                   value={billInfo.field28}
                           onChange={(e)=>updateBillField("field28",e.target.value)}
                           className=""
                           type="text"
                            />  = </div>
                               
                         <div className="custom">
                          
                           <Label htmlFor="28day" className="mr-1 ">Day / Type *</Label>
                           <Input 
                               value={billInfo.field28Day}
                           onChange={(e)=>updateBillField("field28Day",e.target.value)}
                           className=""
                           type="number"
                           id="28day"
                          />
                         </div>
               
                          <div className="custom">
                          
                           <Label htmlFor="28chg" className="mr-1">Charges / Day *</Label>
                           <Input 
                            value={billInfo.field28Chg}
                           onChange={(e)=>updateBillField("field28Chg",e.target.value)}
                           className=""
                           type="number"
                           id="28chg"
                         
                          
                            />
                         </div>
                       
                       </div>


                        <div className="flex p-2">


                 <div  className="customField"> <h6>29.</h6> <Input 
                   value={billInfo.field29}
                           onChange={(e)=>updateBillField("field29",e.target.value)}
                           className=""
                           type="text"
                            />  = </div>
                               
                         <div className="custom">
                          
                           <Label htmlFor="29day" className="mr-1 ">Day / Type *</Label>
                           <Input 
                               value={billInfo.field29Day}
                           onChange={(e)=>updateBillField("field29Day",e.target.value)}
                           className=""
                           type="number"
                           id="29day"
                          />
                         </div>
               
                          <div className="custom">
                          
                           <Label htmlFor="29chg" className="mr-1">Charges / Day *</Label>
                           <Input 
                            value={billInfo.field29Chg}
                           onChange={(e)=>updateBillField("field29Chg",e.target.value)}
                           className=""
                           type="number"
                           id="29chg"
                         
                          
                            />
                         </div>
                       
                       </div>


                        <div className="flex p-2">


                 <div  className="customField"> <h6>30.</h6> <Input 
                   value={billInfo.field30}
                           onChange={(e)=>updateBillField("field30",e.target.value)}
                           className=""
                           type="text"
                            />  = </div>
                               
                         <div className="custom">
                          
                           <Label htmlFor="30day" className="mr-1 ">Day / Type *</Label>
                           <Input 
                               value={billInfo.field30Day}
                           onChange={(e)=>updateBillField("field30Day",e.target.value)}
                           className=""
                           type="number"
                           id="30day"
                          />
                         </div>
               
                          <div className="custom">
                          
                           <Label htmlFor="30chg" className="mr-1">Charges / Day *</Label>
                           <Input 
                            value={billInfo.field30Chg}
                           onChange={(e)=>updateBillField("field30Chg",e.target.value)}
                           className=""
                           type="number"
                           id="30chg"
                         
                          
                            />
                         </div>
                       
                       </div>


                      



              </div>

              {patientInfo.managePatient&&

               <Dialog>
      <form>
     
        <DialogTrigger > <div className={"advBtn"} variant="outline">Pay Advance</div> </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Pay Advance amount</DialogTitle>
            <DialogDescription>
              The amount will be deposited as advance for the given file number and patient name.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
             <Field>
               <Label htmlFor="fileNum">File number</Label>
               <Input  id="fileNum" name="fileNum" defaultValue="" readOnly value={patientInfo.fileNumber}/>
             </Field>
              <Field>
              <Label htmlFor="name-1">Patient Name</Label>
              <Input id="name-1" name="name" defaultValue="" readOnly  value={patientInfo.pName}  />
            </Field>
             <Field>
               <Label htmlFor="amountAmt">Enter advance amount </Label>
               <Input  type="number" id="amountAmt" name="advanceAmt" defaultValue="@peduarte" value={billInfo.advanceAmt===0?"":billInfo.advanceAmt} 
               onChange={(e)=>updateBillField("advanceAmt",e.target.value)}
               />
             </Field>
           </FieldGroup>
          <DialogFooter>
            <DialogClose ><Button variant="outline" className={"dialogBtn"}>Cancel</Button></DialogClose>
           
            <DialogClose ><Button type="" className={"dialogBtn"} onClick={()=>updateAdvance()} disabled={loading} >Pay Amount   {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}  </Button></DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
              
              }
              

              
         

              

               <Button className={"totBtn"} variant="outline" onClick={() => getTotal()}>Get Total</Button>



  </div>
  <div className="col-span-6  rightCol">
      <h4 className=' ms-2 mt-2 text-gray-500'>LIVE PREVIEW</h4>
     <Page6form></Page6form>
  </div>
    
   
 
  <Button className={"nextbtn"} variant="outline" onClick={()=>handleNext()} disabled={pageShowInfo.page7} >Next</Button>

</div>
  )
}

export default Page6




// <Dialog>
//       <form>
//         <DialogTrigger render={<Button variant="outline" >Open Dialog</Button>} />
//         <DialogContent className="sm:max-w-sm">
//           <DialogHeader>
//             <DialogTitle>Edit profile</DialogTitle>
//             <DialogDescription>
//               Make changes to your profile here. Click save when you&apos;re
//               done.
//             </DialogDescription>
//           </DialogHeader>
//           <FieldGroup>
//             <Field>
//               <Label htmlFor="fileNum">Enter file number</Label>
//               <Input type="number" id="fileNum" name="fileNum" defaultValue="Pedro Duarte" />
//             </Field>
//             <Field>
//               <Label htmlFor="amount">Enter advance amount</Label>
//               <Input  type="number" id="amount" name="advanceAmt" defaultValue="@peduarte" />
//             </Field>
//           </FieldGroup>
//           <DialogFooter>
//             <DialogClose render={<Button variant="outline">Cancel</Button>} />
//             <Button type="submit">Save changes</Button>
//           </DialogFooter>
//         </DialogContent>
//       </form>
//     </Dialog>