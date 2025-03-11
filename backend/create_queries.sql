-- CREATE TABLE IF NOT EXISTS foo(
--     id SERIAL PRIMARY KEY,
--     bar VARCHAR(20) NOT NULL,
--     baz TEXT,
--     fee enum_type_name NOT NULL DEFAULT 'enumVal1'
--     fk_baz VARCHAR(10) REFERENCES other_table(baz)
-- );

-- CREATE TYPE your_enum_type AS ENUM ('value1', 'value2', 'value3');

-- TODO: create ENUM for lesson_diff

-- TODO: create ENUM for class_role
CREATE TYPE class_role AS ENUM ('student', 'assistant', 'teacher');

-- TODO: create ENUM for user_info

-- TODO: write CREATE TABLE statement for badges

-- TODO: write CREATE TABLE statement for users

-- TODO: write CREATE TABLE statement for user_owned_badges | Double Check on this one: ids defined correctly?

-- TODO: write CREATE TABLE statement for user_progress

-- TODO: write CREATE TABLE statement for lessons

-- TODO: write CREATE TABLE statement for classes

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


