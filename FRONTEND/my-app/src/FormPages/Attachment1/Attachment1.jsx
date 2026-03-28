import React,{useEffect} from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import Attachmentform1 from './Attachmentform1';
import "./Attachment1.css"
import usePatientStore from '@/PatientStore/patientStore'



function Attachment1() {


const setAttachment = usePatientStore((state) => state.setAttachment);
const updatePageInfo=usePatientStore((state)=>state.updatePageInfo);
 const pageShowInfo=usePatientStore((state)=>state.pageShowInfo);
useEffect(() => {
  window.scrollTo({
    top: window.scrollY + 650,
    behavior: "smooth",
  });
}, []);
   

  const handleNext=()=>{
            
       updatePageInfo("page8",true);
    }

  return (
     <div className="page grid grid-cols-12 w-full">

  <div className="col-span-6 mt-8 leftCol ">

     <div className='heading'>
        <h1>7. Attachment-1</h1>
       
     </div>
   
    
     <div className="flex gap-3 p-2">
                        <div className="flex-1">
                         <Label htmlFor="photo">Upload Attachment </Label>
    
                         <Input

                         onChange={(e)=>setAttachment("photo1","preview1",e.target.files[0])}
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
     <Attachmentform1></Attachmentform1>
  </div>
   

  <Button className={"nextbtn"} variant="outline" onClick={()=>handleNext()} disabled={pageShowInfo.page8} >Next</Button>

</div>
  )
}

export default Attachment1