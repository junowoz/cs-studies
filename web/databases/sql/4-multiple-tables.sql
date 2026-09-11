-- MULTIPLE TABLES
/*
 In this lesson, we’ll learn the SQL commands that will help us work with data that is stored in multiple tables.

In this example, we have 3 tables: orders, subscriptions and customers.
*/
----------------------------------------------------------------------------------
-- Combining Tables with SQL: JOIN
-- When we perform a simple JOIN (often called an INNER JOIN),
-- our result only includes rows that match our ON condition.

SELECT *
FROM table3
JOIN table2
  ON table3.table2column = table2.table2column;

-- With a condition

SELECT *
FROM table3
JOIN table2
  ON table3.table2column1 = table2.table2column1;
  WHERE table2.table2column2 = 'Some condition';

----------------------------------------------------------------------------------
-- Inner Joins: Only the ones who are the same within the tables.
-- This command joins 2 tables that are similar.

ON table1.c2 = table2.c2:

SELECT COUNT(*)
FROM newspaper
    JOIN online
    ON newspaper.id = online.id;

----------------------------------------------------------------------------------
-- Left Joins: Combine 2 tables and keep some of the unmatched rows
-- This will keep the rows from th first table
SELECT *
FROM table1
    LEFT JOIN table2
    ON table1.c2 = table2.c2;

-- We could also add
    WHERE table.c2 IS NULL;

/*
The first line selects all columns from both tables.
The second line selects table1 (the “left” table).
The third line performs a LEFT JOIN on table2 (the “right” table).
The fourth line tells SQL how to perform the join (by looking for matching values in column c2).
*/
----------------------------------------------------------------------------------
--Primary Jey vs Foreign Key
/*
Primary keys have a few requirements:

None of the values can be NULL.
Each value must be unique (i.e., you can’t have two customers with the same customer_id in the customers table).
A table can not have more than one primary key column.

When the primary key for one table appears in a different table, it is called a foreign key.

The most common types of joins will be joining a foreign key from one table with the primary key from another table.
For instance, when we join orders and customers, we join on customer_id,
which is a foreign key in orders and the primary key in customers.
*/
SELECT *
FROM table1
JOIN table2
    ON table1.id = table2.class_id;
-- table1.id (a primary key)
-- table2.class_id (a foreign key) another name for the primary key of table1

----------------------------------------------------------------------------------
--Cross Join: Combine all rows of one table with all rows of another table. To know all possible combinations
/*
1. SELECT as colunas
2. FROM table
3. CROSS JOIN com table2
*/

SELECT *
FROM table1
CROSS JOIN table2;

/*
Why is a CROSS JOIN not so useful?
- It combines every row in one table with every row in another table.
*/
----------------------------------------------------------------------------------
-- Union: Stack one dataset on top of the other.
/*
SQL has strict rules for appending data:

Tables must have the same number of columns.
The columns must have the same data types in the same order as the first table.
*/
SELECT *
FROM table1
UNION
SELECT *
FROM table2;
----------------------------------------------------------------------------------
-- With
/*
The WITH statement allows us to perform a separate query (such as aggregating customer’s subscriptions)
Essentially, we are putting a whole first query inside the parentheses () and giving it a name.
After that, we can use this name as if it’s a table and write a new query using the first query.
*/
WITH previous_query AS (
    SELECT customer_id,
           COUNT(subscription_id) AS 'subscriptions'
    FROM orders
    GROUP BY customer_id
)
SELECT customers.customer_name,
       previous_query.subscriptions
FROM previous_query
         JOIN customers
              ON previous_query.customer_id = customers.customer_id;
----------------------------------------------------------------------------------
-- Review
/*
JOIN will combine rows from different tables if the join condition is true.

LEFT JOIN will return every row in the left table, and if the join condition is not met, NULL values are used to fill in the columns from the right table.

Primary key is a column that serves a unique identifier for the rows in the table.

Foreign key is a column that contains the primary key to another table.

CROSS JOIN lets us combine all rows of one table with all rows of another table.

UNION stacks one dataset on top of another.

WITH allows us to define one or more temporary tables that can be used in the final query.
*/
