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
// Export the router
module.exports = router;
