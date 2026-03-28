import usePatientStore from '@/PatientStore/patientStore'
import React from 'react'

function Page4form() {
   
    const patientInfo=usePatientStore((state)=>state.patientInfo);
  

    

  return (
    <div class="page4">

    
    <div class="header">
       <div class="hospital-name">M.K. HOSPITAL</div>
        <div class="hospital-sub">(एम. के. होप हॉस्पिटल एंड डायग्नोस्टिक सेंटर, झांसी)</div>
        
       
        <div class="hospital-address">
            मेडिकल कॉलेज गेट नं. 2 के सामने मथुरा विहार कॉलोनी, कानपुर रोड, झांसी (उ.प्र.)
        </div>
    </div>

    
    <div class="top-fields">
        <div class="field-row">
        
                <div class="label">मरीज का नाम:</div>
                <div class="dots" style={{flexGrow:'2'}}>{patientInfo.pName}</div>
           
           
                <div class="label">उम्र:</div>
                <div class="dots">{patientInfo.pAge}</div>
            
        </div>

        <div class="field-row">
          
                <div class="label">पता:</div>
                <div class="dots">{patientInfo.pAddress}</div>
          
        </div>

        <div class="field-row">
           
                <div class="label">दिनांक:</div>
                <div class="dots">{patientInfo.consentDate}</div>
           
         
                <div class="label">समय:</div>
                <div class="dots">{patientInfo.consentTime}</div>
            
        </div>
    </div>

 
    <div class="consent-title">
        <span>सहमति पत्र</span>
    </div>

  
    <div class="blank-area">
           <div className='consentImg' style={{height:"71rem", width:"36rem"}}>
              {patientInfo.consentPreview && (
                 <img src={patientInfo.consentPreview} alt="Preview"/> )} 
                
               

           </div>
    </div>

   
    <div class="footer">
        <div>
            साक्षी :  <div className="dots" style={{width:"fit-content",minWidth:"7rem",  display:"inline-block"}}  >{patientInfo.attendantName}</div> <br/><br/>
            दिनांक:  <div className="dots" style={{width:"fit-content",minWidth:"7rem",display:"inline-block"}}  >{patientInfo.consentDate}</div>
        </div>
        <div>
            रोगी या उसके सम्बन्धी के हस्ताक्षर
             <div className="dots" style={{width:"11rem", marginTop:"3rem"}}  ></div>
        </div>
    </div>

</div>
  )
}

export default Page4form