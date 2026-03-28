import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { patientRouter } from "./routes/patient.route.js";
import cors from "cors";

const app = express();
dotenv.config();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));






const PORT=process.env.PORT||5000;
const URL=process.env.MONGO_URL;



 const corsOptions = {
   origin: [
     process.env.FRONTEND_URL,
   ],
   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
   allowedHeaders: ["Content-Type", "Authorization"],
   credentials: true
 };
 
 app.use(cors(corsOptions));




app.get("/test",(req,res)=>{
    res.json({message:"Working fine"});
});

app.use("/api/v1/IPDservice",patientRouter);





const start = async () => {
  try {
    console.log(URL);
    await mongoose.connect(URL);
   
    console.log("DB is connected");
    app.listen(PORT, () => {
      console.log(`IPD App is listening on PORT ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start IPD App", err);
    process.exit(1);
  }
};

start();


