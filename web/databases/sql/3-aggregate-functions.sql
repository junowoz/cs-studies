-- AGGREGATE FUNCTIONS
 /*HOW TO PERFORM CALCULATIONS IN SQL
 WE'LL LEARN
 COUNT(): count the number of rows
 SUM(): the sum of the values in a column
 MAX()/MIN(): the largest/smallest value
 AVG(): the average of the values in a column
 ROUND(): round the values in the column
 */
----------------------------------------------------------------------------------
--COUNT: Counts how many rows in a table
SELECT COUNT(*)
FROM table_name;
WHERE price = 0;

----------------------------------------------------------------------------------
--SUM: SQL makes it easy to add all values in a particular column using SUM().
SELECT SUM(column1)
FROM table_name;

----------------------------------------------------------------------------------
-- MAX() and MIN() functions return the highest and lowest values in a column.
SELECT MAX(column1)
FROM table_name;

SELECT MIN(column1)
FROM table_name;

----------------------------------------------------------------------------------
-- Average: function to quickly calculate the average value of a particular column.
SELECT AVG(column1)
FROM table_name;

----------------------------------------------------------------------------------
-- Round
/*
ROUND() function takes two arguments inside the parenthesis:
1. a column name
2. an integer
*/
SELECT ROUND(column1, 0)
FROM table_name;

-- Rounding the average price and show 2 decimal places
SELECT ROUND(AVG(column1), 2)
FROM table_name;
----------------------------------------------------------------------------------
-- Group By I
/*
It is used in collaboration with the SELECT statement to arrange identical data into groups.
The GROUP BY statement comes after any WHERE statements, but before ORDER BY or LIMIT.
*/
SELECT column1,
   AVG(column2)
FROM table_name
GROUP BY column1
ORDER BY column1;

----------------------------------------------------------------------------------
-- Group By II
SELECT ROUND(column1),
   COUNT(column2)
FROM movies
GROUP BY 1 -- this is the column1
ORDER BY 1; -- this is also the column1

-- OR
SELECT ROUND(column1),
   COUNT(column2)
FROM movies
GROUP BY 1, 1;

----------------------------------------------------------------------------------
-- Having
/*
HAVING is very similar to WHERE. 
In fact, all types of WHERE clauses you learned about thus far can be used with HAVING.

When we want to limit the results of a query based on values of the individual rows, use WHERE.
When we want to limit the results of a query based on an aggregate property, use HAVING.

HAVING statement always comes after GROUP BY, but before ORDER BY and LIMIT.
*/


----------------------------------------------------------------------------------
-- Review
/*
COUNT(): count the number of rows
SUM(): the sum of the values in a column
MAX()/MIN(): the largest/smallest value
AVG(): the average of the values in a column
ROUND(): round the values in the column

GROUP BY is a clause used with aggregate functions to combine data from one or more columns.
HAVING limit the results of a query based on an aggregate property.
*/

-- EXAMPLES:
/*
SELECT neighborhood, 
   AVG(price)
FROM apartments
GROUP BY neighborhood;

It calculates the average price of apartments in each neighborhood.
*/