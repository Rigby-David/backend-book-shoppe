-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    released INT
);

INSERT INTO books (
    title,
    released
)
VALUES
    ('The Hobbit or There and Back Again', 1937),
    ('The Fellowship of the Ring', 1954),
    ('The Two Towers', 1954),
    ('The Return of the King', 1955),
    ('The Silmarillion', 1977),
    ('The Way of Kings', 2010),
    ('A Darker Shade of Magic', 2015);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    dob INT,
    pob VARCHAR
);

INSERT INTO authors (
    name,
    dob,
    pob
)
VALUES
    ('J.R.R. Tolkein', 1892, 'Bloemfontein'),
    ('V.E. Schwab', 1987, 'California'),
    ('Christopher Tolkein', 1924, 'England');