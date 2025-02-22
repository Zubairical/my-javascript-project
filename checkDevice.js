// Immediately Invoked Function Expression to avoid polluting global scope
(function() {
  // Expected device ID as defined in this JS file
  const expectedDeviceID = "4CC92C8B-2CAC-4800-B920-AE6822CA7C1B";

  /**
   * Simulate retrieval of the system's device ID.
   * In this example, we use localStorage. Replace this with your actual implementation.
   *
   * To test, open your browser's console and run:
   * localStorage.setItem("systemDeviceID", "4CC92C8B-2CAC-4800-B920-AE6822CA7C1B");
   */
  function getSystemDeviceId() {
    return localStorage.getItem("systemDeviceID");
  }

  // Retrieve the system device ID
  const systemDeviceID = getSystemDeviceId();

  // Check if the device ID exists and matches the expected value.
  if (systemDeviceID && systemDeviceID === expectedDeviceID) {
    console.log("Device is valid. Loading dashboard...");
    // Dashboard continues loading normally.
  } else {
    console.log("Device is not valid. Redirecting to design2.html...");
    // If not valid, redirect the user to design2.html.
    window.location.href = "design2.html";
  }
})();
