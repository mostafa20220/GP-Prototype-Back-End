const DataBase = require('../models/database');
const config = require('../../config/config');

const db = new DataBase(config);

// Function to add a new road
exports.addRoad = async (req, res) => {
    try {
        await db.addRoad(req.body.name, req.body.direction);
        res.status(200).send(`Road ${req.body.name} added successfully`);
    } catch (error) {
        res.status(500).send(error.message);
    }
    };

// Function to add a new vehicle type
exports.addVehicleType = async (req, res) => {
    try {
        await db.addVehicleType(req.body.typeName);
        res.status(200).send(`Vehicle type ${req.body.typeName} added successfully`);
    } catch (error) {
        res.status(500).send(error.message);
    }
    };

// Function to add a new camera
exports.addCamera = async (req, res) => {
    try {
        await db.addCamera(req.body.model, req.body.location);
        res.status(200).send(`Camera ${req.body.model} added successfully`);
    } catch (error) {
        res.status(500).send(error.message);
    }
    };

// Function to add a new vehicle detection
exports.addVehicleDetection = async (req, res) => {
    try {
        await db.addVehicleDetection(req.body.cameraId, req.body.roadId, req.body.vehicleType);
        res.status(200).send(`Vehicle detection added successfully`);
    } catch (error) {
        res.status(500).send(error.message);
    }
    };

// Function to get all data
exports.getAllData = async (req, res) => {
    try{
        const allData = await db.getAllData();
        res.status(200).send(allData);
    } catch (error) {
        res.status(500).send(error.message);
    }
    };

// Function to get all roads
exports.getAllRoads = async (req, res) => {
    try{
        const allRoads = await db.getAllRoads();
        res.status(200).send(allRoads);
    }catch (error) {
        res.status(500).send(error.message);
    }
};

// Function to get all cameras
exports.getAllCameras = async (req, res) => {
    try{
        const allCameras = await db.getAllCameras();
        res.status(200).send(allCameras);
    }catch (error) {
        res.status(500).send(error.message);
    }
};

// Function to get all vehicle types
exports.getAllVehicleTypes = async (req, res) => {
    try{
        const allVehicleTypes = await db.getAllVehicleTypes();
        res.status(200).send(allVehicleTypes);
    }catch (error) {
        res.status(500).send(error.message);
    }
}

// Function to get all vehicle detections
exports.getAllVehicleDetections = async (req, res) => {
    try{
        const allVehicleDetections = await db.getAllVehicleDetections();
        res.status(200).send(allVehicleDetections);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}