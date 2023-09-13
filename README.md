# Vehicle Detection API Documentation

The Vehicle Detection API provides access to data related to cameras, roads, vehicle types, and vehicle detections. This document outlines how to use the API and provides examples of API endpoints and responses.

## Table of Contents

- [API Endpoints](#api-endpoints)
  - [Get All Data](#get-all-data)
  - [Get All Cameras](#get-all-cameras)
  - [Get All Roads](#get-all-roads)
  - [Get All Vehicle Types](#get-all-vehicle-types)
  - [Get All Vehicle Detections](#get-all-vehicle-detections)
  - [Add Vehicle Detection](#add-vehicle-detection)
  - [Add Camera](#add-camera)
  - [Add Road](#add-road)
  - [Add Vehicle Type](#add-vehicle-type)
- [Response Format](#response-format)


## API Endpoints

### Get All Data

- **Endpoint**: `/`
- **Method**: GET
- **Description**: Get all data from the database.
- **Example Request**:

  ```http
  GET http://localhost:3000/
  ```

- **Example Response**:

  ```json
  [
    {
      "CameraID": 1,
      "Model": "Camera Model 1",
      "Location": "Location 1"
    },
    {
      "RoadID": 1,
      "RoadName": "Road A",
      "Direction": true
    },
    {
      "TypeID": 1,
      "TypeName": "Sedan"
    },
    {
      "DetectionDate": "2023-09-15T12:00:00Z",
      "VehicleTypeID": 1,
      "CameraID": 1,
      "RoadID": 1
    }
  ]
  ```

### Get All Cameras

- **Endpoint**: `/cameras`
- **Method**: GET
- **Description**: Get all available cameras from the database.
- **Example Request**:

  ```http
  GET http://localhost:3000/cameras
  ```

- **Example Response**:

  ```json
  [
    {
      "CameraID": 1,
      "Model": "Camera Model 1",
      "Location": "Location 1"
    },
    {
      "CameraID": 2,
      "Model": "Camera Model 2",
      "Location": "Location 2"
    }
  ]
  ```

### Get All Roads

- **Endpoint**: `/roads`
- **Method**: GET
- **Description**: Get all available roads from the database.
- **Example Request**:

  ```http
  GET http://localhost:3000/roads
  ```

- **Example Response**:

  ```json
  [
    {
      "RoadID": 1,
      "RoadName": "Road A",
      "Direction": true
    },
    {
      "RoadID": 2,
      "RoadName": "Road B",
      "Direction": false
    }
  ]
  ```

### Get All Vehicle Types

- **Endpoint**: `/vehicleTypes`
- **Method**: GET
- **Description**: Get all available vehicle types from the database.
- **Example Request**:

  ```http
  GET http://localhost:3000/vehicleTypes
  ```

- **Example Response**:

  ```json
  [
    {
      "TypeID": 1,
      "TypeName": "Sedan"
    },
    {
      "TypeID": 2,
      "TypeName": "SUV"
    }
  ]
  ```

### Get All Vehicle Detections

- **Endpoint**: `/vehicleDetections`
- **Method**: GET
- **Description**: Get all vehicle detections from the database.
- **Example Request**:

  ```http
  GET http://localhost:3000/vehicleDetections
  ```

- **Example Response**:

  ```json
  [
    {
      "DetectionDate": "2023-09-15T12:00:00Z",
      "VehicleTypeID": 1,
      "CameraID": 1,
      "RoadID": 1
    },
    {
      "DetectionDate": "2023-09-16T13:30:00Z",
      "VehicleTypeID": 2,
      "CameraID": 2,
      "RoadID": 2
    }
  ]
  ```

### Add Vehicle Detection

- **Endpoint**: `/addVehicleDetection`
- **Method**: POST
- **Description**: Add a new vehicle detection record to the database.
- **Example Request**:

  ```http
  POST http://localhost

:3000/addVehicleDetection
  Content-Type: application/json

  {
    "CameraID": 1,
    "RoadID": 1,
    "VehicleTypeName": "Sedan"
  }
  ```

- **Example Response**:

  ```json
  {
    "message": "Vehicle detection record added successfully."
  }
  ```

### Add Camera

- **Endpoint**: `/addCamera`
- **Method**: POST
- **Description**: Add a new camera to the database.
- **Example Request**:

  ```http
  POST http://localhost:3000/addCamera
  Content-Type: application/json

  {
    "Model": "New Camera Model",
    "Location": "New Location"
  }
  ```

- **Example Response**:

  ```json
  {
    "message": "Camera added successfully."
  }
  ```

### Add Road

- **Endpoint**: `/addRoad`
- **Method**: POST
- **Description**: Add a new road to the database.
- **Example Request**:

  ```http
  POST http://localhost:3000/addRoad
  Content-Type: application/json

  {
    "RoadName": "New Road",
    "Direction": true
  }
  ```

- **Example Response**:

  ```json
  {
    "message": "Road added successfully."
  }
  ```

### Add Vehicle Type

- **Endpoint**: `/addVehicleType`
- **Method**: POST
- **Description**: Add a new vehicle type to the database.
- **Example Request**:

  ```http
  POST http://localhost:3000/addVehicleType
  Content-Type: application/json

  {
    "TypeName": "Compact"
  }
  ```

- **Example Response**:

  ```json
  {
    "message": "Vehicle type added successfully."
  }
  ```

## Response Format

- All successful responses include a JSON object with a `message` field indicating the success status.
- Error responses provide details about the error encountered during the request.

---

Feel free to customize this README to match your specific API implementation and requirements. It serves as documentation for users who want to interact with your API and provides them with clear instructions and examples.
