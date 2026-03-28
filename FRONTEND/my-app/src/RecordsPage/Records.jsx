import usePatientStore from '@/PatientStore/patientStore'
import React, { useState } from 'react'
import "./records.css";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import RecordPage from './RecordPage';
import { Loader2 } from "lucide-react";
import axios from 'axios';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { mapPatientResponse } from '@/utils/mapPatientResponse.js';



function Records() {

  const [loading,setLoading]=useState(false);
  const [viewFileYear,setViewfileYear]=useState("");
  const [viewFileNumber,setViewFileNumber]=useState("");
  const [showRecord,setshowRecord]=useState(false);
  

   const {updateField,updateBillField,setAttachment,setPhoto,setPatientPhoto} = usePatientStore();
  

  const handleView=async()=>{
     setLoading(true);

    const formData={fileYear:viewFileYear,fileNumber:viewFileNumber};

     console.log(formData);

   
     
       
   try {

    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/IPDservice/viewRecord`,
      formData,
      { withCredentials: true }
    );

    console.log(res);

   

    toast.success(res.data.message);

    

    // console.log(data);
    
     

    if(res.status===200){
       const data=res.data.formData;
        mapPatientResponse(data,updateField,updateBillField,setAttachment,setPhoto,setPatientPhoto);
      setshowRecord(true);
    }
    // setTimeout(()=>{
    //    navigate("/manage");
    //   //window.location.reload();

    // },1500);
   

  } catch (e) {

    console.log(e);
    toast.error(e?.response?.data?.message || "Record not found");

  } finally {
      setTimeout(()=>{
         setLoading(false);
     },1500);

    

  }
  }
    

  return (
    <>

      <div className='inputs'>

        <div>
             <Label htmlFor="fileYear">Enter Year *</Label>
        <Input 
        className="mt-2"
        type="number"
        id="fileYear"
        placeholder="Enter file year"
        onChange={(e)=>setViewfileYear(e.target.value)}
        value={viewFileYear}
       
         />
        </div>
  

            <div>

              <Label htmlFor="fileNum">Enter file number *</Label>
        <Input 
        className="mt-2"
        type="number"
        id="fileNum"
        placeholder="Enter file number"
        onChange={(e)=>setViewFileNumber(e.target.value)}
        value={viewFileNumber}
       
         />

            </div>
         
           
         

  </div>

   <Button className='findBtn' onClick={handleView}>Find Record {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} </Button>
   


   {showRecord&&   <RecordPage></RecordPage> }
  
  
    </>

  )
}

export default Records