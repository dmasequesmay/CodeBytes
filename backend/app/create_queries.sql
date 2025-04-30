
-- TODO: create ENUM for lesson_diff
DO $$
BEGIN
    CREATE TYPE lesson_diff AS ENUM ('easy', 'medium', 'hard', 'extreme');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- TODO: create ENUM for class_role
DO $$
BEGIN
    CREATE TYPE class_role AS ENUM ('student', 'assistant', 'teacher');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- TODO: create ENUM for user_info
DO $$
BEGIN
    CREATE TYPE user_info AS ENUM ('student', 'mentor', 'admin');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;
-- TODO: write CREATE TABLE statement for badges

CREATE TABLE IF NOT EXISTS Badges (
    id SERIAL PRIMARY KEY,
    badgeName VARCHAR(200) NOT NULL,
    badgeDesc TEXT,
    requirement TEXT NOT NULL,
    badgeImageSrc TEXT NOT NULL
);

-- TODO: write CREATE TABLE statement for users

CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(20) NOT NULL,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    bio TEXT,
    email TEXT UNIQUE NOT NULL,
    role user_info DEFAULT 'student',
    dateJoined DATE
);

-- TODO: write CREATE TABLE statement for user_owned_badges

CREATE TABLE IF NOT EXISTS UserOwnedBadges (
    userId INT NOT NULL,
    badgeId INT NOT NULL,
    dateEarned DATE NOT NULL,
    PRIMARY KEY (userId, badgeId),
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (badgeId) REFERENCES Badges(id) ON DELETE CASCADE
);

-- TODO: write CREATE TABLE statement for user_progress

-- TODO: write CREATE TABLE statement for lessons
CREATE TABLE IF NOT EXISTS Lessons(
    id SERIAL PRIMARY KEY,
    lessonName VARCHAR(200) NOT NULL,
    difficulty lesson_diff NOT NULL DEFAULT 'medium'
);
-- TODO: write CREATE TABLE statement for classes
CREATE TABLE IF NOT EXISTS Classes (
    id SERIAL PRIMARY KEY,
    className VARCHAR(50) NOT NULL,
    teacherId INT NOT NULL REFERENCES Users(id)
);

-- TODO: write CREATE TABLE statment for class_membership
CREATE TABLE IF NOT EXISTS class_membership(
    userId INT,
    classId INT,
    PRIMARY KEY (userId, classId),
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (classId) REFERENCES Classes(id),
    role class_role NOT NULL DEFAULT 'student'
);

-- TODO: write CREATE TABLE statement for user_lesson_progress
CREATE TABLE IF NOT EXISTS user_lesson_progress(
    userId INT NOT NULL,
    lessonId INT NOT NULL,
    dateStart DATE NOT NULL,
    dateFinished DATE,
    PRIMARY KEY (userId, lessonId),
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (lessonId) REFERENCES Lessons(id) ON DELETE CASCADE
);

-- A table for test cases for each problem
CREATE TABLE IF NOT EXISTS test_cases (
    id SERIAL PRIMARY KEY,
    problem_id INTEGER REFERENCES problems(id) ON DELETE CASCADE,
    input TEXT NOT NULL,
    expected_output TEXT NOT NULL,
    is_sample BOOLEAN DEFAULT false,
    score FLOAT DEFAULT 1.0
);

CREATE TABLE IF NOT EXISTS problems (
    id SERIAL PRIMARY KEY,
    question VARCHAR(200) NOT NULL,
    difficulty lesson_diff NOT NULL DEFAULT 'medium',
    source VARCHAR(200),
    is_coding BOOLEAN NOT NULL DEFAULT false,
    language VARCHAR(200),
    judge0_language_id INTEGER,
    time_limit FLOAT DEFAULT 2.0,
    memory_limit INTEGER DEFAULT 262144
);