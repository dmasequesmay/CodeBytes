-- CREATE TABLE IF NOT EXISTS foo(
--     id SERIAL PRIMARY KEY,
--     bar VARCHAR(20) NOT NULL,
--     baz TEXT,
--     fee enum_type_name NOT NULL DEFAULT 'enumVal1'
--     fk_baz VARCHAR(10) REFERENCES other_table(baz)
-- );

-- Unfortunately, since postgresql doesn't do "IF NOT EXISTS" for types,
-- you have to do this instead.

-- DO $$ 
-- BEGIN
--     IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'your_enum_type') THEN
--         CREATE TYPE your_enum_type AS ENUM ('value1', 'value2', 'value3');
--     END IF;
-- END $$;

-- TODO: create ENUM for lesson_diff

-- TODO: create ENUM for class_role

-- TODO: create ENUM for user_info

-- TODO: write CREATE TABLE statement for badges

-- TODO: write CREATE TABLE statement for users

-- TODO: write CREATE TABLE statement for user_owned_badges

-- TODO: write CREATE TABLE statement for user_progress

-- TODO: write CREATE TABLE statement for lessons

-- TODO: write CREATE TABLE statement for classes

-- TODO: write CREATE TABLE statment for class_membership

-- TODO: write CREATE TABLE statement for user_lesson_progress


