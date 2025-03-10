import express from "express";
// const firebase = require('./firebaseConfig');
import * as elastic from "./elasticSearchConfig.js";
import {classRole, lessonDifficulty, userInfo} from "../types/enums";
import pool from "./connect";
import path from "path";
import * as fs from "fs";
import bodyParser from 'body-parser';
// const { createLeaderboard } = require('./keepTheScoreConfig');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
let dpool = pool;

app.get('/', (req:any, res) => {
  res.send('Backend is running');
});

app.post("/add-user ", (req, res) => {
  const { userName, firstName, lastName, password, email, role, dateJoined }:{
    userName:string,
    firstName:string,
    lastName:string,
    password:string,
    email:string,
    role: userInfo,
    dateJoined: Date
  } = req.body;
  
  dpool.query(
    'INSERT INTO users (user_name, first_name, last_name, password, email, role, date_joined) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [userName, firstName, lastName, password, email, role, dateJoined]
  )
  .then(() => {
    res.status(200).send("success!");
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
    res.status(500).send('Internal Server Error');
  });
});

/*TODO: write the backend endpoint for adding to the class table */
app.post("/add-class ", (req, res) => {
  const { className, teacherId }:{
    className:string,
    teacherId:int
  } = req.body;

  dpool.query(
    'INSERT INTO Classes (class_name, teacher_id) VALUES ($1, $2)',
    [className, teacherId]
  )
  .then(() => {
    res.status(200).send("success!");
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
    res.status(500).send('Internal Server Error');
  });
});


/*TODO: write the backend endpoint for adding to the lessons table */
app.post("/add-lesson ", (req, res) => {
  
});


/*TODO: write the backend endpoint for adding to the badges table */
app.post("/add-badge ", (req, res) => {
  
});


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
