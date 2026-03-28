import React from 'react'
import usePatientStore from '@/PatientStore/patientStore';


function Page2record() {
  const patientInfo=usePatientStore((state)=>state.patientInfo);
     const {patientPreview}=usePatientStore();
   
    const dateConversion=(date)=>{

  if(!date) return "";
  
  const [year,month,day]=date.split("-");
  return `${day}-${month}-${year} / `;
}


    console.log("Image photo ",patientInfo.patientPhoto);

  return (
   <div class="page2record">

    <div class="header">
          
           <div className="customHeader">
         
          <div className="patientPhoto">{patientInfo.patientPreview && (
                 <img src={patientInfo.patientPreview} alt="Preview"/> )}</div>

          <div className="customDivs">
             <div class="helpline">Helpline No : 09506881992</div>
        <div class="hospital-name">M.K. Hospital</div>
        <div class="subtitle">
            (एम. के. हॉस्पिटल एण्ड डायग्नोस्टिक सेंटर झाँसी)<br/>
            मेडिकल कॉलेज गेट नं 2 के सामने, न्यू विकास कॉलोनी, कानपुर रोड, झाँसी (उ.प्र.)
        </div>
          </div>

        </div>

       
    </div>

    <hr/>

    <div class="form-row" >
        <div className='label'>मरीज का नाम :</div>
        <div class="line" style={{width:"35%"}}>{patientInfo.pName}</div>
        <div className='label'>उम्र :</div>
        <div class="line flex-1">{patientInfo.pAge} </div>
        <div className='label' >पलंग संख्या :</div>
        <div class="line flex-1">{patientInfo.bedNum} </div>
    </div>

    <div class="form-row">
        <div className='label'>पता :</div>
        <div class="line flex-1" >{patientInfo.pAddress}</div>
    </div>

    <div class="form-row">
        <div className='label'>डॉ का नाम :</div>
        <div class="line" style={{width:"40%"}}>{patientInfo.consultant}</div>
        <div className='label'>बीमारी :</div>
        <div class="line flex-1">{patientInfo.disease}</div>
    </div>

    <div class="form-row">
        <div className='label'>भर्ती का दिनांक व समय :</div> 
        <div class="line flex-1">{dateConversion(patientInfo.admissionDate)}{patientInfo.admissionTime}</div>
    </div>

    <div class="form-row">
        <div className='label'>डिस्चार्ज का दिनांक व समय :</div>
        <div class="line flex-1">{dateConversion(patientInfo.dischargeDate)}{patientInfo.dischargeTime}</div>
    </div>

    <div class="title">
        भर्ती कार्य चिकित्सा, शल्य चिकित्सा एवं अन्य कार्यवाही हेतु अधिकार-पत्र
    </div>

    <div class="subtitle-red">
        (MEDICOLEGAL CASES NOT ACCEPTED)
    </div>

    <div class="subtitle-red">
        चिकित्सा हेतु मरीज अथवा उसके रिश्तेदारों द्वारा दी गई सहमति (Consent)
    </div>

<div class="consent-text">
   1. मैं अपना/अपने मरीज का इलाज <div className='consentDiv'></div> में कराना चाहता/चाहती हूँ। मैं इस अस्पताल की सुविधाओं से संतुष्ट हूँ।

2. मुझे इस अस्पताल के कर्मचारियों पर पूरा विश्वास है कि वे मेरे/मेरे मरीज के हित में कार्य करेंगे।

3. मैंने अपने मरीज की बीमारी के बारे में डॉक्टर से पूर्ण जानकारी प्राप्त कर ली है तथा मुझे मरीज की वर्तमान स्थिति, उसके संभावित परिणाम एवं इलाज के विकल्पों की जानकारी दे दी गई है।

4. ऑपरेशन एवं इलाज के दौरान कुछ अप्रत्याशित खतरे, जटिलताएँ एवं ऐसे परिणाम संभव हैं जिनमें मृत्यु अथवा कॉम्प्लिकेशन भी शामिल हो सकते हैं। इलाज में सफलता की कोई गारंटी नहीं दी गई है। पूरी सावधानी के बाद भी इन्हें टालना हमेशा संभव नहीं होता, इसके लिए डॉक्टर अथवा कोई अन्य जिम्मेदार नहीं होगा।

5. मुझे इलाज के सभी विकल्पों की जानकारी दी गई है और मैं अपने डॉक्टर  <div className='consentDiv'></div> तथा उनके सहयोगियों पर पूर्ण आस्था रखता/रखती हूँ। उचित विकल्प चुनने का पूर्ण अधिकार मैं अपने डॉक्टर को देता/देती हूँ।

6. मैं अपना/अपने मरीज का ऑपरेशन किसी भी प्रकार की बेहोशी की दवा में करने की स्वीकृति देता/देती हूँ। मुझे बेहोशी (एनेस्थीसिया) से संबंधित संभावित खतरों के बारे में बता दिया गया है। कभी-कभी मृत्यु भी हो सकती है अथवा मरीज होश में न आ पाए — ये अप्रत्याशित परिणाम संभव हैं, जिनके लिए डॉक्टर/अस्पताल या कर्मचारी जिम्मेदार नहीं होंगे।

7. पहले से मौजूद बीमारियाँ जैसे — खून की कमी, डायबिटीज, हाईपरटेंशन, अस्थमा, ब्रोंकाइटिस, सिगरेट/शराब सेवन, स्मोकिंग, कोलाजेन डिसऑर्डर आदि के कारण बेहोशी के खतरे बढ़ सकते हैं, बेहोशी लंबी हो सकती है तथा अप्रत्याशित परिणाम भी हो सकते हैं। मैंने इन सभी बीमारियों की जानकारी डॉक्टर को दे दी है और इसकी जिम्मेदारी मेरी होगी।

8. मुझे बताया गया है कि ऑपरेशन के दौरान कोई भी असामान्य स्थिति उत्पन्न हो सकती है, जिसमें डॉक्टर एवं उनके सहयोगियों को अपने विवेक से निर्णय लेने का पूर्ण अधिकार होगा।

9. मैं अपनी/अपने मरीज की एलर्जी, पहले से हुई जटिलताओं तथा पूर्व चिकित्सा इतिहास की जानकारी डॉक्टर को दे चुका/चुकी हूँ। न बताए गए तथ्यों से उत्पन्न परिणामों की जिम्मेदारी मेरी होगी।

10. मैं रक्त, रक्त पदार्थ, ग्लूकोज आदि चढ़ाने की आवश्यकता पड़ने पर उसकी स्वीकृति देता/देती हूँ।

11. मैं अपनी/अपने मरीज के  <div className='consentDiv'></div> अंग को काटने/निकालने की स्वीकृति देता/देती हूँ। ऑपरेशन के दौरान खराब पाए गए किसी अन्य अंग अथवा रास्ते को हटाने हेतु आवश्यक होने पर उसकी भी स्वीकृति देता/देती हूँ।

12. मुझे यह जानकारी दी गई है कि इस अस्पताल में अंग प्रत्यारोपण नहीं होता है और न ही अंग लिए जाते हैं।

13. मैं मेटालिक/सिलास्टिक इम्प्लांट (रॉड, स्क्रू, प्लेट, तार इत्यादि) शरीर में डालने की स्वीकृति देता/देती हूँ। मुझे यह भी बताया गया है कि अच्छे से अच्छा इम्प्लांट डालने पर भी उससे मेटल एलर्जी हो सकती है या हड्डी में संक्रमण आ सकता है। ऐसे में इम्प्लांट निकालना पड़ सकता है तथा एक से अधिक ऑपरेशन करने पड़ सकते हैं।

14. मैं अपने चिकित्सीय रिकॉर्ड को संभालकर रखने की जिम्मेदारी स्वयं लेता/लेती हूँ। अस्पताल पर इसकी कोई जिम्मेदारी नहीं होगी।
मुझे अपनी/अपने मरीज की अत्यंत गंभीर अवस्था के बारे में अवगत करा दिया गया है तथा अतिरिक्त खतरों की पूरी जिम्मेदारी मेरी होगी। यह पत्र पुलिस केस/मेडिको-लीगल केस के लिए अमान्य है।
</div>


    <div class="note">
        नोट – अपने सामान तथा रुपयों की रक्षा स्वयं करें। नर्सिंग होम की या किसी कर्मचारी की कोई जिम्मेदारी नहीं होगी।
    </div>

    <div class="footer">
        <div class="signature-box">
            साक्षी : <span style={{color:"#0846AA", fontWeight:600}}>{patientInfo.pAadhar}</span><br/> 
            दिनांक : <span style={{color:"#0846AA", fontWeight:600}}>{dateConversion(patientInfo.admissionDate).slice(0,10)}</span>
            <div class="signature-line-left"></div>
        </div>

        <div class="signature-box" style={{textAlign:"right"}}>
            रोगी या उसके सम्बन्धी के हस्ताक्षर
            <div class="signature-line-right"></div>
        </div>
    </div>

</div>
      
  )
}

export default Page2record