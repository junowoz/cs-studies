SELECT * FROM trips;

SELECT * FROM riders;

SELECT * FROM cars;

SELECT riders.first,
       riders.last,
       cars.model
FROM riders, cars;

SELECT trips.date,
       trips.pickup,
       trips.dropoff,
       trips.type,
       trips.cost,
       riders.first,
       riders.last,
       riders.username
FROM trips
         LEFT JOIN riders
                   ON trips.rider_id = riders.id;

-- LINKING

SELECT *
FROM trips
         JOIN cars
              ON trips.car_id = cars.id;

-- STACKING

SELECT *
FROM riders
UNION
SELECT *
FROM riders2;

-- Bonus: Queries and Aggregates
SELECT ROUND(AVG(cost), 2)
FROM trips;

SELECT *
FROM riders
WHERE total_trips < 500
UNION
SELECT *
FROM riders2
WHERE total_trips < 500;

--Calculate the number of cars that are active.
SELECT COUNT(*)
FROM cars
WHERE status = 'active';

-- Write a query that finds the two cars that have the highest trips_completed.
SELECT *
FROM cars
ORDER BY trips_completed DESC
    LIMIT 2;
