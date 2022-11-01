
import mysql from "mysql";

// Create connection
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
function account() {
	let sql =
		"CREATE TABLE account(account_number INT NOT NULL, balance INT,Primary Key(account_number))";
	db.query(sql, (err, result) => {
		if (err) {
			//
			throw err;
		}
		console.log("table created...", result);
	});
}
// create table
function account_changes() {
	let sql =
		"CREATE TABLE account_changes(change_number INT NOT NULL , account_number INT, amount INT, changed_date DATE, remark Text,FOREIGN KEY(account_number) REFERENCES account(account_number),Primary Key(change_number))";
	db.query(sql, (err, result) => {
		if (err) {
			//
			throw err;
		}
		console.log("table created...", result);
	});
}


account()
account_changes()


