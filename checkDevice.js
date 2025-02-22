// checkDevice.js

(function() {
  // Update this expected device ID as needed.
  const expectedDeviceID = "4CC92C8B-2CAC-4800-B920-";

  /**
   * Retrieve the system's device ID.
   * In this example, we use localStorage. To test, open the console and run:
   * localStorage.setItem("systemDeviceID", "<your-device-id>");
   */
  function getSystemDeviceId() {
    const id = localStorage.getItem("systemDeviceID");
    console.log("Retrieved systemDeviceID:", id);
    return id;
  }

  // Get the current system device ID.
  const systemDeviceID = getSystemDeviceId();
  console.log("Expected Device ID:", expectedDeviceID);

  // Compare the retrieved device ID to the expected value.
  if (systemDeviceID && systemDeviceID === expectedDeviceID) {
    console.log("Device is valid. Loading dashboard...");
    // The dashboard will continue loading.
  } else {
    console.log("Device is not valid. Redirecting to design2.html...");
    window.location.href = "design2.html";
  }
})();
