// Used for demo purposes 
import { Question } from "./types/questions";

export const mockUsers = [
    {
      id: 1,
      userName: "demoUser",
      firstName: "John",
      lastName: "Doe",
      bio: "Learning to code one lesson at a time",
      email: "demo@example.com",
      role: "student",
      dateJoined: "2025-01-01",
      completedCourses: 2,
      totalLessons: 15,
      currentProgress: {
        course: "Python Fundamentals",
        lesson: 2
      }
    }
  ];
  
  // Course data
  export const mockCourses = [
    {
      id: 1,
      title: "Java",
      description: "Master the fundamentals of Java programming",
      difficulty: "medium",
      progress: 70,
      lessons: [
        { 
          id: 1, 
          title: "Introduction to Java", 
          description: "Getting started with Java basics",
          completed: true,
          difficulty: "medium"
        },
        { 
          id: 2, 
          title: "Object-Oriented Programming", 
          description: "Understanding OOP concepts",
          completed: true,
          difficulty: "medium"
        },
        { 
          id: 3, 
          title: "Collections Framework",
          description: "Working with Java collections",
          completed: false,
          difficulty: "medium"
        }
      ]
    },
    {
      id: 2,
      title: "C++",
      description: "Master the fundamentals of C++ programming",
      difficulty: "hard",
      progress: 100,
      lessons: [
        { 
          id: 1, 
          title: "Introduction to C++", 
          description: "Getting started with C++ basics",
          completed: true,
          difficulty: "hard"
        },
        { 
          id: 2, 
          title: "Pointers and Memory Management", 
          description: "Understanding pointers and memory",
          completed: true,
          difficulty: "hard"
        },
        { 
          id: 3, 
          title: "Templates and Generic Programming",
          description: "Working with templates",
          completed: true,
          difficulty: "hard"
        }
      ]
    },
    {
      id: 3,
      title: "Python Fundamentals",
      description: "Learn the basics of Python programming",
      difficulty: "easy",
      progress: 55,
      lessons: [
        { 
          id: 1, 
          title: "Introduction to Python", 
          description: "Getting started with Python basics",
          completed: true,
          difficulty: "easy"
        },
        { 
          id: 2, 
          title: "Variables and Data Types", 
          description: "Understanding Python's data types",
          completed: false,
          difficulty: "easy"
        },
        { 
          id: 3, 
          title: "Control Flow", 
          description: "If statements and loops",
          completed: false,
          difficulty: "easy"
        }
      ]
    },
    {
      id: 4,
      title: "React",
      description: "Master React.js for building modern web applications",
      difficulty: "medium",
      progress: 20,
      lessons: [
        { 
          id: 1, 
          title: "Introduction to React", 
          description: "Getting started with React basics",
          completed: true,
          difficulty: "medium"
        },
        { 
          id: 2, 
          title: "Components and Props", 
          description: "Building reusable components",
          completed: false,
          difficulty: "medium"
        },
        { 
          id: 3, 
          title: "State Management",
          description: "Managing component state",
          completed: false,
          difficulty: "medium"
        }
      ]
    }
  ];
  
  // Badge data
  export const mockBadges = [
    {
      id: 1,
      badgeName: "Python Beginner",
      badgeDesc: "Completed Python Fundamentals",
      requirement: "Complete Python Fundamentals course",
      badgeImageSrc: "/badges/python-beginner.png"
    },
    {
      id: 2,
      badgeName: "JavaScript Starter",
      badgeDesc: "Completed JavaScript Basics",
      requirement: "Complete JavaScript Basics course",
      badgeImageSrc: "/badges/js-starter.png"
    }
  ];
  
  // User badges
  export const mockUserBadges = [
    {
      userId: 1,
      badgeId: 1,
      dateEarned: "2025-02-15"
    },
    {
      userId: 1,
      badgeId: 2,
      dateEarned: "2025-03-20"
    }
  ];
  
  // Lesson content data (for demo purposes)
  export const mockLessonContent = {
    "1-1": {
      title: "Introduction to Python",
      content: [
        {
          type: "text",
          text: "Welcome to Python! Python is a powerful programming language that is easy to learn and use."
        },
        {
          type: "code",
          code: "print(\"Hello, World!\")",
          language: "python"
        },
        {
          type: "quiz",
          questions: [
            {
              question: "What is the output of print(\"Hello\")?",
              options: ["Hello", "Hello, World", "World", "None"],
              correct: "Hello"
            }
          ]
        }
      ]
    }
  };
  
  // Results data structure
  const lessonDifficulty = {
    easy: 1,
    medium: 2,
    hard: 3,
    extreme: 4
  } as const;

  export type LessonDifficulty = typeof lessonDifficulty[keyof typeof lessonDifficulty];

  export interface ResultData {
    current: number;
    total: number;
    difficulty: LessonDifficulty;
    subject: string;
    message: string;
    score: number;
    correctAnswers: number;
    totalQuestions: number;
  }
  
  // Mock results data
  export const mockResults: ResultData = {
    current: 2,
    total: 3,
    difficulty: lessonDifficulty.easy,
    subject: "Python Fundamentals",
    message: "Great job! You've completed this lesson successfully.",
    score: 85,
    correctAnswers: 4,
    totalQuestions: 5
  };

// export interface Question {
//   id: number;
//   prompt: string;
//   questionType: "code" | "multiple-choice";
//   codeTemplate?: string;
//   choices?: string[];
//   correctAnswer: string | string[];
//   difficulty: string;
//   language?: string;
// }

export const mockQuestions: Question[] = [
  {
    prompt: "Write a function that adds two numbers",
    questionType: 'code',
    languageId: 71, // JavaScript
    languageName: "JavaScript",
    codeTemplate: "// Write your code here\nfunction add(a, b) {\n  \n}",
    inputOutput: {
      input: "10\n5",
      expectedOutput: "15"
    }
  },
  {
    prompt: "What is the capital of France?",
    questionType: 'multiple-choice',
    choices: [
      "Paris",
      "London",
      "Berlin",
      "Madrid"
    ],
    correctAnswer: 0 // Index of "Paris"
  }
];