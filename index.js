const router = require('./src/routes/routes');
const express = require('express');
const app = express();

const parser = require('body-parser');

app.use(parser.json());


app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:9000");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST ,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.use(router);


// configure the process.env.port
process.env.port = 3000;

app.listen(process.env.port);


