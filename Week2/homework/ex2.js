import mysql from "mysql";
import faker from 'faker';

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
function research_Papers() {
	let sql =
		"CREATE TABLE research_Papers(paper_id INT NOT NULL AUTO_INCREMENT ,paper_title varchar(255), publish_date DATE,Primary Key(paper_id))";
        
	db.query(sql, (err, result) => {
		if (err) {
			//
			throw err;
		}
		console.log("table created...", result);
	});

}
function authorId() {
	let sql =
		"ALTER TABLE research_Papers ADD COLUMN author_id INT AFTER publish_date, ADD CONSTRAINT FK_author_id FOREIGN KEY (author_id) REFERENCES authors(author_id) ";
	db.query(sql,(err, result) => {
		if (err) {
			//
			throw err;
		}
		console.log("table created...", result);
	});
}
// research_Papers()
// authorId()

//insert rows 15 authors
function insertAuthors(tableName,item){
    
    let sql = `INSERT INTO ${tableName} SET ?`;
    db.query(sql,item,(err, result) => {
		if (err) {
			//
			throw err;
		}
		console.log("item created...", result);
	});
};
// insertAuthors("authors",{author_name:"Bertus Aafjes",university :"Bertus",date_of_birth :"1914-12-05", h_index :"8", gender:"male",mentor:1});
// insertAuthors("authors",{author_name:"Patricia Aakhus ",university :"Alwaha",date_of_birth :"1915-12-06", h_index :"7", gender:"male",mentor:2});
// insertAuthors("authors",{author_name:"Hans Aanrud ",university :"Al-Aanrud",date_of_birth :"1950-05-09", h_index :"1", gender:"male",mentor:1});
// insertAuthors("authors",{author_name:"Verna Aardema ",university :"Harvard",date_of_birth :"1914-12-05", h_index :"2", gender:"male",mentor:3});
// insertAuthors("authors",{author_name:"Ahmed Hosam",university :"Stanford",date_of_birth :"1920-09-27", h_index :"3", gender:"male"});
// insertAuthors("authors",{author_name:"Sara Nabil",university :"Yale ",date_of_birth :"1879-12-03", h_index :"4", gender:"female"});
// insertAuthors("authors",{author_name:"Nuha Nabil",university :"Columbia",date_of_birth :"1999-12-07", h_index :"9", gender:"female"});
// insertAuthors("authors",{author_name:"Abbas Mahmoud",university :"Columbia",date_of_birth :"1989-11-08", h_index :"5", gender:"male",mentor:3});
// insertAuthors("authors",{author_name:"Abu'Afak",university :"Stanford",date_of_birth :"1945-07-04", h_index :"5", gender:"male",mentor:5});
// insertAuthors("authors",{author_name:"Abdallah Zrika",university :"University of Chicago",date_of_birth :"1982-06-03", h_index :"4", gender:"male",mentor:5});
// insertAuthors("authors",{author_name:"Abu Nuwas",university :"University of Michigan",date_of_birth :"1989-06-03", h_index :"8", gender:"male"});
// insertAuthors("authors",{author_name:"Shukri Mabkhout",university :"Harvard",date_of_birth :"1937-09-02", h_index :"9", gender:"male",mentor:6});
// insertAuthors("authors",{author_name:"Saud Alsanousi",university :"University of Michigan",date_of_birth :"1987-06-03", h_index :"6", gender:"female",mentor:7});
// insertAuthors("authors",{author_name:"Saud Hamada",university :"Princeton",date_of_birth :"1977-06-03", h_index :"6", gender:"female",mentor:8});
// insertAuthors("authors",{author_name:"Raja'a Alem",university :"Cornell",date_of_birth :"1957-06-03", h_index :"8", gender:"female",mentor:9});

//
function insertResearch(tableName,item){
    
    let sql = `INSERT INTO ${tableName} SET ?`;
    db.query(sql,item,(err, result) => {
		if (err) {
			//
			throw err;
		}
		console.log("item created...", result);
	});
};

for(let i=0; i < 30; i++){
    insertResearch('research_Papers', {paper_title: faker.random.words(4), publish_date:faker.date.past(),author_id: randomInteger(1,15)})
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }