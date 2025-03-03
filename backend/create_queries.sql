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
CREATE TABLE IF NOT EXISTS badges(
    id SERIAL PRIMARY KEY,
    badgeName VARCHAR(200) NOT NULL,
    badgeDesc TEXT,
    requirement TEXT NOT NULL,
    badgeImageSrc TEXT NOT NULL
);

-- TODO: write CREATE TABLE statement for users
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    userName VARCHAR(20) NOT NULL,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role user_info NOT NULL DEFAULT 'student',
    dateJoined DATE
);

-- TODO: write CREATE TABLE statement for user_owned_badges | Double Check on this one: ids defined correctly?
CREATE TABLE IF NOT EXISTS user_owned_badges(
    userId SERIAL,
    badgeId SERIAL,
    (userId, badgeId) PRIMARY KEY,
    FOREIGN KEY (userId) REFERENCES badge(id),
    FOREIGN KEY (badgeId) REFERENCES users(id),
    dateEarned DATE NOT NULL
);

-- TODO: write CREATE TABLE statement for user_progress
CREATE TABLE IF NOT EXISTS user_progress(
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES users(id),
    currentExp INT NOT NULL,
    totalExp BIGINT NOT NULL,
    currentStreak INT NOT NULL
);

-- TODO: write CREATE TABLE statement for lessons
CREATE TABLE IF NOT EXISTS lessons(
    id SERIAL PRIMARY KEY,
    lessonName VARCHAR(200) NOT NULL,
    difficulty lesson_diff NOT NULL DEFAULT 'medium'
);

-- TODO: write CREATE TABLE statement for classes
CREATE TABLE IF NOT EXISTS classes(
    id SERIAL PRIMARY KEY,
    className VARCHAR(50) NOT NULL,
    teacherId SERIAL NOT NULL,
    FOREIGN KEY (teacherId) REFERENCES users(id),
);

-- TODO: write CREATE TABLE statment for class_membership | Double Check : user and class id both primary?
CREATE TABLE IF NOT EXISTS class_membership(
    userId SERIAL,
    classId SERIAL,
    (userId, classId) PRIMARY KEY,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (classId) REFERENCES classes(id),
    role class_role NOT NULL DEFAULT 'student'
);

-- TODO: write CREATE TABLE statement for user_lesson_progress | Double Check : user and lesson id both primary?
CREATE TABLE IF NOT EXISTS user_lesson_progress(
    userId SERIAL,
    lessonId SERIAL,
    (userId, lessonId) PRIMARY KEY,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (lessonId) REFERENCES lessons(id),
    dateStart DATE NOT NULL,
    dateFinished DATE
);

