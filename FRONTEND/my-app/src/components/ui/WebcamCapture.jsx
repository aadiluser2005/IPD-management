import React, { useRef } from "react";
import Webcam from "react-webcam";
import usePatientStore from "@/PatientStore/patientStore";
import { Button } from "./button";

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user", // front camera
 
};

export default function WebcamCapture() {
  const webcamRef = useRef(null);
  const setPatientPhoto = usePatientStore((state) => state.setPatientPhoto);
  const updateField=usePatientStore((state)=>state.updateField);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    // Convert base64 to File
    const byteString = atob(imageSrc.split(",")[1]);
    const mimeString = imageSrc.split(",")[0].split(":")[1].split(";")[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    const file = new File([ab], "webcam-photo.jpg", {
      type: mimeString,
    });

    setPatientPhoto(file);
    
  };

  return (
    <div className="camDiv">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
         style={{
    borderRadius: "20px"
  }}
      />

     
   
      <Button onClick={()=>{
        capture();
         updateField("webcamOpen",false)
      } } className={"captureBtn"} variant="outline" >Capture</Button>

    </div>
  );
}
