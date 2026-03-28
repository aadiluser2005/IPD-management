import React from 'react'
import usePatientStore from '@/PatientStore/patientStore'



function Page5record() {
  const patientInfo=usePatientStore((state)=>state.patientInfo);
    const dateConversion=(date)=>{

  if(!date) return "";
  
  const [year,month,day]=date.split("-");
  return `${day}-${month}-${year} / `;
}
  return (
   <div class="page5record">

  
    <div class="center5">
        <div class="logo5">शपथ-पत्र</div>
    </div>

    <div class="section5 row5">
        मेरे मरीज का नाम <div className='line5'>{patientInfo.pName}</div>
        &nbsp;&nbsp; पुत्र/पुत्री/पत्नी श्री <span class="long-line5 line5">{patientInfo.guardianName}</span>
    </div>

    <div class="section5 row5">
        मैं, अपनी मर्जी के डॉक्टर साहब / एम.के. होप अस्पताल में दिखाने / भर्ती होने आया हूँ। 
         मुझको कोई दलाल 
    </div>
 
 <div className="row5">या किसी दबाव में नहीं आया हूँ।
        मैं अपनी मर्जी से दिखाना / भर्ती होना चाहता हूँ।</div>
    

    <div class="row5">
        मैं यह कि सेवाओं से संतुष्ट हूँ और मुझसे <span style={{fontWeight:"500", fontSize:"17px"}}>₹</span> 
        <span class="line5">{patientInfo.amount}</span> दिनांक
        <span class="shortLine5">{dateConversion(patientInfo.affidavitDate).slice(0,10)}</span>
        को पैसे लिये गये हैं।
    </div>

    <div class="section5 row5">
        दिनांक <span class="medLine5">{dateConversion(patientInfo.affidavitDate).slice(0,10)}</span>
        &nbsp;&nbsp;&nbsp; गवाह <span class="medLine5">{patientInfo.witness}</span>
        &nbsp;&nbsp;&nbsp; हस्ताक्षर <span class="medLine5"></span>
    </div>

    <div className='horizontalLine5'></div>

    
    <div class="section5 row5 flex">
        मेरे मरीज का नाम <span class="long-line5 line5" style={{width:"fit-content", minWidth:"6rem"}}>{patientInfo.pName}</span>
        &nbsp;&nbsp; निवासी <span class="long-line5 line5 flex-1">{patientInfo.pAddress}</span>
    </div>

    <div class="row5">
        पुत्र / सुपुत्री / पत्नी <span class="long-line5 line5">{patientInfo.guardianName}</span>
        &nbsp;&nbsp; आयुष्मान कार्ड धारक है  लेकिन मैं अपने मरीज का इलाज कैश / निजी खर्च पर करना चाहता हूँ
    </div>

    

    <div class="footer5">
        <div>दिनांक <span class="line5">{dateConversion(patientInfo.affidavitDate).slice(0,10)}</span></div>
        <div>गवाह <span class="line5">{patientInfo.witness}</span></div>
    </div>

</div>
  )
}

export default Page5record