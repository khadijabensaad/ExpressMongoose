const os = require("os");

// Define the route handler for the GET request*/
module.exports.getOsInformation = async (req, res) => {
  try {
    const osInformations = {
      hostname: os.hostname(),
      type: os.type(),
      platform: os.platform(),
    };

    // Check if osInformations is not empty
    if (!osInformations) {
      throw new Error("there's no information for your os");
    }
    // Send JSON response with OS information
    res.status(201).json(osInformations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
