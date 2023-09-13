const sql = require("mssql");

class Database {
  config = {};
  poolConnection = null;
  connected = false;

  constructor(config) {
    this.config = config;
    console.log(`Database: config: ${JSON.stringify(config)}`);
  }

  async connect() {
    try {
      console.log(`Database connecting...${this.connected}`);
      if (this.connected === false) {
        this.poolConnection = await sql.connect(this.config);
        this.connected = true;
        console.log("Database connection successful");
      } else {
        console.log("Database already connected");
      }
    } catch (error) {
      console.log("error:", error);
      console.error(`Error connecting to database: ${JSON.stringify(error)}`);
    }
  }

  async disconnect() {
    try {
      this.poolConnection.close();
      console.log("Database connection closed");
    } catch (error) {
      console.error(`Error closing database connection: ${error}`);
    }
  }

  async executeQuery(query) {
    await this.connect();
    const request = this.poolConnection.request();
    const result = await request.query(query);

    return result.rowsAffected[0];
  }

  async getAllData() {
    // await poolConnect;
    await this.connect();
    try {
      const query = `
        SELECT * FROM Cameras;
        SELECT * FROM Roads;
        SELECT * FROM VehicleTypes;
        SELECT * FROM VehicleDetections;
      `;
      const request = this.poolConnection.request();
      const result = await request.query(query);

      const allData = {
        cameras: result.recordsets[0],
        roads: result.recordsets[1],
        vehicleTypes: result.recordsets[2],
        vehicleDetections: result.recordsets[3],
      };

      return allData;
    } catch (error) {
      throw new Error(`Error retrieving data: ${error.message}`);
    }
  }

  // Function to get all available cameras
  async getAllCameras() {
    // await poolConnect;
    await this.connect();
    try {
      const request = this.poolConnection.request();
      const result = await request.query("SELECT * FROM Cameras");
      return result.recordset;
    } catch (error) {
      throw new Error(`Error retrieving cameras: ${error.message}`);
    }
  }

  // Function to get all roads
  async getAllRoads() {
    // await poolConnect;
    await this.connect();
    try {
      const request = this.poolConnection.request();
      const result = await request.query("SELECT * FROM Roads");
      return result.recordset;
    } catch (error) {
      throw Error(`Error retrieving roads: ${error.message}`);
    }
  }

  // Function to get all vehicle types
  async getAllVehicleTypes() {
    // await poolConnect;
    await this.connect();
    try {
      const request = this.poolConnection.request();
      const result = await request.query("SELECT * FROM VehicleTypes");
      return result.recordset;
    } catch (error) {
      throw new Error(`Error retrieving vehicle types: ${error.message}`);
    }
  }

  // Function to get all vehicle detections
  async getAllVehicleDetections() {
    // await poolConnect;
    await this.connect();
    try {
      const request = this.poolConnection.request();
      const result = await request.query("SELECT * FROM VehicleDetections");
      return result.recordset;
    } catch (error) {
      throw new Error(`Error retrieving vehicle detections: ${error.message}`);
    }
  }

  // Function to add a new vehicle detection record
  async addVehicleDetection(camId, roadId, vehicleTypeName) {
    // await poolConnect;
    await this.connect();
    try {
      const validateVehicleTypeQuery = `SELECT TypeID FROM VehicleTypes WHERE TypeName = @TypeName`;
      const request = this.poolConnection.request();
      request.input("TypeName", sql.VarChar(64), vehicleTypeName);
      const validationResult = await request.query(validateVehicleTypeQuery);

      if (validationResult.recordset.length === 0) {
        throw new Error("Invalid vehicle type name");
      }

      const insertQuery = `INSERT INTO VehicleDetections (DetectionDate, VehicleTypeID, CameraID, RoadID) 
    VALUES (SYSDATETIME(), @VehicleTypeID, @CameraID, @RoadID)`;
      request.input(
        "VehicleTypeID",
        sql.Int,
        validationResult.recordset[0].TypeID
      );
      request.input("CameraID", sql.Int, camId);
      request.input("RoadID", sql.Int, roadId);

      await request.query(insertQuery);
    } catch (error) {
      throw new Error(`Error adding vehicle detection: ${error.message}`);
    }
  }

  // Function to add a new camera
  async addCamera(model, location) {
    // await poolConnect;
    await this.connect();
    try {
      const insertQuery = `INSERT INTO Cameras (Model, Location) VALUES (@Model, @Location)`;
      const request = this.poolConnection.request();
      request.input("Model", sql.VarChar(64), model);
      request.input("Location", sql.VarChar(64), location);
      await request.query(insertQuery);
    } catch (error) {
      throw new Error(`Error adding camera: ${error.message}`);
    }
  }

  // Function to add a new road
  async addRoad(name, direction) {
    // await poolConnect;
    await this.connect();
    try {
      const insertQuery = `INSERT INTO Roads (RoadName, Direction) VALUES (@RoadName, @Direction)`;
      const request = this.poolConnection.request();
      request.input("RoadName", sql.VarChar(64), name);
      request.input("Direction", sql.Bit, direction);
      await request.query(insertQuery);
    } catch (error) {
      throw new Error(`Error adding road: ${error.message}`);
    }
  }

  // Function to add a new vehicle type
  async addVehicleType(typeName) {
    // await poolConnect;
    await this.connect();
    try {
      const insertQuery = `INSERT INTO VehicleTypes (TypeName) VALUES (@TypeName)`;
      const request = this.poolConnection.request();
      request.input("TypeName", sql.VarChar(64), typeName);
      await request.query(insertQuery);
    } catch (error) {
      throw new Error(`Error adding vehicle type: ${error.message}`);
    }
  }
}

module.exports = Database;
