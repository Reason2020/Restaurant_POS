CREATE DATABASE restaurantpos;

CREATE TABLE tables (
    table_id SERIAL PRIMARY KEY,
    isBooked BOOLEAN,
    username VARCHAR,
    contact VARCHAR
);

-- add new table
INSERT INTO tables (isBooked, username, contact) VALUES (false, NULL, NULL);

-- get all tables
SELECT * FROM tables;

--book table
UPDATE tables
SET isBooked = true,
    username = 'Reason Shrestha',
    contact = '9841309342'
WHERE table_id = 7;