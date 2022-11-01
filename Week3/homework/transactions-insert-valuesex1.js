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



function insertData(tableName,item){

    let sql = `INSERT INTO ${tableName} SET ?`;
    db.query(sql,item,(err, result) => {
		if (err) {
			//
			throw err;
		}
		console.log("item created...", result);
	});
};

insertData("account",{account_number:"5557781",balance:"1500"});
insertData("account",{account_number:"5557792",balance:"1600"});
insertData("account",{account_number:"5557793",balance:"1700"});
insertData("account",{account_number:"5557785",balance:"1800"});


insertData("account_changes",{change_number:"1",account_number:"5557781",amount:"500",changed_date:"2020-09-04",remark:"transfer"});
insertData("account_changes",{change_number:"2",account_number:"5557792",amount:"600",changed_date:"2020-08-06",remark:"for tickets"});
insertData("account_changes",{change_number:"3",account_number:"5557793",amount:"-700",changed_date:"2021-08-09",remark:"for hotel"});
insertData("account_changes",{change_number:"4",account_number:"5557785",amount:"800",changed_date:"2020-09-03",remark:"for dinner"});