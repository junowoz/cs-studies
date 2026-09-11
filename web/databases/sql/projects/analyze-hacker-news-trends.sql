SELECT title, score
FROM hacker_news
ORDER BY score DESC
LIMIT 5;

-- First, find the total score of all the stories.
SELECT SUM(score)
FROM hacker_news;

-- Find the individual users who have gotten combined scores of more than 200, and their combined scores.
SELECT user, SUM(score)
FROM hacker_news
GROUP BY user
HAVING SUM(score) > 200
ORDER BY 2 DESC;
SELECT (517 + 309 + 304 + 282) / 6366.0;

-- How many times has each offending user posted this link?
SELECT user, COUNT(*)
FROM hacker_news
WHERE url LIKE 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
GROUP BY user
ORDER BY COUNT(*) DESC;

-- First, we want to categorize each story based on their source.
-- Which sites feed Hacker News?
SELECT CASE
   WHEN url LIKE '%github.com%' THEN 'GitHub'
   WHEN url LIKE '%medium.com%' THEN 'Medium'
   WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
   ELSE 'Other'
  END AS 'Source',
  COUNT(*)
FROM hacker_news
GROUP BY 1;

-- What's the best time to post a story?
SELECT timestamp
FROM hacker_news
LIMIT 10;

-- SQLite comes with a strftime() function - a very powerful function that allows you to return a formatted date.
SELECT timestamp,
   strftime('%H', timestamp)
FROM hacker_news
GROUP BY 1
LIMIT 20;

/*
Okay, now we understand how strftime() works. Let’s write a query that returns three columns:

The hours of the timestamp
The average score for each hour
The count of stories for each hour
*/
SELECT strftime('%H', timestamp), 
   AVG(score),
   COUNT(*)
FROM hacker_news
GROUP BY 1
ORDER BY 1;

/*
Let’s edit a few things in the previous query:

Round the average scores (ROUND()).

Rename the columns to make it more readable (AS).

Add a WHERE clause to filter out the NULL values in timestamp.
*/

-- What's the best time to post a story?
SELECT strftime('%H', timestamp) AS 'Hour', 
   ROUND(AVG(score), 1) AS 'Average Score', 
   COUNT(*) AS 'Number of Stories'
FROM hacker_news
WHERE timestamp IS NOT NULL
GROUP BY 1
ORDER BY 1;
