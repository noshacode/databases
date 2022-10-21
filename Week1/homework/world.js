import mysql from "mysql";

// Create connection
const db = mysql.createConnection({
	host: "localhost",
	user: "hyfuser",
	password: "hyfpassword",
	database: "world",
});
// Connect
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log("MySql connected...");
});


function selectQuery(sql){
    db.query(sql,(err, result) => {
		if (err) {
			throw err;
		}
		console.log("result", result);

	});
}
selectQuery("SELECT Name FROM world.country WHERE population > 8000000")
selectQuery("SELECT Name FROM world.country WHERE name like '%land%'")
selectQuery("SELECT Name FROM world.city WHERE population BETWEEN 500000 AND 1000000")
selectQuery("SELECT Name FROM world.country WHERE continent = 'Europe' ")
selectQuery("SELECT Name,surfacearea FROM world.country ORDER BY surfacearea DESC")
selectQuery("SELECT Name FROM world.city WHERE countrycode = 'NLD'")
selectQuery("SELECT population FROM world.city WHERE name = 'Rotterdam'")
selectQuery("SELECT name,surfacearea FROM world.country ORDER BY surfacearea DESC LIMIT 10")
selectQuery("SELECT name,population FROM world.city ORDER BY  population DESC LIMIT 10")
selectQuery("SELECT SUM(population) FROM world.country")



