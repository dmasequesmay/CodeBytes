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

-- TODO: create ENUM for user_info

-- TODO: write CREATE TABLE statement for badges

CREATE TABLE IF NOT EXISTS Badges (
    id SERIAL PRIMARY KEY,
    badgeName VARCHAR(200) NOT NULL,
    badgeDesc TEXT,
    requirement TEXT NOT NULL,
    badgeImageSrc TEXT NOT NULL
);

-- TODO: write CREATE TABLE statement for users

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

-- TODO: write CREATE TABLE statement for classes

-- TODO: write CREATE TABLE statment for class_membership

-- TODO: write CREATE TABLE statement for user_lesson_progress


