// Used for demo purposes 
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
      title: "Python Fundamentals",
      description: "Learn the basics of Python programming",
      difficulty: "easy",
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
      id: 2,
      title: "JavaScript Basics",
      description: "Master the fundamentals of JavaScript",
      difficulty: "medium",
      lessons: [
        { 
          id: 1, 
          title: "Introduction to JavaScript", 
          description: "Getting started with JavaScript",
          completed: true,
          difficulty: "medium"
        },
        { 
          id: 2, 
          title: "DOM Manipulation", 
          description: "Working with the Document Object Model",
          completed: true,
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
  export interface ResultData {
    current: number;
    total: number;
    difficulty: string;
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
    difficulty: "easy",
    subject: "Python Fundamentals",
    message: "Great job! You've completed this lesson successfully.",
    score: 85,
    correctAnswers: 4,
    totalQuestions: 5
  };