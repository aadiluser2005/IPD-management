import { AdmitModel } from "../Model/admitPatient.model.js";
import cloudinary from "../utils/cloudinary.js";



export const manageInfo=async(req,res)=>{
    try {


     

        const allPatient=await AdmitModel.find({isDischarged:false});



       // console.log(allPatient);

        const data=allPatient.map((p)=>{
            return{
             fileYear:p.fileYear,
             fileNumber:p.fileNumber,
            Name:p.pName,
            Contact:p.pContact,
            Date:p.admissionDate

            }
          
        });

        console.log(data);

        res.status(200).json({message:data});
        
    } catch (error) {
         res.status(500).json({message:"Internal Error "});
    }
}

export const managePatientInfo=async(req,res)=>{
    try {

           const { fileYear, fileNumber } = req.params;

    console.log(fileYear);
    console.log(fileNumber);

    const pateintData=await AdmitModel.findOne({fileYear:fileYear,fileNumber:fileNumber});

   // console.log(pateintData);

    res.status(200).json({message:pateintData});
        
    } catch (error) {
         res.status(500).json({message:"Internal Server error"});
    }
}




export const updatePatient = async (req, res) => {

  const startTime = Date.now();
  console.log("Update patient started");

  try {

    const patientData = JSON.parse(req.body.patientData);
    const billData = JSON.parse(req.body.billData);

    const fileYear = patientData.fileYear;
    const fileNumber = patientData.fileNumber;

    const folderName = `${patientData.pName}_${fileYear}_${fileNumber}`;

    // multer files
    const consentPhoto = req.files?.consentPhoto?.[0];
    const patientPhoto = req.files?.patientPhoto?.[0];
    const photo1 = req.files?.photo1?.[0];
    const photo2 = req.files?.photo2?.[0];
    const photo3 = req.files?.photo3?.[0];



    // Fetch existing patient
    const existingPatient = await AdmitModel.findOne({ fileYear, fileNumber });

    if (!existingPatient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found"
      });
    }



    // Helper to extract public_id
    const getPublicId = (url) => {
      if (!url) return null;

      const parts = url.split("/");
      const file = parts.pop();
      const folder = parts.pop();

      return `${folder}/${file.split(".")[0]}`;
    };



    // Delete old images if new uploaded
    if (consentPhoto && existingPatient.consentPhoto) {
      const publicId = getPublicId(existingPatient.consentPhoto);
      await cloudinary.uploader.destroy(publicId);
    }

    if (patientPhoto && existingPatient.patientPhoto) {
      const publicId = getPublicId(existingPatient.patientPhoto);
      await cloudinary.uploader.destroy(publicId);
    }

    if (photo1 && existingPatient.photo1) {
      const publicId = getPublicId(existingPatient.photo1);
      await cloudinary.uploader.destroy(publicId);
    }

    if (photo2 && existingPatient.photo2) {
      const publicId = getPublicId(existingPatient.photo2);
      await cloudinary.uploader.destroy(publicId);
    }

    if (photo3 && existingPatient.photo3) {
      const publicId = getPublicId(existingPatient.photo3);
      await cloudinary.uploader.destroy(publicId);
    }



    // Cloudinary upload helper
    const uploadToCloudinary = (file, folder) => {
      return new Promise((resolve, reject) => {

        if (!file) return resolve(null);

        const stream = cloudinary.uploader.upload_stream(
          { folder },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        stream.end(file.buffer);

      });
    };



    // Upload only files that exist
    const [
      consentUpload,
      patientUpload,
      photo1Upload,
      photo2Upload,
      photo3Upload
    ] = await Promise.all([

      consentPhoto ? uploadToCloudinary(consentPhoto, folderName) : null,
      patientPhoto ? uploadToCloudinary(patientPhoto, folderName) : null,
      photo1 ? uploadToCloudinary(photo1, folderName) : null,
      photo2 ? uploadToCloudinary(photo2, folderName) : null,
      photo3 ? uploadToCloudinary(photo3, folderName) : null

    ]);



    // Merge data
    const finalData = {

      ...patientData,
      ...billData,

      consentPhoto: consentUpload?.secure_url || existingPatient.consentPhoto,
      patientPhoto: patientUpload?.secure_url || existingPatient.patientPhoto,
      photo1: photo1Upload?.secure_url || existingPatient.photo1,
      photo2: photo2Upload?.secure_url || existingPatient.photo2,
      photo3: photo3Upload?.secure_url || existingPatient.photo3

    };



    // Remove frontend fields
    delete finalData.managePatient;
    delete finalData.patientPreview;
    delete finalData.consentPreview;
    delete finalData.webcamOpen;



    // Update database
    const updatedPatient = await AdmitModel.updateOne(
      { fileYear, fileNumber },
      { $set: finalData }
    );



    const timeTaken = Date.now() - startTime;

    console.log("Update API took", timeTaken, "ms");



    res.status(200).json({
      success: true,
      message: "Patient updated successfully",
      data: updatedPatient
    });



  } catch (error) {

    const timeTaken = Date.now() - startTime;

    console.log(`Update API failed in ${timeTaken} ms`);
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Update failed",
      error: error.message
    });

  }

};


export const advancePayment=async(req,res)=>{
  try {

    const {fileNumber,fileYear,amount}=req.body;

    const updatedPatient=await AdmitModel.findOneAndUpdate({fileNumber,fileYear},{
      $inc:{advanceAmt:Number(amount)}
    });

    if(!updatePatient){
      res.status(404).json({message:"Patient Not found"});
      return ;
    }

    console.log(fileNumber,fileYear,amount);

    res.status(200).json({message:"Advance amount deposited "});
    
  } catch (error) {
    console.log(error);
     res.status(500).json({message:"Advance amount failed"});
  }
}


export const dischargePatient=async(req,res)=>{
  try {
       
    const {fileYear,fileNumber}=req.body;


    console.log(fileYear);
    console.log(fileNumber);


    const data=await AdmitModel.findOneAndUpdate({fileYear,fileNumber},{isDischarged:true});



    console.log(data);

    res.status(200).json({message:"Discharged Pateint Successfully"});
  } catch (error) {
    

    console.log(error);
    res.status(500).json({message:"Internal Server error"});
  }
}



export const viewRecord=async(req,res)=>{
  try {

    const {fileYear,fileNumber}=req.body;

    console.log(fileYear,"----------------",fileNumber);

    const data=await AdmitModel.findOne({fileYear,fileNumber,isDischarged:true});

    console.log(data);

    res.status(200).json({formData:data,message:"Found required Pateint"});
    
  } catch (error) {
     
    console.log(error);
    res.status(500).json({message:"No Patient record found"});
  }
}