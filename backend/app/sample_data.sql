-- Sample Data for CodeBytes Database
DO $$ DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.tablename) || ' CASCADE';
    END LOOP;
END $$;

-- Badges
INSERT INTO Badges (badgeName, badgeDesc, requirement, badgeImageSrc) VALUES 
('Python Beginner', 'Completed Python Fundamentals', 'Completed 50% of Python problems', '/badges/python-beginner.png'),
('C++ Expert', 'Expert in C++ Programming', 'Completed 90% of C++ problems', '/badges/cpp-expert.png'),
('JavaScript Pro', 'Mastered JavaScript', 'Completed 75% of JavaScript problems', '/badges/js-pro.png'),
('React Developer', 'Expert in React', 'Completed 80% of React problems', '/badges/react-dev.png');

-- Users
INSERT INTO Users (userName, firstName, lastName, bio, email, role, dateJoined) VALUES
('demoUser', 'John', 'Doe', 'Learning to code one lesson at a time', 'demo@example.com', 'student', '2025-01-01'),
('teacher1', 'Sarah', 'Smith', 'Experienced programming instructor', 'teacher@example.com', 'mentor', '2025-01-01'),
('student2', 'Mike', 'Johnson', 'New to programming', 'student2@example.com', 'student', '2025-02-01'),
('student3', 'Emma', 'Williams', 'Frontend developer in training', 'student3@example.com', 'student', '2025-02-15'),
('student4', 'David', 'Brown', 'Aspiring software engineer', 'student4@example.com', 'student', '2025-03-01'),
('teacher2', 'James', 'Wilson', 'Senior software engineer and mentor', 'teacher2@example.com', 'mentor', '2025-01-15');

-- -- Classes
-- INSERT INTO Classes (className, teacherId) VALUES
-- ('Python 101', (SELECT id FROM Users WHERE userName = 'teacher1')),
-- ('C++ Advanced', (SELECT id FROM Users WHERE userName = 'teacher1')),
-- ('JavaScript Fundamentals', (SELECT id FROM Users WHERE userName = 'teacher1')),
-- ('React Development', (SELECT id FROM Users WHERE userName = 'teacher1')),
-- ('Full Stack Web Development', (SELECT id FROM Users WHERE userName = 'teacher2'));

-- -- Class Memberships
-- INSERT INTO class_membership (userId, classId, role) VALUES
-- ((SELECT id FROM Users WHERE userName = 'demoUser'), (SELECT id FROM Classes WHERE className = 'Python 101'), 'student'),
-- ((SELECT id FROM Users WHERE userName = 'student2'), (SELECT id FROM Classes WHERE className = 'Python 101'), 'student'),
-- ((SELECT id FROM Users WHERE userName = 'demoUser'), (SELECT id FROM Classes WHERE className = 'JavaScript Fundamentals'), 'student'),
-- ((SELECT id FROM Users WHERE userName = 'demoUser'), (SELECT id FROM Classes WHERE className = 'Full Stack Web Development'), 'student'),
-- ((SELECT id FROM Users WHERE userName = 'student3'), (SELECT id FROM Classes WHERE className = 'C++ Advanced'), 'student'),
-- ((SELECT id FROM Users WHERE userName = 'student4'), (SELECT id FROM Classes WHERE className = 'React Development'), 'student');

-- Judge0 Language IDs
-- Python: 71
-- Java: 62
-- C++: 73
-- JavaScript: 7
-- React/JavaScript: 7

-- Lessons with associated languages and difficulties
INSERT INTO Lessons (lessonName, languageId) VALUES
('Python', 100),
('C++', 105),
('JavaScript', 102),
('React', 7);

-- User Lesson Progress
INSERT INTO user_lesson_progress (userId, lessonId, dateStart, dateFinished) VALUES
((SELECT id FROM Users WHERE userName = 'demoUser'), 
 (SELECT id FROM Lessons WHERE lessonName = 'Python'), 
 '2025-01-01', '2025-01-02');

-- User Owned Badges
INSERT INTO UserOwnedBadges (userId, badgeId, dateEarned) VALUES
((SELECT id FROM Users WHERE userName = 'demoUser'), 
 (SELECT id FROM Badges WHERE badgeName = 'Python Beginner'), 
 '2025-01-02');

-- Problems (Questions) - Python
INSERT INTO problems (question, difficulty, is_coding, language, judge0_language_id, time_limit, memory_limit) VALUES
('What is the output of print(2 + 2 * 3)?', 'easy', false, 'python', NULL, NULL, NULL),
('Write a function that takes a list and returns its length.', 'easy', true, 'python', 100, 2.0, 262144),
('What is the correct way to create a dictionary in Python?', 'easy', false, 'python', NULL, NULL, NULL),
('Write a program to check if a number is even or odd.', 'easy', true, 'python', 100, 2.0, 262144),
('Write a function that finds the maximum number in a list.', 'medium', true, 'python', 100, 2.0, 262144),
('Implement a simple calculator class with basic operations.', 'medium', true, 'python', 100, 2.0, 262144),
('Implement a binary search algorithm.', 'hard', true, 'python', 100, 2.0, 262144),
('Create a class that implements a stack data structure.', 'hard', true, 'python', 71, 2.0, 262144);

-- Test Cases for Python Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
((SELECT id FROM problems WHERE question = 'Write a function that takes a list and returns its length.' AND language = 'python'), '[1, 2, 3]', '3', true),
((SELECT id FROM problems WHERE question = 'Write a function that takes a list and returns its length.' AND language = 'python'), '[]', '0', false),
((SELECT id FROM problems WHERE question = 'Write a function that finds the maximum number in a list.' AND language = 'python'), '[1, 3, 2]', '3', true),
((SELECT id FROM problems WHERE question = 'Write a function that finds the maximum number in a list.' AND language = 'python'), '[-1, -3, -2]', '-1', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even or odd.' AND language = 'python'), '4', 'even', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even or odd.' AND language = 'python'), '7', 'odd', false),
((SELECT id FROM problems WHERE question = 'Create a class that implements a stack data structure.' AND language = 'python'), 'push(5), pop()', '5', true),
((SELECT id FROM problems WHERE question = 'Create a class that implements a stack data structure.' AND language = 'python'), 'push(3), push(7), pop()', '7', false);

-- Multiple Choice Answers for Python Questions
INSERT INTO multiple_choice_answers (problem_id, choice_text, is_correct, choice_order) VALUES
((SELECT id FROM problems WHERE question = 'What is the output of print(2 + 2 * 3)?' AND language = 'python'), '8', true, 1),
((SELECT id FROM problems WHERE question = 'What is the output of print(2 + 2 * 3)?' AND language = 'python'), '12', false, 2),
((SELECT id FROM problems WHERE question = 'What is the correct way to create a dictionary in Python?' AND language = 'python'), '{''key'': ''value''}', true, 1),
((SELECT id FROM problems WHERE question = 'What is the correct way to create a dictionary in Python?' AND language = 'python'), '[key: value]', false, 2);