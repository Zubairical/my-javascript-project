// checkDevice.js

(function() {
  console.log("checkDevice.js loaded"); // Debug log to confirm the file is executed.

  // Expected device ID.
  const expectedDeviceID = "4CC92C8B-2CAC-4800-B920";

  // Retrieve the system's device ID from localStorage.
  const systemDeviceID = localStorage.getItem("systemDeviceID");
  console.log("Retrieved systemDeviceID:", systemDeviceID);
  console.log("Expected Device ID:", expectedDeviceID);

  // Compare the retrieved device ID with the expected value.
  if (systemDeviceID !== expectedDeviceID) {
    console.log("Device is not valid. Redirecting to design2.html...");
    window.location.href = "design2.html";
  } else {
    console.log("Device is valid. Loading dashboard...");
    // Continue with dashboard initialization if needed.
  }
})();
