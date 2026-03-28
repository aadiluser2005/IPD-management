import React, { useEffect, useState } from 'react'
import usePatientStore from '@/PatientStore/patientStore';
import axios from 'axios';

function Page1form({parent}) {
   
const patientInfo=usePatientStore((state)=>state.patientInfo);
 const updateField=usePatientStore((state)=>state.updateField);

//const [info,setInfo]=useState(null);

useEffect(()=>{
  if(parent==="manage"){
    return;
  }

      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/IPDservice/info`).then((res)=>{
       // console.log(res);
        const info=res.data.message;
         updateField("fileYear",info.fileYear);
         updateField("fileNumber",info.currFileNumber);
      }).catch((e)=>{
        console.log(e);
      });
},[])


// console.log(info.fileYear);
// console.log(info.lastFileNumber);
//  updateField("fileYear",info.fileYear);
//  updateField("fileNumber",info.lastFileNumber);

//console.log(patientInfo.fileNumber);
const dateConversion=(date)=>{

  if(!date) return "";
  
  const [year,month,day]=date.split("-");
  return `${day}-${month}-${year} / `;
}

  return (
    <div class="page1">

  
    <div class="top-bar">
        <div>Year – {patientInfo.fileYear} / No. <span>{patientInfo.fileNumber}</span></div>
        <div>📞 09506881992</div>
    </div>

    
    <div class="case-title">
        <div className='caseSheet'>CASE SHEET</div>
        <h1>M.K. Hospital</h1>
        <h2>एम. के. होप हॉस्पिटल</h2>
        <p>एण्ड डायग्नोस्टिक सेंटर झाँसी</p>
        <p>
            मेडिकल कॉलेज गेट नं 2 के सामने, न्यू विकास कॉलोनी, कानपुर रोड, झाँसी (उ.प्र.)
        </p>
    </div>

    <div class="divider"></div>

    
    <div class="box-row">
        <div class="box">Reg. No.: {patientInfo.fileNumber}</div>
        <div class="box">Bill No.: {patientInfo.fileNumber}</div>
        <div class="box">Bed No.{patientInfo.bedNum}</div>
    </div>

      
      <div className='contentRow'>
        <div className="top">
            <div class="form-row mt-7">
                 <div class="label">Patient's Name :</div>
                 <div class="line" style={{width:"19.5rem"}} >{patientInfo.pName}</div>
                 <div class="label">Age / Sex :</div>
                  <div class="line flex-1" >{patientInfo.pAge} / {patientInfo.pGender}</div>
            </div>
            
             <div class="form-row mt-7">
                 <div class="label">Father's / Husband Name :</div>
                <div class="line flex-1" >{patientInfo.pFather}</div>
             </div>

             <div class="form-row mt-7">
                 <div class="label">Address (Local / Permanent) :</div>
                 <div class="line flex-1" >{patientInfo.pAddress}</div>
             </div>

              <div class="form-row mt-7">
                 <div class="label">Aadhar :</div>
                 <div class="line flex-1">{patientInfo.pAadhar}</div>
                 <div class="label" style={{marginLeft:"10px"}}>Pin Code :</div>
                 <div class="line" style={{width:"25%"}} >{patientInfo.pPincode}</div>
             </div>

              <div class="form-row mt-7">
                 <div class="label">Contact Phone No. :</div>
                 <div class="line flex-1">{patientInfo.pContact}</div>
             </div>

              <div class="form-row mt-7">
                 <div class="label">Date / Time of Admission :</div>
                  <div class="line flex-1" >{dateConversion(patientInfo.admissionDate)}{patientInfo.admissionTime}</div>
             </div>
              

        </div>
        <div className="bottom">
            <div className="left">

                <div class="form-row">
                <div class="label">Date / Time of Operation :</div>
                 <div class="line flex-1">{dateConversion(patientInfo.operationDate)}{patientInfo.operationTime}</div>
               </div>
              
                <div class="form-row mt-7">
                <div class="label">Date / Time of Discharge :</div>
                <div class="line flex-1">{dateConversion(patientInfo.dischargeDate)}{patientInfo.dischargeTime}</div>
            </div>

              <div class="form-row mt-7">
                <div class="label">Diagnosis (Provisional) :</div>
                <div class="line flex-1">{patientInfo.diagnosisProvi}</div>
            </div>

              <div class="form-row mt-7">
                <div class="label">Diagnosis (Final) :</div>
                <div class="line flex-1">{patientInfo.diagnosisFin}</div>
            </div>


             <div class="form-row mt-7">
                <div class="label">Consultant Incharge :</div>
                <div class="line flex-1">{patientInfo.consultant}</div>
            </div>

               <div class="form-row mt-7">
                <div class="label">Department :</div>
                <div class="line flex-1">{patientInfo.department}</div>
            </div>
              
                <div class="form-row mt-7">
                <div class="label">Operative Procedure :</div>
                <div class="line flex-1">{patientInfo.operativeProce}</div>
            </div>

            </div>
            <div className="right">
                 <h3 className='estimateBox'>Estimate</h3>
            </div>
        </div>
      </div>

    
    
</div>
  )
}

export default Page1form



