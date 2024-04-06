//import express
const express = require("express");
//os taba3 router
const router = express.Router();
//import os bib
const os = require("os");
//import osController
const osController = require("../controllers/osController");

// Define the route handler for the GET request*/

router.get("/", osController.getOsInformation);
//get all cpus
router.get("/cpus", osController.osCpus);
//get cpus by id
router.get("/cpus/:id", osController.osCpuById);
// Export the router
module.exports = router;
