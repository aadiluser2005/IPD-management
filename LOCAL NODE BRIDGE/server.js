const express = require("express");
const axios = require("axios");
const cors = require("cors");
const xml2js = require("xml2js");

const app = express();
const PORT = 3000;
const RD_URL = "http://localhost:11100";

app.use(express.json());

// ✅ Allow your Vercel frontend
app.use(cors({
  origin: "*",   // later replace with your vercel domain
}));

// ----------------------------
// 1️⃣ RD Service Status
// ----------------------------
app.get("/api/rd/status", async (req, res) => {
  try {
    console.log("request coming");
    const response = await axios({
      method: "RDSERVICE",
      url: `${RD_URL}/rd/info`,
      headers: { "Content-Type": "text/xml" },
      data: `<?xml version="1.0"?><RDService></RDService>`
    });

    res.type("application/xml");
    console.log(response);
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ----------------------------
// 2️⃣ Device Info
// ----------------------------
app.get("/api/rd/device-info", async (req, res) => {
  try {
    const response = await axios({
      method: "DEVICEINFO",
      url: `${RD_URL}/rd/info`,
      headers: { "Content-Type": "text/xml" },
      data: `<?xml version="1.0"?><DeviceInfo></DeviceInfo>`
    });

    res.type("application/xml");
    console.log(response);
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ----------------------------
// 3️⃣ Capture Fingerprint
// ----------------------------
app.post("/api/rd/capture", async (req, res) => {
  try {
    const response = await axios({
      method: "CAPTURE",
      url: `${RD_URL}/rd/capture`,
      headers: { "Content-Type": "text/xml" },
      data: `<?xml version="1.0"?>
<PidOptions ver="1.0">
  <Opts 
    fCount="1"
    fType="2"
    iCount="0"
    iType="0"
    pCount="0"
    pType="0"
    format="0"
    pidVer="2.0"
    timeout="10000"
    otp=""
    posh="UNKNOWN"
  />
</PidOptions>`
    });

    res.type("application/xml");
    console.log(response);
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ----------------------------

app.listen(PORT, () => {
  console.log(`🚀 RD Bridge running at http://localhost:${PORT}`);
});