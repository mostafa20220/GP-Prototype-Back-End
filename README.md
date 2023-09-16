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
  GET https://gp-prototype-back-end-api.azurewebsites.net/
  ```

- **Example Response**:

  ```json
  {
    "cameras": [
        {
            "CameraID": 1,
            "Model": "Axis P3245-LV",
            "Location": "Cairo, Egypt"
        },
        {
            "CameraID": 2,
            "Model": "Axis P3225-LV Mk II",
            "Location": "Giza, Egypt"
        }
    ],
    "roads": [
        {
            "RoadID": 1,
            "RoadName": "El-Shohada",
            "Direction": true
        },
        {
            "RoadID": 2,
            "RoadName": "Ahmed Zewail",
            "Direction": false
        }
    ],
    "vehicleTypes": [
        {
            "TypeID": 1,
            "TypeName": "Truck"
        },
        {
            "TypeID": 2,
            "TypeName": "Car"
        },
        {
            "TypeID": 3,
            "TypeName": "Van"
        },
        {
            "TypeID": 4,
            "TypeName": "Bus"
        },
        {
            "TypeID": 5,
            "TypeName": "Motorcycle"
        },
        {
            "TypeID": 6,
            "TypeName": "Bicycles"
        }
    ],
    "vehicleDetections": [
        {
            "DetectionDate": "2023-09-13T04:10:17.126Z",
            "VehicleTypeID": 3,
            "CameraID": 1,
            "RoadID": 1
        },
        {
            "DetectionDate": "2023-09-13T04:11:27.267Z",
            "VehicleTypeID": 4,
            "CameraID": 2,
            "RoadID": 2
        }
    ]
  }
  ```

### Get All Cameras

- **Endpoint**: `/cameras`
- **Method**: GET
- **Description**: Get all available cameras from the database.
- **Example Request**:

  ```http
  GET https://gp-prototype-back-end-api.azurewebsites.net/cameras
  ```

- **Example Response**:

  ```json
  [
    {
        "CameraID": 1,
        "Model": "Axis P3245-LV",
        "Location": "Cairo, Egypt"
    },
    {
        "CameraID": 2,
        "Model": "Axis P3225-LV Mk II",
        "Location": "Giza, Egypt"
    }
  ]
  ```

### Get All Roads

- **Endpoint**: `/roads`
- **Method**: GET
- **Description**: Get all available roads from the database.
- **Example Request**:

  ```http
  GET https://gp-prototype-back-end-api.azurewebsites.net/roads
  ```

- **Example Response**:

    #### Notes:-
    true: Indicates that vehicles travel from **left** to **right**.
    false: Indicates that vehicles travel from **right** to **left**.

  ```json
  [
    {
        "RoadID": 1,
        "RoadName": "El-Shohada",
        "Direction": true
    },
    {
        "RoadID": 2,
        "RoadName": "Ahmed Zewail",
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
  GET https://gp-prototype-back-end-api.azurewebsites.net/vehicleTypes
  ```

- **Example Response**:

  ```json
  [
    {
        "TypeID": 1,
        "TypeName": "Truck"
    },
    {
        "TypeID": 2,
        "TypeName": "Car"
    },
    {
        "TypeID": 3,
        "TypeName": "Van"
    },
    {
        "TypeID": 4,
        "TypeName": "Bus"
    },
    {
        "TypeID": 5,
        "TypeName": "Motorcycle"
    },
    {
        "TypeID": 6,
        "TypeName": "Bicycles"
    }
  ]
  ```

### Get All Vehicle Detections

- **Endpoint**: `/vehicleDetections`
- **Method**: GET
- **Description**: Get all vehicle detections from the database.
- **Example Request**:

  ```http
  GET https://gp-prototype-back-end-api.azurewebsites.net/vehicleDetections
  ```

- **Example Response**:

  ```json
  [
    {
        "DetectionDate": "2023-09-13T04:10:17.126Z",
        "VehicleTypeID": 3,
        "CameraID": 1,
        "RoadID": 1
    },
    {
        "DetectionDate": "2023-09-13T04:11:27.267Z",
        "VehicleTypeID": 4,
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
  POST https://gp-prototype-back-end-api.azurewebsites.net/addVehicleDetection
  Content-Type: application/json

  {
    "vehicleType": "Bus",
    "roadId": "1",
    "cameraId": "1"
  }
  ```

- **Example Response**:

  ```
  Vehicle detection added successfully
  ```

### Add Camera

- **Endpoint**: `/addCamera`
- **Method**: POST
- **Description**: Add a new camera to the database.
- **Example Request**:

  ```http
  POST https://gp-prototype-back-end-api.azurewebsites.net/addCamera
  Content-Type: application/json

  {
    "model": "Axis P3225-LV Mk ",
    "location": "Alexandria, Egypt"
  }
  ```

- **Example Response**:

  ```
  Camera Axis P3225-LV Mk  added successfully
  ```

### Add Road

- **Endpoint**: `/addRoad`
- **Method**: POST
- **Description**: Add a new road to the database.
- **Example Request**:

  ```http
  POST https://gp-prototype-back-end-api.azurewebsites.net/addRoad
  Content-Type: application/json

  {
    "name": "Ahmed Zewail",
    "direction": false
  }
  ```

- **Example Response**:

  ```
  Road Ahmed Zewail added successfully
  ```

### Add Vehicle Type

- **Endpoint**: `/addVehicleType`
- **Method**: POST
- **Description**: Add a new vehicle type to the database.
- **Example Request**:

  ```http
  POST https://gp-prototype-back-end-api.azurewebsites.net/addVehicleType
  Content-Type: application/json

  {
    "typeName": "Bicycles"
  }
  ```

- **Example Response**:

  ```
  Vehicle type Bicycles added successfully
  ```

## Response Format

- All successful responses include raw text messages indicating the success status.
- Error responses provide details about the error encountered during the request.

---
