import React,{useEffect, useState} from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import "./Attachment3.css"
import Attachmentform3 from './Attachmentform3';
import usePatientStore from '@/PatientStore/patientStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from "lucide-react";
import { toast } from 'sonner';



function Attachment3({parent}) {

   const setAttachment=usePatientStore((state)=>state.setAttachment);

   const updatePageInfo=usePatientStore((state)=>state.updatePageInfo);
   const patientInfo=usePatientStore((state)=>state.patientInfo);
   const billInfo=usePatientStore((state)=>state.billInfo);
   const attachment=usePatientStore((state)=>state.attachment);
   
   const navigate=useNavigate();

  
   const [loading,setLoading]=useState(false);
    
useEffect(() => {
  window.scrollTo({
    top: window.scrollY + 650,
    behavior: "smooth",
  });
}, []);

const handleSave = async () => {

  setLoading(true);

  const formData = new FormData();

  formData.append("patientData", JSON.stringify(patientInfo));
  formData.append("billData", JSON.stringify(billInfo));

  if (patientInfo.patientPhoto)
    formData.append("patientPhoto", patientInfo.patientPhoto);

  if (patientInfo.consentPhoto)
    formData.append("consentPhoto", patientInfo.consentPhoto);

  if (attachment.photo1)
    formData.append("photo1", attachment.photo1);

  if (attachment.photo2)
    formData.append("photo2", attachment.photo2);

  if (attachment.photo3)
    formData.append("photo3", attachment.photo3);

  try {

    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/IPDservice/admit`,
      formData,
      { withCredentials: true }
    );

    console.log(res);
    toast.success(res.data.message);
    setTimeout(()=>{
       window.location.reload();
    },2000);
   

  } catch (e) {

    console.log(e.response);
    toast.error(e?.response?.data?.message);

  } finally {

    setLoading(false); // runs AFTER request finishes

  }
};


const handleUpdate = async () => {

  setLoading(true);

  const formData = new FormData();

  formData.append("patientData", JSON.stringify(patientInfo));
  formData.append("billData", JSON.stringify(billInfo));

  if (patientInfo.patientPhoto)
    formData.append("patientPhoto", patientInfo.patientPhoto);

  if (patientInfo.consentPhoto)
    formData.append("consentPhoto", patientInfo.consentPhoto);

  if (attachment.photo1)
    formData.append("photo1", attachment.photo1);

  if (attachment.photo2)
    formData.append("photo2", attachment.photo2);

  if (attachment.photo3)
    formData.append("photo3", attachment.photo3);

  try {

    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/IPDservice/manage-updatePatient`,
      formData,
      { withCredentials: true }
    );

    console.log(res);

   

    toast.success(res.data.message);
    setTimeout(()=>{
       navigate("/manage");
      //window.location.reload();

    },1500);
   

  } catch (e) {

    console.log(e);
    toast.error(e?.response?.data?.message || "Update failed");

  } finally {

    setLoading(false);

  }
};

const handleDischarge=async()=>{

      setLoading(true);
     
      const formData={fileYear:patientInfo.fileYear,fileNumber:patientInfo.fileNumber};

   
     
       
   try {

    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/IPDservice/manage-discharge`,
      formData,
      { withCredentials: true }
    );

    console.log(res);

   

    toast.success(res.data.message);
    setTimeout(()=>{
       navigate("/manage");
      //window.location.reload();

    },1500);
   

  } catch (e) {

    console.log(e);
    toast.error(e?.response?.data?.message || "discharge failed");

  } finally {
      setTimeout(()=>{
         setLoading(false);
     },1500);

    

  }


  console.log("Discharged");
}
   

  return (
     <div className="page grid grid-cols-12 w-full">

  <div className="col-span-6 mt-8  leftCol ">

     <div className='heading'>
        <h1>9. Attachment-3</h1>
       
     </div>
   
    
     <div className="flex gap-3 p-2">
                        <div className="flex-1">
                         <Label htmlFor="photo">Upload Attachment </Label>
    
                         <Input
                          onChange={(e)=>setAttachment("photo3","preview3",e.target.files[0])}
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

   

              



  </div>
  <div className="col-span-6  rightCol">
      <h4 className=' ms-2 mt-2 text-gray-500'>LIVE PREVIEW</h4>
     <Attachmentform3></Attachmentform3>
  </div>
   
  { patientInfo.managePatient===true&&
   <Button className={"dischargeBtn"} variant="outline" onClick={handleDischarge}>Discharge  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} </Button>
  }
  <Button className={patientInfo.managePatient?"saveBtn":"nextbtn"} disabled={loading}  variant="outline" onClick={()=>
    
    {
      patientInfo.managePatient?
        handleUpdate():handleSave();
      }}>
        
        
        {patientInfo.managePatient?"Update":"Admit"}
           {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        </Button>
        

</div>
  )
}

export default Attachment3