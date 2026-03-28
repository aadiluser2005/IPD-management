import axios from "axios";

const RD_BASE_URL = "http://localhost:11100";

/**
 * 1️⃣ Check RD Service Status
 */
async function checkRDService() {
  try {
    const response = await axios({
      method: "RDSERVICE",
      url: `${RD_BASE_URL}/rd/info`,
      headers: {
        "Content-Type": "text/xml"
      },
      data: `<?xml version="1.0"?>
<RDService></RDService>`
    });

    console.log("RD Service Response:\n", response.data);
    return response.data;
  } catch (error) {
    console.error("RD Service Error:", error.message);
  }
}



await checkRDService();

