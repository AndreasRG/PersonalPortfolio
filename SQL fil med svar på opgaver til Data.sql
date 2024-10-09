SELECT *
FROM city
INNER JOIN country
INNER JOIN countrylanguage;

SELECT *
FROM country;

SELECT *
FROM countrylanguage;

SELECT *
FROM city;

/*I use the database "world"*/

/*Task 1)*/
SELECT *
FROM country
WHERE population > (SELECT AVG(population) FROM country);


/*Task 2)*/
SELECT countrylanguage.`Language`, SUM(country.population/100*countrylanguage.Percentage) AS SpeakingTotal 
FROM country
INNER JOIN countrylanguage
ON country.`Code` = countrylanguage.CountryCode
GROUP BY `Language`
ORDER BY SpeakingTotal DESC
LIMIT 5;


/*Task 3)*/
SELECT `name`, (Population/SurfaceArea) AS PopulationDensity
FROM country
WHERE SurfaceArea > 0;


/*Task 4)*/
SELECT country.`name`
FROM country
LEFT JOIN city
ON country.Code = city.CountryCode
WHERE city.`name` IS NULL
GROUP BY country.`name`; 


/*Task 5)*/
SELECT Continent, AVG(LifeExpectancy) AS AverageLifeExpectancy
FROM country
GROUP BY Continent
ORDER BY AverageLifeExpectancy DESC;


/*Task 6)*/
/* For locating population of Japan:
SELECT Population
FROM country
WHERE `name` = "Japan";  = 126714000*/

SELECT country.`name` AS CountryName, city.`name` AS CityName, city.Population
FROM city
INNER JOIN country
WHERE city.Population BETWEEN 126714000*0.9 AND 126714000*1.1;


/*Task 7)*/


/*Task 8)*/


/*Task 9)*/


/*Task 10)*/