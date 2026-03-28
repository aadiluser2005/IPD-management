import usePatientStore from '@/PatientStore/patientStore'
import React, { useEffect } from 'react'
import "./advance.css";

function Advance() {
  const patientInfo=usePatientStore((state)=>state.patientInfo);
   const billInfo=usePatientStore((state)=>state.billInfo);
  

      const dateConversion=(date)=>{

  if(!date) return "";
  
  const [year,month,day]=date.split("-");
  return `${day}-${month}-${year} / `;


 
}

 const handlePrint=()=>{
      
     
     window.print();
     
  }

  useEffect(()=>{
      window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },[])


  function numberToWords(num) {

  const ones = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
    "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen",
    "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];

  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty",
    "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  function convertHundreds(n) {
    let str = "";

    if (n > 99) {
      str += ones[Math.floor(n / 100)] + " Hundred ";
      n = n % 100;
    }

    if (n > 19) {
      str += tens[Math.floor(n / 10)] + " ";
      n = n % 10;
    }

    if (n > 0) {
      str += ones[n] + " ";
    }

    return str.trim();
  }

  if (num === 0) return "Zero Rupees";

  let result = "";

  const crore = Math.floor(num / 10000000);
  num %= 10000000;

  const lakh = Math.floor(num / 100000);
  num %= 100000;

  const thousand = Math.floor(num / 1000);
  num %= 1000;

  const hundred = num;

  if (crore) result += convertHundreds(crore) + " Crore ";
  if (lakh) result += convertHundreds(lakh) + " Lakh ";
  if (thousand) result += convertHundreds(thousand) + " Thousand ";
  if (hundred) result += convertHundreds(hundred);

  return result.trim() + " Rupees Only";
}

  return (
 <div>



<div class="a4-page">

<div class="advance-receipt">

  <div class="topline">
      <div>Subject to Jhansi Jurisdiction</div>
      <div>M.: 09506881992</div>
  </div>

  <div class="header">
      <div class="hospital-name">M.K. HOPE HOSPITAL & DIAGNOSTIC CENTRE</div>
      <div class="subtitle">
          Infront of Medical College Gate No. 2, Mayur Vihar Colony<br/>
          Kanpur Road, Jhansi (U.P.)
      </div>
      <div class="bill-title">ADVANCE RECEIPT</div>
  </div>

  <div class="row">
      Receipt No. <span class="line small-line">{patientInfo.fileNumber}</span>

      Date 
      <span class="line small-line">
      {`${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`}
      </span>
  </div>

  <div class="row">
      Patient Name : <span class="line long-line">{patientInfo.pName}</span>
  </div>

  <div class="row">
      Age : <span class="line small-line">{patientInfo.pAge}</span>

      Gender : <span class="line small-line">{patientInfo.pGender}</span>
  </div>

  <div class="row">
      File No : <span class="line small-line">{patientInfo.fileNumber}</span>

      Admission Date :
      <span class="line small-line">
        {dateConversion(patientInfo.admissionDate).slice(0,10)}
      </span>
  </div>

  <table class="advance-table">
      <thead>
      <tr>
          <th>Particulars</th>
          <th>Amount (₹)</th>
      </tr>
      </thead>

      <tbody>
      <tr>
          <td>Advance Received</td>
          <td>{billInfo.advanceAmt}</td>
      </tr>
      </tbody>
  </table>

  <div class="footer">
      Rupees in words :
      <span class="line full-line">{numberToWords(Number(billInfo.advanceAmt))}</span>
  </div>

  <div class="sign">
      <div>For : <strong>M.K. HOPE HOSPITAL & DIAGNOSTIC CENTRE</strong></div>
      <div>Cashier</div>
  </div>

</div>
</div>
<button className="print-btn" onClick={()=>handlePrint()}>
Print Receipt
</button>

</div>
  )
}

export default Advance