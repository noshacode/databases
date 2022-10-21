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

function createDB() {
	let sql = "CREATE DATABASE meetup";
	db.query(sql, (err, result) => {
		if (err) {
			throw err;
		}
		console.log("Database created...", result);
		// res.send("Database created...")=> if I use express
	});
}

//CREATE TABLE
function createTable(tableName, columns) {
	let sql = `CREATE TABLE ${tableName} (${columns})`;
	db.query(sql, (err, result) => {
		if (err) {
			throw err;
		}
		console.log(`table ${tableName} created...`, result);
	});
}

//Insert post 1
function insert(tableName, item) {
	let sql = `INSERT INTO ${tableName} SET ?`;
	db.query(sql, item, (err, result) => {
		if (err) {
			throw err;
		}
		console.log("item added...", result);
	});
}

createDB();
createTable(
	"Invitee",
	"invitee_no INT,invitee_name varchar(255),invited_by varchar(255)"
);
insert("Invitee", {
	invitee_no: "2",
	invitee_name: "adam",
	invited_by: "nosha",
});
insert("Invitee", {
	invitee_no: "3",
	invitee_name: "ahmed",
	invited_by: "abba",
});
insert("Invitee", {
	invitee_no: "4",
	invitee_name: "albina",
	invited_by: "waleed",
});
insert("Invitee", {
	invitee_no: "6",
	invitee_name: "rama",
	invited_by: "abba",
});
insert("Invitee", {
	invitee_no: "7",
	invitee_name: "polina",
	invited_by: "martin",
});

createTable("Room", "room_no INT,room_name varchar(255),floor_number INT");
insert("Room", { room_no: "1", room_name: "cloud", floor_number: "4" });
insert("Room", { room_no: "2", room_name: "sky", floor_number: "5" });
insert("Room", { room_no: "2", room_name: "sea", floor_number: "6" });
insert("Room", { room_no: "3", room_name: "garden", floor_number: "7" });
insert("Room", { room_no: "4", room_name: "swimming", floor_number: "9" });

createTable(
	"Meeting",
	"meeting_no INT,meeting_title varchar(255),starting_time timestamp,ending_time timestamp,room_no INT");

insert("Meeting", {
	meeting_no: "1",
	meeting_title: "java",
	starting_time: "2017-07-23",
	ending_time: "2017-07-24",
	room_no: "5",
});
insert("Meeting", {
	meeting_no: "2",
	meeting_title: "life",
	starting_time: "2017-07-24",
	ending_time: "2017-07-25",
	room_no: "7",
});
insert("Meeting", {
	meeting_no: "2",
	meeting_title: "sea",
	starting_time: "2017-07-23",
	ending_time: "2017-07-24",
	room_no: "9",
});
insert("Meeting", {
	meeting_no: "3",
	meeting_title: "company",
	starting_time: "2017-07-24",
	ending_time: "2017-07-25",
	room_no: "3",
});
insert("Meeting", {
	meeting_no: "4",
	meeting_title: "goals",
	starting_time: "2017-07-23",
	ending_time: "2017-07-25",
	room_no: "2",
});
