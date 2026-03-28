import usePatientStore from '@/PatientStore/patientStore'
import React, { useState } from 'react'

function Page6form() {
   
    const patientInfo=usePatientStore((state)=>state.patientInfo);
    const billInfo=usePatientStore((state)=>state.billInfo);


    // const [field22,setfield22]=useState("");

    // setfield22(billInfo.field22Day*billInfo.field22Chg);

    const field22=billInfo.field22Day*billInfo.field22Chg;
    const field23=billInfo.field23Day*billInfo.field23Chg;
    const field24=billInfo.field24Day*billInfo.field24Chg;
    const field25=billInfo.field25Day*billInfo.field25Chg;
    const field26=billInfo.field26Day*billInfo.field26Chg;
    const field27=billInfo.field27Day*billInfo.field27Chg;
    const field28=billInfo.field28Day*billInfo.field28Chg;
    const field29=billInfo.field29Day*billInfo.field29Chg;
    const field30=billInfo.field30Day*billInfo.field30Chg;


    




    const dateConversion=(date)=>{

  if(!date) return "";
  
  const [year,month,day]=date.split("-");
  return `${day}-${month}-${year} / `;
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


  return (
   <div class="page6">

    <div class="topline">
        <div >Subject to Jhansi Jurisdiction</div>
        <div>M.: 09506881992</div>
    </div>

    <div class="header">
        <div class="bill-title">Cash Memo / Bill</div>
        <div class="hospital-name6">M.K. HOPE HOSPITAL & DIAGNOSTIC CENTRE</div>
        <div class="subtitle">
            Infront of Medical College Gate No. 2, Mayur Vihar Colony<br/>
            Kanpur Road, Jhansi (U.P.)
        </div>
    </div>

    <div class="row">
        No. <span class="custom-small-line line" style={{width:"5rem"}}>{patientInfo.fileNumber}</span>
        &nbsp;&nbsp; Reg. No. <span class="custom-small-line line" style={{width:"5rem"}}> {patientInfo.fileNumber} </span>
        &nbsp;&nbsp; D.D. <span class="custom-small-line line">{dateConversion(patientInfo.dischargeDate).slice(0,10)}</span>
        &nbsp;&nbsp; D.A. <span class="custom-small-line line">{dateConversion(patientInfo.admissionDate).slice(0,10)}</span>
    </div>

    <div class="row">
        Name: <span class="long-line line">{patientInfo.pName}</span>
    </div>

   <table>
    <tr>
        <th>Sl. No.</th>
        <th>PARTICULARS</th>
        <th>Day / Type</th>
        <th>Charges / Day</th>
        <th>Amount (₹)</th>
        
    </tr>

{billItems.map((item) => (
  <tr key={item.id}>
    <td className="center">{item.id}</td>
    <td>{item.label}</td>
    <td>{billInfo[`${item.key}Day`]}</td>
    <td>{billInfo[`${item.key}Chg`]}</td>
    <td>
      {(Number(billInfo[`${item.key}Day`]) || 0) *
       (Number(billInfo[`${item.key}Chg`]) || 0)}
    </td>
  </tr>
))}


    <tr><td class="center">22</td><td>{billInfo.field22}</td> <td>{billInfo.field22Day}</td><td>{billInfo.field22Chg}</td><td>{field22}</td></tr>
    <tr><td class="center">23</td><td>{billInfo.field23}</td> <td>{billInfo.field23Day}</td><td>{billInfo.field23Chg}</td><td>{field23}</td></tr>
    <tr><td class="center">24</td><td>{billInfo.field24}</td> <td>{billInfo.field24Day}</td><td>{billInfo.field24Chg}</td><td>{field24}</td></tr>
    <tr><td class="center">25</td><td>{billInfo.field25}</td> <td>{billInfo.field25Day}</td><td>{billInfo.field25Chg}</td><td>{field25}</td></tr>
    <tr><td class="center">26</td><td>{billInfo.field26}</td> <td>{billInfo.field26Day}</td><td>{billInfo.field26Chg}</td><td>{field26}</td></tr>
    <tr><td class="center">27</td><td>{billInfo.field27}</td> <td>{billInfo.field27Day}</td><td>{billInfo.field27Chg}</td><td>{field27}</td></tr>
    <tr><td class="center">28</td><td>{billInfo.field28}</td> <td>{billInfo.field28Day}</td><td>{billInfo.field28Chg}</td><td>{field28}</td></tr>
    <tr><td class="center">29</td><td>{billInfo.field29}</td> <td>{billInfo.field29Day}</td><td>{billInfo.field29Chg}</td><td>{field29}</td></tr>
    <tr><td class="center">30</td><td>{billInfo.field30}</td> <td>{billInfo.field30Day}</td><td>{billInfo.field30Chg}</td><td>{field30}</td></tr>
      <tr><td class="center">31</td><td><b>ADVANCE</b></td> <td></td><td></td><td> <b>{billInfo.advanceAmt*-1}</b></td></tr>
   
</table>

    <div class="footer6">
        Rupees in words: <span class="full-line line"></span>
        <div class="right6" style={{marginTop:"10px"}}>
            <strong>Total Rs.</strong> <span class="line small-line" style={{textAlign:"left"}}>{billInfo.total}</span>
        </div>
    </div>

    <div class="sign">
        <div>For : <strong>M.K. HOPE HOSPITAL & DIAGNOSTIC CENTRE</strong></div>
        <div>Cashier</div>
    </div>

</div>
  )
}

export default Page6form