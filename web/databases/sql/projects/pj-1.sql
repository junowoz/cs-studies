-- Active: 1665775629680@@127.0.0.1@3306
--PROJECT | CREATE A TABLE
CREATE DATABASE localhost;
USE localhost;

CREATE TABLE friends(
    id INTEGER,
    name TEXT,
    birthday DATE
);

INSERT INTO friends (id, name, birthday)
VALUES (1, 'Ororo Munroe', '1940-05-30');

INSERT INTO friends (id, name, birthday)
VALUES (2, 'Anne', '2003-07-08');

INSERT INTO friends (id, name, birthday)
VALUES (3, 'Juan', '1947-08-10');

UPDATE friends
SET name = 'Storm' 
WHERE id = 1;

ALTER TABLE friends
ADD COLUMN email TEXT;

UPDATE friends
SET email = 'storm@codecademy.com'
WHERE id = 1;

DELETE FROM friends
WHERE id = 1;

SELECT * FROM friends;