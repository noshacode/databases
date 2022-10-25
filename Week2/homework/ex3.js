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

function selectQuery(sql){
    db.query(sql,(err, result) => {
		if (err) {
			throw err;
		}
		console.log("result", result);

	});
}

selectQuery("SELECT t2.author_name as author, t1.author_name as mentor FROM authors as t1 INNER JOIN authors as t2 ON t1.author_id = t2.mentor");
// selectQuery("SELECT authors.author_name,authors.author_id,research_Papers.paper_title FROM authors LEFT JOIN research_Papers ON authors.author_id = research_Papers.author_id");




