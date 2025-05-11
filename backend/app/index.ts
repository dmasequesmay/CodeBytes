import express from "express";
import * as elastic from "./elasticSearchConfig.js";
import { classRole, lessonDifficulty, userInfo } from "./types/enums.js";
import pool from "./connect.js";
import path from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import bodyParser from "body-parser";
import { Judge0Service } from "./services/judge0.js";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function executeSQLFile(filePath: string, pool: any) {
  try {
    const sql = fs.readFileSync(filePath, "utf-8");
    await pool.query(sql);
    console.log(`Successfully executed SQL file: ${path.basename(filePath)}`);
  } catch (error:any) {
    console.error(`Error executing SQL file: ${path.basename(filePath)}`, error);
  }
}

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
let dpool = pool;
let judge0Service = new Judge0Service();
const judge0LanguageIdToLanguageName = {
      
};    



const waitForDatabase = async (pool: any, maxAttempts: number = 900, delayMs: number = 1000) => {
    let attempts = 0;
    
    while (attempts < maxAttempts) {
        try {
            await pool.query('SELECT 1');
            console.log('Database connection is ready');
            return true;
        } catch (error:any) {
            attempts++;
            console.log(`Waiting for database... Attempt ${attempts}/${maxAttempts}`);
            await new Promise(resolve => setTimeout(resolve, delayMs));
        }
    }
     throw new Error("Database connection failed after maximum attempts");  
  }

 


// Execute SQL files with proper error handling
const executeSQLFiles = async (files: string[], pool: any) => {
  try {
    // Wait for database to be ready
    await waitForDatabase(pool);

    for (const file of files) {
      await executeSQLFile(file, pool);
    }
    console.log("All SQL files executed successfully");
  } catch (error:any) {
    console.error("Error executing SQL files:", error);
    throw error; // Rethrow the error to stop the server from starting
  }
};

// Start the server after SQL execution
const startServer = async () => {

    const sqlFiles = [
        path.join(__dirname, 'create_queries.sql'),
        path.join(__dirname, 'sample_data.sql'),
        path.join(__dirname, 'additional_sample_data.sql'),
        path.join(__dirname, 'sample_questions.sql'),
        path.join(__dirname, 'multiple_choice_answers.sql'),
        path.join(__dirname, 'test_cases.sql')
    ];

    await executeSQLFiles(sqlFiles, dpool);
    
    app.get('/', (req:any, res:any) => {
      res.send('Backend is running');
    });

    // New endpoint to get user's course progress
    app.get('/api/user-progress/:email', async(req:any, res:any) =>{
      const email = req.params.email;
      try{
        // progress = completed_difficulties / total_difficulties for each language
        const result = await dpool.query(
    `SELECT 
    l.languageId AS language,
    l.lessonName AS course_name,
    COUNT(DISTINCT upp.problemId) FILTER (WHERE upp.dateFinished IS NOT NULL) AS completed_problems,
    COUNT(DISTINCT p.id) AS total_problems,
    CASE 
        WHEN COUNT(DISTINCT p.id) = 0 THEN 0
        ELSE CAST(COUNT(DISTINCT upp.problemId) FILTER (WHERE upp.dateFinished IS NOT NULL) AS FLOAT) / COUNT(DISTINCT p.id) * 100 
    END AS progress
    FROM Lessons l
    LEFT JOIN user_lesson_progress lp ON lp.lessonId = l.id AND lp.userId = (SELECT id FROM Users WHERE email = $1)
    LEFT JOIN problems p ON p.judge0_language_id = l.languageId
    LEFT JOIN user_problem_progress upp ON upp.problemId = p.id AND upp.userId = (SELECT id FROM Users WHERE email = $1)
    GROUP BY l.languageId, l.lessonName
    ORDER BY l.languageId, l.lessonName;`,
          [email]
        );
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch user progress'});
      }
    });

    // New endpoint to get user's badges
    app.get('/api/user-badges/:email', async (req:any, res:any) => {
      const email = req.params.email;
      try{
        const result = await dpool.query(
          `SELECT 
      b.badgeName AS badge_name, 
      b.badgeDesc AS badge_desc, 
      b.requirement AS requirement, 
      b.badgeImageSrc AS badge_image_src, 
      uob.dateEarned AS date_earned
      FROM UserOwnedBadges uob
      JOIN Badges b ON uob.badgeId = b.id
      WHERE uob.userId = (SELECT id FROM Users WHERE email = $1);`,
          [email]
        );
        res.json(result.rows);
      } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to fetch user badges'});
      }
    });

    app.get('/api/courses/:languageId', async (req:any, res:any) => {
      const languageId = req.params.languageId;
      try{
        const result = await dpool.query(
          `SELECT language FROM problems WHERE judge0_language_id = $1 LIMIT 1;`,
          [languageId]
        );
        res.json(result.rows);
      } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to fetch courses'});
      }
    });

    app.get('/api/problems-count/:languageId', async (req:any, res:any) => {
      const languageId = req.params.languageId;
      const email = req.headers['user-email'] as string;
      if (!email) {
        res.status(400).json({ error: 'User email is required' });
        return;
      }
      try{
        const userResult = await dpool.query('SELECT id FROM Users WHERE email = $1', [email]);
        if (userResult.rows.length === 0) {
          res.status(404).json({ error: 'User not found' });
          return;
        }
        const userId = userResult.rows[0].id;
        const result = await dpool.query(
          `SELECT COUNT(*) 
          FROM problems p
          LEFT JOIN user_problem_progress upp ON upp.problemid = p.id AND upp.userid = $2
          WHERE p.judge0_language_id = $1 
          AND upp.datefinished IS NULL;`,
          [languageId, userId]
        );
        res.json(result.rows);
      } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to fetch problems count'});
      }
    });

    app.get('/api/problems/:languageId/:difficulty', async (req:any, res:any) => {
      const languageId = req.params.languageId;
      const numberToDifficulty = {
        1: "easy",
        2: "medium",
        3: "hard",
        4: "extreme"
      };
      const difficulty = numberToDifficulty[parseInt(req.params.difficulty) as keyof typeof numberToDifficulty];
      const email = req.headers['user-email'] as string;
      if (!email) {
        res.status(400).json({ error: 'User email is required' });
        return;
      }
      try{
        const userResult = await dpool.query('SELECT id FROM Users WHERE email = $1', [email]);
        if (userResult.rows.length === 0) {
          res.status(404).json({ error: 'User not found' });
          return;
        }
        const userId = userResult.rows[0].id;
        const result = await dpool.query(
  `SELECT 
    p.*, 
    CASE 
      WHEN p.is_coding THEN (
        SELECT json_agg(
          json_build_object(
            'id', tc.id,
            'input', tc.input,
            'expected_output', tc.expected_output,
            'is_sample', tc.is_sample,
            'score', tc.score
          )
        )
        FROM test_cases tc
        WHERE tc.problem_id = p.id
      )
      ELSE (
        SELECT json_agg(
          json_build_object(
            'id', mca.id,
            'choice_text', mca.choice_text,
            'is_correct', mca.is_correct,
            'choice_order', mca.choice_order
          ) ORDER BY mca.choice_order
        )
        FROM multiple_choice_answers mca
        WHERE mca.problem_id = p.id
      )
    END as answers
  FROM problems p
  LEFT JOIN user_problem_progress upp ON upp.problemid = p.id AND upp.userid = $3
  WHERE p.judge0_language_id = $1 
  AND p.difficulty = $2
  AND upp.datefinished IS NULL
  LIMIT 6;`,
          [languageId, difficulty, userId]
        );
        res.json(result.rows);
      } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to fetch problems'});
      }
    });
    //Endpoint to get profile info
    app.get('/api/user-profile/:email', async (req:any, res:any) => {
      const email = req.params.email;
      try {
        const result = await dpool.query(
          `SELECT 
            user_name AS "userName",
            first_name AS "firstName",
            last_name AS "lastName",
            email,
            bio,
            role,
            date_joined AS "dateJoined",
            streak
          FROM users
          WHERE email = $1`,
        [email]
      );
        res.json(result.rows[0]);
      } catch (err) {
          console.error('Error fetching user profile:', err);
          res.status(500).json({ error: 'Internal Server Error' });
    }
    });


    // Endpoint to get user's course progress
  app.post('/api/user-completed-problem', async (req:any, res:any) => {
    const { email, problemId }:{
      email: string,
      problemId: number
    } = req.body;
    try{
      const userResult = await dpool.query('SELECT id FROM Users WHERE email = $1', [email]);
      if (userResult.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      await dpool.query(
        `INSERT INTO user_problem_progress (user_id, problem_id, date_start, date_finished)
        VALUES (CAST($1 AS INTEGER), $2, CURRENT_DATE, CURRENT_DATE);`,
        [userResult.rows[0].id, problemId]
      );
      res.status(200).send("success!");
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

    app.post("/add-user ", (req:any, res:any) => {
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
      .catch((error:any) => {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      });
    });

    /*TODO: write the backend endpoint for adding to the class table */
    app.post("/add-class ", (req:any, res:any) => {
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
      .catch((error:any) => {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      });
    });

  await executeSQLFiles(sqlFiles, dpool);

  app.get("/", (req: any, res:any) => {
    res.send("Backend is running");
  });

  // Endpoint to get user info by email
  app.get("/api/user-info/:email", async (req:any, res:any) => {
    const email = req.params.email;
    try {
      const result = await dpool.query(
        `SELECT firstName FROM Users WHERE email = $1`,
        [email]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch user info" });
    }
  });

  // Fix user progress query
  app.get('/api/user-progress/:email', async(req:any, res:any) =>{
    const email = req.params.email;
    try {
      const result = await dpool.query(
        `SELECT 
          l.language_id AS language,
          l.lesson_name AS course_name,
          COUNT(DISTINCT upp.problemid) FILTER (WHERE upp.datefinished IS NOT NULL) AS completed_problems,
          COUNT(DISTINCT p.id) AS total_problems,
          CASE 
              WHEN COUNT(DISTINCT p.id) = 0 THEN 0
              ELSE CAST(COUNT(DISTINCT upp.problemid) FILTER (WHERE upp.datefinished IS NOT NULL) AS FLOAT) / COUNT(DISTINCT p.id) * 100 
          END AS progress
        FROM lessons l
        LEFT JOIN user_lesson_progress ulp ON ulp.lesson_id = l.id AND ulp.user_id = (SELECT id FROM users WHERE email = $1)
        LEFT JOIN problems p ON p.judge0_language_id = l.language_id
        LEFT JOIN user_problem_progress upp ON upp.problemid = p.id AND upp.userid = (SELECT id FROM users WHERE email = $1)
        GROUP BY l.language_id, l.lesson_name
        ORDER BY l.language_id, l.lesson_name;`,
        [email]
      );
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch user progress" });
    }
  });

  // Endpoint to get user's badges
  app.get("/api/user-badges/:email", async (req:any, res:any) => {
    const email = req.params.email;
    try {
      const result = await dpool.query(
        `SELECT 
          b.badge_name, 
          b.badge_desc, 
          b.requirement, 
          b.badge_image_src, 
          uob.date_earned
        FROM user_owned_badges uob
        JOIN badges b ON uob.badge_id = b.id
        WHERE uob.user_id = (SELECT id FROM users WHERE email = $1);`,
        [email]
      );
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch user badges" });
    }
  });

  // Endpoint to get course questions based on courseId and difficulty level
  app.get("/api/courses/:courseId/difficulty/:difficulty", async (req:any, res:any) => {
    const { courseId, difficulty } = req.params;
    try {
      const questionsResult = await dpool.query(
        `SELECT * FROM questions WHERE courseId = $1 AND difficulty = $2`,
        [courseId, difficulty]
      );

      if (questionsResult.rows.length === 0) {
        return res.status(404).json({ error: "No questions found for this course and difficulty" });
      }

      res.json({
        questions: questionsResult.rows,
      });
    } catch (err) {
      console.error("Error fetching questions:", err);
      res.status(500).json({ error: "Failed to fetch questions" });
    }
  });

  app.post("/add-user", (req:any, res:any) => {
    const {
      userName,
      firstName,
      lastName,
      bio,
      email,
      role,
      dateJoined,
    }: {
      userName: string;
      firstName: string;
      lastName: string;
      bio: string;
      email: string;
      role: typeof userInfo;
      dateJoined: Date;
    } = req.body;

    dpool
      .query(
        "INSERT INTO users (user_name, first_name, last_name, bio, email, role, date_joined) VALUES ($1, $2, $3, $4, $5, CAST($6 AS user_info), $7)",
        [userName, firstName, lastName, bio, email, role, dateJoined]
      )
      .then(() => {
        res.status(200).send("success!");
      })
      .catch((error:any) => {
        console.error("Error inserting data:", error);
        res.status(500).send("Internal Server Error");
      });
  });

  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
};

// Start the server
startServer();
