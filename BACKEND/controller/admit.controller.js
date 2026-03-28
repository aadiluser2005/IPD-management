import { AdmitModel } from "../Model/admitPatient.model.js";
import { fileCounterModel } from "../Model/fileCounter.model.js";
import cloudinary from "../utils/cloudinary.js";

// export const admit = async (req, res) => {
//    console.log("received");

//   // // File
//   // console.log("File:", req.file);

//   // // FormData text fields come as strings
//   const patientData = JSON.parse(req.body.patientData);
//   const billData = JSON.parse(req.body.billData);

  
//   // //console.log(req.files);  // all images here
//   // //console.log(req.body);   // other form data




 



//   try {

//    const uploadToCloudinary = (file, folderName) => {
//       return new Promise((resolve, reject) => {
//         if (!file) return resolve(null);

//         const stream = cloudinary.uploader.upload_stream(
//           { folder: folderName },
//           (error, result) => {
//             if (error) {
//               reject(error);
//             }
//             else{
//                  resolve(result);
//             } 
//           }
//         );

//         stream.end(file.buffer); // 🔥 VERY IMPORTANT
//       });
//     };


//   const consentPhoto = req.files?.consentPhoto?.[0];
//   const patientPhoto = req.files?.patientPhoto?.[0];
//   const photo1 = req.files?.photo1?.[0];
//   const photo2 = req.files?.photo2?.[0];
//   const photo3 = req.files?.photo3?.[0];

//    const consentUpload=await uploadToCloudinary(consentPhoto,patientData.pName);
//    const patientUpload=await uploadToCloudinary(patientPhoto,patientData.pName);
//    const photo1Upload=await uploadToCloudinary(photo1,patientData.pName);
//    const photo2Upload=await uploadToCloudinary(photo2,patientData.pName);
//    const photo3Upload=await uploadToCloudinary(photo3,patientData.pName);
  

//   const consentURL=consentUpload?.secure_url;
//    const patientURL=patientUpload?.secure_url;
//    const photo1URL=photo1Upload?.secure_url;
//    const photo2URL=photo2Upload?.secure_url;
//    const photo3URL=photo3Upload?.secure_url;

    

  

//  console.log(consentURL);
//  console.log(patientURL);
//  console.log(photo1URL);
//  console.log(photo2URL);
//  console.log(photo3URL);

//  console.log(patientData);
//  console.log(billData);

//     res.json({ message: "Uploaded to Cloudinary", consentURL });
    
//   } catch (error) {
//   console.log(error);
//     res.status(500).json({ error: "Upload failed" });
//   }
// };


export const admit = async (req, res) => {

  const startTime = Date.now();

  
   let folderName=null;
  try {


    const patientData = JSON.parse(req.body.patientData);
    const billData = JSON.parse(req.body.billData);

    const fileYear = patientData.fileYear;
    const fileNumber = patientData.fileNumber;

     folderName = `${patientData.pName}_${fileYear}_${fileNumber}`;

    

    // 🚨 Duplicate check
    const existing = await AdmitModel.findOne({
      fileYear,
      fileNumber
    });

    if (existing) {
      console.log("duplicate patient");
      return res.status(400).json({
        success: false,
        message: "Patient file already exists"
      });
    }

    const uploadToCloudinary = (file, folderName) => {
      return new Promise((resolve, reject) => {
        if (!file) return resolve(null);

        const stream = cloudinary.uploader.upload_stream(
          { folder: folderName },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        stream.end(file.buffer);
      });
    };

    const consentPhoto = req.files?.consentPhoto?.[0];
    const patientPhoto = req.files?.patientPhoto?.[0];
    const photo1 = req.files?.photo1?.[0];
    const photo2 = req.files?.photo2?.[0];
    const photo3 = req.files?.photo3?.[0];

    const [
      consentUpload,
      patientUpload,
      photo1Upload,
      photo2Upload,
      photo3Upload
    ] = await Promise.all([
      uploadToCloudinary(consentPhoto, folderName),
      uploadToCloudinary(patientPhoto, folderName),
      uploadToCloudinary(photo1, folderName),
      uploadToCloudinary(photo2, folderName),
      uploadToCloudinary(photo3, folderName)
    ]);

    const finalData = {
      ...patientData,
      ...billData,
        advanceAmt:  0,
       total:0,
      consentPhoto: consentUpload?.secure_url || "",
      patientPhoto: patientUpload?.secure_url || "",
      photo1: photo1Upload?.secure_url || "",
      photo2: photo2Upload?.secure_url || "",
      photo3: photo3Upload?.secure_url || ""
    };

    delete finalData.patientPreview;
    delete finalData.consentPreview;
    delete finalData.webcamOpen;

    await AdmitModel.create(finalData);

       const currentYear = new Date().getFullYear().toString();

  await fileCounterModel.findOneAndUpdate(
    { fileYear: currentYear },
    { $inc: { currFileNumber: 1 } },
    { new: true, upsert: true }
  );

    const timeTaken = Date.now() - startTime;

    console.log("Api took ",timeTaken," ms to process request");

    res.status(200).json({
      success: true,
     message:"Admitted successfully"
    });

  }catch (error) {

  const timeTaken = Date.now() - startTime;
  console.log(`Admit API failed in ${timeTaken} ms`);
  console.log(error);

  try {

    if (folderName) {
      await cloudinary.api.delete_resources_by_prefix(`${folderName}/`);
      await cloudinary.api.delete_folder(folderName);
      console.log("Cloudinary cleanup completed");
    }

  } catch (cleanupError) {
    console.log("Cloudinary cleanup failed:", cleanupError);
  }

  res.status(500).json({
    message: "Admission failed",
    error: error.message
  });

}
};


export const info=async(req,res)=>{
  try {

    const currentYear =new Date().getFullYear().toString();

  const counter = await fileCounterModel.findOne({ fileYear: currentYear });

 // const info={fileYear:counter.fileYear,currFileNumber:counter.currFileNumber};
   
  if(!counter){
      // const info={fileYear:counter.fileYear,currFileNumber:counter.currFileNumber};
      console.log("artificial data sent");
      // const info={fileYear:currentYear,currFileNumber:1};

       // const currentYear = new Date().getFullYear().toString();

  const counter = await fileCounterModel.findOneAndUpdate(
    { fileYear: currentYear },
    { $inc: { currFileNumber: 1 } },
    { new: true, upsert: true }
  );
     res.json({message:counter});
     return ;
  }

 console.log("Db data sent");
  res.json({message:counter});
    
  } catch (error) {
    console.log(error);
      res.status(500).json(error);
  }
}


const deleteFolderIfExists = async (folderName) => {
  try {
    // Get all resources inside folder
    const resources = await cloudinary.api.resources({
      type: "upload",
      prefix: folderName + "/",
      max_results: 500
    });

    if (resources.resources.length > 0) {
      const publicIds = resources.resources.map(file => file.public_id);

      // Delete all files
      await cloudinary.api.delete_resources(publicIds);

      console.log(`Deleted existing folder: ${folderName}`);
    }

  } catch (error) {
    console.log("Folder delete error:", error.message);
  }
};