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
selectQuery("SELECT authors.university, AVG(authors.h_index) FROM authors GROUP by authors.university");
// Sum of the research papers of the authors per university.
selectQuery("SELECT authors.university, COUNT(research_Papers.author_id) AS count FROM meetup.authors left join meetup.research_Papers on authors.author_id = research_Papers.author_id GROUP by authors.university");
// Minimum and maximum of the h-index of all authors per university.
selectQuery("SELECT authors.university, MIN(authors.h_index) ,MAX(authors.h_index) FROM authors GROUP by authors.university");



// SELECT count( DISTINCT(authors.university) ) FROM  meetup.authors;