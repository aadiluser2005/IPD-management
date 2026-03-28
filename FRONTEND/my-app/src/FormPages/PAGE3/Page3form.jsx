import usePatientStore from '@/PatientStore/patientStore'
import React from 'react'

function Page3form() {
  
    const patientInfo=usePatientStore((state)=>state.patientInfo);


  return (
    <div class="page3">

    <div class="title">अस्पताल का खर्च</div>

    <div class="expense-row">
        <div class="label">प्रतिदिन Pvt. Room (₹)</div>
        <div class="dots">{patientInfo.pvtCharge}</div>
    </div>

    <div class="expense-row">
        <div class="label">प्रतिदिन जनरल वार्ड (₹)</div>
        <div class="dots">{patientInfo.genCharge}</div>
    </div>

    <div class="expense-row">
        <div class="label">ऑक्सीजन (₹)</div>
        <div class="dots">{patientInfo.oxyCharge}</div>
    </div>

    <div class="expense-row">
        <div class="label">मॉनिटर (₹)</div>
        <div class="dots">{patientInfo.monitorCharge}</div>
    </div>

    <div class="expense-row">
        <div class="label">वेन्टिलेटर (₹)</div>
        <div class="dots">{patientInfo.ventiCharge}</div>
    </div>

    <div class="expense-row">
        <div class="label">नर्सिंग (₹) </div>
        <div class="dots">{patientInfo.nursingCharge}</div>
    </div>

    <div class="expense-row">
        <div class="label">डॉक्टर फीस (₹)</div>
        <div class="dots">{patientInfo.doctorFee}</div>
    </div>

   
    <div class="blank-lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>

    </div>

    <div class="signature">
        हस्ताक्षर
    </div>

</div>
  )
}

export default Page3form