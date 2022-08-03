-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS book_authors;
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
    ('Oathbringer', 2017),
    ('Words of Radiance', 2014),
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
    ('Christopher Tolkein', 1924, 'England'),
    ('Brandon Sanderson', 1975, 'Nebraska'),
    ('V.E. Schwab', 1987, 'California');

CREATE table book_authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    authors_id BIGINT,
    books_id BIGINT,
    FOREIGN KEY (authors_id) REFERENCES authors(id),
    FOREIGN KEY (books_id) REFERENCES books(id)
);

INSERT INTO book_authors (authors_id, books_id) VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (2, 5),
    (3, 6),
    (3, 7),
    (3, 8),
    (4, 9);