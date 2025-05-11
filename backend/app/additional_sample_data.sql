-- Additional Sample Data for CodeBytes Database

-- Additional Badges
INSERT INTO Badges (badgeName, badgeDesc, requirement, badgeImageSrc) VALUES
('Java Master', 'Mastered Java Programming', 'Completed 85% of Java problems', '/badges/java-master.png'),
('Python Expert', 'Expert in Python Programming', 'Completed 90% of Python problems', '/badges/python-expert.png'),
('Algorithm Ace', 'Mastered Algorithm Challenges', 'Solved 20 hard difficulty problems', '/badges/algo-ace.png'),
('Full Stack Hero', 'Completed Full Stack Journey', 'Completed both frontend and backend challenges', '/badges/fullstack-hero.png'),
('Quick Solver', 'Lightning Fast Problem Solver', 'Solved 10 problems in under 10 minutes each', '/badges/quick-solver.png');

-- Additional User Progress
INSERT INTO user_lesson_progress (userId, lessonId, dateStart, dateFinished) VALUES
((SELECT id FROM Users WHERE userName = 'student2'), 
 (SELECT id FROM Lessons WHERE lessonName = 'Python'), 
 '2025-02-01', '2025-02-15'),
((SELECT id FROM Users WHERE userName = 'student3'), 
 (SELECT id FROM Lessons WHERE lessonName = 'JavaScript'), 
 '2025-02-15', '2025-03-01'),
((SELECT id FROM Users WHERE userName = 'student4'), 
 (SELECT id FROM Lessons WHERE lessonName = 'React'), 
 '2025-03-01', NULL);

-- Additional User Owned Badges
INSERT INTO UserOwnedBadges (userId, badgeId, dateEarned) VALUES
((SELECT id FROM Users WHERE userName = 'student2'), 
 (SELECT id FROM Badges WHERE badgeName = 'Python Beginner'), 
 '2025-02-15'),
((SELECT id FROM Users WHERE userName = 'student3'), 
 (SELECT id FROM Badges WHERE badgeName = 'JavaScript Pro'), 
 '2025-03-01'),
((SELECT id FROM Users WHERE userName = 'demoUser'), 
 (SELECT id FROM Badges WHERE badgeName = 'Quick Solver'), 
 '2025-02-01');

-- Additional Programming Language Lessons
INSERT INTO Lessons (lessonName, languageId) VALUES
('Java', 62),
('Ruby', 72),
('Go', 60),
('TypeScript', 74),
('Perl', 85),
('Swift', 83),
('Rust', 73);

-- Additional Problems (Questions) - Various Languages
INSERT INTO problems (question, difficulty, is_coding, language, judge0_language_id, time_limit, memory_limit) VALUES
('What is the difference between == and .equals() in Java?', 'easy', false, 'java', NULL, NULL, NULL),
('Implement a Java class for a linked list node.', 'medium', true, 'java', 62, 2.0, 262144),
('Create a thread-safe singleton pattern in Java.', 'hard', true, 'java', 62, 2.0, 262144),
('Write a Ruby method to calculate factorial.', 'medium', true, 'ruby', 72, 2.0, 262144),
('Implement a module for sorting algorithms in Ruby.', 'hard', true, 'ruby', 72, 2.0, 262144),
('Write a Go function that implements a concurrent worker pool.', 'hard', true, 'go', 60, 2.0, 262144),
('Implement error handling in Go using multiple return values.', 'medium', true, 'go', 60, 2.0, 262144),
('Implement a decorator that measures function execution time.', 'hard', true, 'python', 71, 2.0, 262144),
('Create a context manager for file handling.', 'medium', true, 'python', 71, 2.0, 262144);

-- Test Cases for New Problems
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
((SELECT id FROM problems WHERE question = 'Implement a Java class for a linked list node.' AND language = 'java'),
'new Node(5)', '5', true),
((SELECT id FROM problems WHERE question = 'Implement a Java class for a linked list node.' AND language = 'java'),
'Node n = new Node(1); n.next = new Node(2);', '1 -> 2', false),

-- Ruby Factorial Test Cases
((SELECT id FROM problems WHERE question = 'Write a Ruby method to calculate factorial.' AND language = 'ruby'),
'5', '120', true),
((SELECT id FROM problems WHERE question = 'Write a Ruby method to calculate factorial.' AND language = 'ruby'),
'0', '1', false),

-- Go Worker Pool Test Cases
((SELECT id FROM problems WHERE question = 'Write a Go function that implements a concurrent worker pool.' AND language = 'go'),
'3 workers, [1,2,3,4,5]', 'Processed: [1,2,3,4,5]', true);

-- Add test cases for Python factorial problem
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
((SELECT id FROM problems WHERE question = 'Write a function to calculate the factorial of a number.' AND language = 'python'), '5', '120', true),
((SELECT id FROM problems WHERE question = 'Write a function to calculate the factorial of a number.' AND language = 'python'), '0', '1', false);

-- Add test cases for JavaScript sum of array problem
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
((SELECT id FROM problems WHERE question = 'Write a function to find the sum of an array.' AND language = 'javascript'), '[1, 2, 3]', '6', true),
((SELECT id FROM problems WHERE question = 'Write a function to find the sum of an array.' AND language = 'javascript'), '[10, 20, 30]', '60', false);

-- Multiple Choice Answers for New Questions
INSERT INTO multiple_choice_answers (problem_id, choice_text, is_correct, choice_order) VALUES
((SELECT id FROM problems WHERE question = 'What is the difference between == and .equals() in Java?' AND language = 'java'),
'== compares object references while .equals() compares object content', true, 1),
((SELECT id FROM problems WHERE question = 'What is the difference between == and .equals() in Java?' AND language = 'java'),
'They are exactly the same', false, 2),
((SELECT id FROM problems WHERE question = 'What is the difference between == and .equals() in Java?' AND language = 'java'),
'.equals() is only for String comparison', false, 3);

-- Add User Problem Progress
INSERT INTO user_problem_progress (userId, problemId, dateStart, dateFinished) VALUES
((SELECT id FROM Users WHERE userName = 'demoUser'),
 (SELECT id FROM problems WHERE question = 'Write a function that takes a list and returns its length.' AND language = 'python'),
 '2025-01-01', '2025-01-01'),
((SELECT id FROM Users WHERE userName = 'student2'),
 (SELECT id FROM problems WHERE question = 'Implement a Java class for a linked list node.' AND language = 'java'),
 '2025-02-15', '2025-02-15'),
 ((SELECT id FROM Users WHERE userName = 'student2'),
 (SELECT id FROM problems WHERE question = 'Write a function that takes a list and returns its length.' AND language = 'python'),
 '2025-01-01', '2025-01-01'),
((SELECT id FROM Users WHERE userName = 'student3'),
 (SELECT id FROM problems WHERE question = 'Implement a simple calculator class with basic operations.' AND language = 'python'),
 '2025-02-20', '2025-02-20');
