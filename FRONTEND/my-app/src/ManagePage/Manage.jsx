import React, { useEffect, useState } from 'react'
import axios from 'axios';
import InfoBox from './InfoBox.jsx';
import { useNavigate } from 'react-router-dom';
import usePatientStore from '@/PatientStore/patientStore.js';
import { mapPatientResponse } from '@/utils/mapPatientResponse.js';

function Manage() {
  const [info,setInfo]=useState([]);

  const {updateField,updateBillField,setAttachment,setPhoto,setPatientPhoto} = usePatientStore();

  
  
 
  useEffect(()=>{
     axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/IPDservice/manageInfo`
,{withCredentials:true}).then((res)=>{
  setInfo(res.data.message);
          //console.log(res);

  }).catch((e)=>{
    console.log(e);
  });
  },[]);

  const navigate=useNavigate();

   const handleManage=(fileYear,fileNumber)=>{
        
    console.log("Received", fileNumber ,"  ", fileYear);

    
    
     axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/IPDservice/managePatient/${fileYear}/${fileNumber}`,
{withCredentials:true}).then((res)=>{
           
         
          console.log(res);
          const data=res.data.message;

          mapPatientResponse(data,updateField,updateBillField,setAttachment,setPhoto,setPatientPhoto);

        
            updateField("managePatient",true);
            navigate("/manage/patient");

  }).catch((e)=>{
    console.log(e);
  })

   }




  return (
    <div>
      <h2 className='mb-3 ms-4 mt-2'>Admitted Patient are shown below</h2>

      {info.length!==0?
       
       info.map((p)=>{
        return (
       <InfoBox fileNumber={p.fileNumber} name={p.Name} contact={p.Contact} date={p.Date} fileYear={p.fileYear} manage={handleManage} ></InfoBox>
        )
           
       })
      
    :<p>No data to show</p>}

    </div>
  )
}

export default Manage;