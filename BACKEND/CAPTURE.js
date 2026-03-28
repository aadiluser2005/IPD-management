import axios from "axios";


const RD_BASE_URL = "http://localhost:11100";
/**
 * 3️⃣ Capture Fingerprint
 */
async function captureFingerprint() {
  try {
    const response = await axios({
      method: "CAPTURE",
      url: `${RD_BASE_URL}/rd/capture`,
      headers: {
        "Content-Type": "text/xml"
      },
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

    console.log("Capture Response:\n", response.data);
    return response.data;
  } catch (error) {
    console.error("Capture Error:", error.message);
  }
}

await captureFingerprint();