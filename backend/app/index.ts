import express from "express";
// import firebase from './firebaseConfig.js';
import * as elastic from "./elasticSearchConfig.js";
import {classRole, lessonDifficulty, userInfo} from "./types/enums.js";
import pool from "./connect.js";
import path from "path";
import { fileURLToPath } from 'url';
import * as fs from "fs";
import bodyParser from 'body-parser';
// import { createLeaderboard } from './keepTheScoreConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function executeSQLFile(filePath: string, pool: any) {
    try {
        const sql = fs.readFileSync(filePath, 'utf-8');
        await pool.query(sql);
        console.log(`Successfully executed SQL file: ${path.basename(filePath)}`);
    } catch (error) {
        console.error(`Error executing SQL file: ${path.basename(filePath)}`, error);
    }
}

const app = express();
app.use(express.json());
app.use(bodyParser.json());
let dpool = pool;

const waitForDatabase = async (pool: any, maxAttempts: number = 10, delayMs: number = 1000) => {
    let attempts = 0;
    
    while (attempts < maxAttempts) {
        try {
            await pool.query('SELECT 1');
            console.log('Database connection is ready');
            return true;
        } catch (error) {
            attempts++;
            console.log(`Waiting for database... Attempt ${attempts}/${maxAttempts}`);
            await new Promise(resolve => setTimeout(resolve, delayMs));
        }
    }
    
    throw new Error('Database connection failed after maximum attempts');
};

// Execute SQL files with proper error handling
const executeSQLFiles = async (files: string[], pool: any) => {
    try {
        // Wait for database to be ready
        await waitForDatabase(pool);
        
        await Promise.all(files.map(file => executeSQLFile(file, pool)));
        console.log('All SQL files executed successfully');
    } catch (error) {
        console.error('Error executing SQL files:', error);
        process.exit(1); // Exit the process if SQL execution fails
    }
};

// Start the server after SQL execution
const startServer = async () => {
    const sqlFiles = [
        path.join(__dirname, 'create_queries.sql'),
        path.join(__dirname, '../create_queries.sql')
    ];

    await executeSQLFiles(sqlFiles, dpool);
    
    app.get('/', (req:any, res) => {
      res.send('Backend is running');
    });

    app.post("/add-user ", (req, res) => {
      const { userName, firstName, lastName, bio, email, role, dateJoined }:{
        userName:string,
        firstName:string,
        lastName:string,
        bio:string,
        email:string,
        role: userInfo,
        dateJoined: Date
      } = req.body;
      
      dpool.query(
        'INSERT INTO users (user_name, first_name, last_name, bio, email, role, date_joined) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [userName, firstName, lastName, bio, email, role, dateJoined]
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
        teacherId:number
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
      const { lessonName, difficulty } : {
        lessonName:string,
        difficulty:lessonDifficulty,
      } = req.body;

      dpool.query(
        'INSERT INTO lessons (lessonName, difficulty) VALUES ($1, $2)',
        [lessonName, difficulty]
      )
      .then(() => {
        res.status(200).send("success!");
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      });
    });


    /*TODO: write the backend endpoint for adding to the badges table */
    app.post("/add-badge ", (req, res) => {
      const { badgeName, badgeDesc, requirement, badgeImageSrc } : {
        badgeName: string,
        badgeDesc: string,
        requirement: string,
        badgeImageSrc: string
      } = req.body;

      dpool.query(
        'INSERT INTO Badges (badgeName, badgeDesc, requirement, badgeImageSrc) VALUES ($1, $2, $3, $4)',
        [badgeName, badgeDesc, requirement, badgeImageSrc]
      )
      .then(() => {
        res.status(200).send("success!");
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      });
    });

    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
};

// Start the server
startServer();