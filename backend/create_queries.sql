-- CREATE TABLE IF NOT EXISTS foo(
--     id SERIAL PRIMARY KEY,
--     bar VARCHAR(20) NOT NULL,
--     baz TEXT,
--     fee enum_type_name NOT NULL DEFAULT 'enumVal1'
--     fk_baz VARCHAR(10) REFERENCES other_table(baz)
-- );

-- CREATE TYPE your_enum_type AS ENUM ('value1', 'value2', 'value3');

-- TODO: create ENUM for lesson_diff
CREATE TYPE lesson_diff AS ENUM ('easy', 'medium', 'hard', 'extreme');

-- TODO: create ENUM for class_role
CREATE TYPE class_role AS ENUM ('student', 'assistant', 'teacher');

-- TODO: create ENUM for user_info
CREATE TYPE user_info AS ENUM ('student', 'mentor', 'admin');
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
    teacherId SERIAL NOT NULL REFERENCES Users(userId)
);

-- TODO: write CREATE TABLE statment for class_membership
CREATE TABLE IF NOT EXISTS class_membership(
    userId SERIAL,
    classId SERIAL,
    (userId, classId) PRIMARY KEY,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (classId) REFERENCES classes(id),
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

