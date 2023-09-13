const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

// get all data from db
router.get('/', controller.getAllData);

// get all cameras from db
router.get('/cameras', controller.getAllCameras);

// get all roads from db
router.get('/roads', controller.getAllRoads);

// get all vehicle types from db
router.get('/vehicleTypes', controller.getAllVehicleTypes);

// get all vehicle detections from db
router.get('/vehicleDetections', controller.getAllVehicleDetections);

// post new vehicle detection to db
router.post('/addVehicleDetection', controller.addVehicleDetection);

// post new camera to db
router.post('/addCamera', controller.addCamera);

// post new road to db
router.post('/addRoad', controller.addRoad);

// post new vehicle type to db
router.post('/addVehicleType', controller.addVehicleType);


module.exports = router;
