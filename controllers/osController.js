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
module.exports.osCpus = async (req, res) => {
  try {
    const osCpus = os.cpus();
    if (!osCpus) {
      throw new Error("No Cpus was found");
    }
    res.status(200).json(osCpus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.osCpuById = async (req, res) => {
  try {
    // Extract the ID parameter from the request
    const { id } = req.params;
    // const { nom } = req.params.nom;
    // Check if the ID parameter is not a valid integer
    if (!Number.isInteger(parseInt(id))) {
      throw new Error("You must provide a number!");
    }
    // Get the CPU information
    const osCpus = os.cpus();
    // Check if no CPUs were found
    if (!osCpus) {
      throw new Error("No Cpus was found!");
    }
    // Check if the provided ID is out of range
    if (id < 0 || id > osCpus.length - 1) {
      throw new Error("You must provide a valid id!");
    }
    // Send the CPU information for the specified ID
    res.status(200).json(osCpus[id]);
  } catch (error) {
    // If an error occurs, send an error response with the error message
    res.status(500).json({ message: error.message });
  }
};
