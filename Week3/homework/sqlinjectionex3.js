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



function getPopulation(tableName, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    db.query(
      `SELECT Population FROM ${tableName} WHERE Name = '${name}' and Code = '${code}'`,
      function (err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found xxx"));
        cb(null, result);
      }
    );
}

function getPopulationSafe(tableName, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    db.query(
      `SELECT Population FROM ${tableName} WHERE Name = ? and Code = ?;`, [name, code],
      function (err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found xxx"));
        cb(null, result);
      }
    );
}

//   getPopulation("country", "Yemen", "YEM", (err, result)=>{
//         if (err) console.log(err);
//         console.log(result)
//   } )

  getPopulationSafe("country", "Yemen' OR '101", "YEM' OR '101", (err, result)=>{
    if (err) console.log(err);
    console.log(result)
    // db.end()
} )

//   getPopulationSafe("country", "Yemen", "YEM", (err, result)=>{
//         if (err) console.log(err);
//         console.log(result)
//   } )