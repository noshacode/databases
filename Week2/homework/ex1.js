import mysql from "mysql";

// create connection
const db = mysql.createConnection({
	host: "localhost",
	user: "hyfuser",
	password: "hyfpassword",
	database: "meetup",
});

// Connect
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log("MySql connected...");
});

// create table
function authorsTable() {
	let sql =
		"CREATE TABLE authors(author_id INT NOT NULL AUTO_INCREMENT,author_name varchar(255), university varchar(255), date_of_birth DATE, h_index INT, gender varchar(255),Primary Key (author_id))";
	db.query(sql, (err, result) => {
		if (err) {
			//
			throw err;
		}
		console.log("table created...", result);
	});
}

function addColumn() {
	let sql =
		"ALTER TABLE authors ADD COLUMN mentor INT AFTER gender, ADD CONSTRAINT FK_MENTOR FOREIGN KEY (mentor) REFERENCES authors(author_id) ";
	db.query(sql, (err, result) => {
		if (err) {
			//
			throw err;
		}
		console.log("table created...", result);
	});
}

// authorsTable()

addColumn();
