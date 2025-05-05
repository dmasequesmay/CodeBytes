import express from "express";
// import firebase from './firebaseConfig.js';
import * as elastic from "./elasticSearchConfig.js";
import {classRole, lessonDifficulty, userInfo} from "./types/enums.js";
import pool from "./connect.js";
import path from "path";
import { fileURLToPath } from 'url';
import * as fs from "fs";
import bodyParser from 'body-parser';
import { Judge0Service } from './services/judge0.js';
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
let judge0Service = new Judge0Service();

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

    // New endpoint to get user's course progress
    app.get('/api/user-progress/:email', async(req, res) =>{
      const email = req.params.email;
      try{
        const result = await dpool.quer(
          'SELECT course_name, progress, course_id FROM user_courses WHERE email = $1',
          [email]
        );
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch user progress'});
      }
    });

    // New endpoint to get user's badges
    app.get('/api/user-badges/:email', async (req, res) => {
      const email = req.params.email;
      try{
        const result = await dpool.query(
          'SELECT badge_name FROM user_badges WHERE email = $1',
          [email]
        );
        res.json(result.rows);
      } catch (err) {
          console.error(err);
          res.statue(500).json({ error: 'Failed to fetch user badges'});
      }
    });

    app.post("/add-user ", (req, res) => {
      const { userName, firstName, lastName, bio, email, role, dateJoined }:{
        userName:string,
        firstName:string,
        lastName:string,
        bio:string,
        email:string,
        role: typeof userInfo,
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
        difficulty:typeof lessonDifficulty,
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

    app.post('/execute-code', async (req, res) => {
      try {
        const { problemId, code } = req.body;
        const problem = await dpool.query('SELECT * FROM problems WHERE id = $1', [problemId]);
        const test_cases = await dpool.query('SELECT * FROM test_cases WHERE problem_id = $1', [problemId]);
        const submissions = test_cases.rows.map(test_case => {
          return {
            source_code: code,
            language_id: problem.rows[0].judge0_language_id,
            stdin: test_case.input,
            expected_output: test_case.expected_output,
            cpu_time_limit: problem.rows[0].time_limit,
            memory_limit: problem.rows[0].memory_limit
          };
        });
    
        const result = await judge0Service.submitMultipleAndCheckStatus(submissions);
        res.json({
          correct: result
        });
      } catch (error) {
        res.status(500).json({ error: 'Failed to execute code' });
      }
    });

    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
};

// Start the server
startServer();