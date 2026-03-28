import Page1 from "@/FormPages/PAGE1/Page1";
import Page2 from "@/FormPages/PAGE2/Page2";
import Page3 from "@/FormPages/PAGE3/Page3";
import Page4 from "@/FormPages/PAGE4/Page4";
import Page5 from "@/FormPages/PAGE5/Page5";
import Page6 from "@/FormPages/PAGE6/Page6";
import Attachment1 from "@/FormPages/Attachment1/Attachment1";
import Attachment2 from "@/FormPages/Attachment2/Attachment2";
import Attachment3 from "@/FormPages/Attachment3/Attachment3";
import usePatientStore from "@/PatientStore/patientStore";
import { useRef,useEffect } from "react";
function Admit(){
  
    const pageShowInfo=usePatientStore((state)=>state.pageShowInfo);
    
    


    return(
        <>
        <Page1 parent={"admit"}></Page1>
       
      
       {pageShowInfo.page2 && <Page2></Page2>}
        {pageShowInfo.page3&&  <Page3></Page3> }
        {pageShowInfo.page4&&  <Page4></Page4> }
        {pageShowInfo.page5&&  <Page5></Page5> }
        {pageShowInfo.page6&&  <Page6></Page6> }
        {pageShowInfo.page7&&  <Attachment1></Attachment1> }
        {pageShowInfo.page8&&  <Attachment2></Attachment2> }
        {pageShowInfo.page9&&  <Attachment3 ></Attachment3> }
        
        </>
    )
}

export default Admit;