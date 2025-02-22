import express from "express";
// const firebase = require('./firebaseConfig');
import * as elastic from "./elasticSearchConfig.js";
// const { createLeaderboard } = require('./keepTheScoreConfig');

const app = express();
app.use(express.json());

app.get('/', (req:any, res) => {
  res.send('Backend is running');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
