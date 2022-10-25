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

//Sum of the research papers published by all female authors. 
selectQuery("select count(*) from (SELECT research_Papers.paper_id from research_Papers left join authors ON authors.author_id = research_Papers.author_id where authors.gender= 'female') as female_authors")

// Average of the h-index of all authors per university.
selectQuery("SELECT authors.author_name,authors.university,AVG(authors.h_index )FROM meetup.authors GROUP BY university");
// Sum of the research papers of the authors per university.

// Minimum and maximum of the h-index of all authors per university.

SELECT t2.author_name as author, t1.author_name as mentor FROM meet.upauthors as t1 INNER JOIN meetup.authors as t2 ON t1.author_id = t2.mentor



// SELECT count( DISTINCT(authors.university) ) FROM  meetup.authors;