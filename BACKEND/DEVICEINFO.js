import axios from "axios";

const RD_BASE_URL = "http://localhost:11100";



/**
 * 2️⃣ Get Device Info
 */
async function getDeviceInfo() {
  try {
    const response = await axios({
      method: "DEVICEINFO",
      url: `${RD_BASE_URL}/rd/info`,
      headers: {
        "Content-Type": "text/xml"
      },
      data: `<?xml version="1.0"?>
<DeviceInfo></DeviceInfo>`
    });

    console.log("Device Info Response:\n", response.data);
    return response.data;
  } catch (error) {
    console.error("Device Info Error:", error.message);
  }
}


await getDeviceInfo();