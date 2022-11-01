import mysql, { createConnection } from "mysql";

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

function transferBetweenAccounts() {
	db.beginTransaction(function (err) {
		if (err) {
			throw err;
		}

		db.query(
			`UPDATE account set balance = 500 WHERE account_number=5557781`,
			(err, results) => {
				if (err) {
					return db.rollback(function () {
						throw err;
					});
				}

				db.query(
					`INSERT INTO account_changes SET ?`,
					{
						change_number: "5",
						account_number: "5557781",
						amount: "-1000",
						changed_date: "2020-10-29",
						remark: "transfer",
					},
					(err, results) => {
						if (err) {
							return db.rollback(function () {
								throw err;
							});
						}

						db.query(
							`UPDATE account set balance = 2600 WHERE account_number=5557792`,
							(err, results) => {
								if (err) {
									return db.rollback(function () {
										throw err;
									});
								}

								db.query(
									`INSERT INTO account_changes SET ?`,
									{
										change_number: "6",
										account_number: "5557792",
										amount: "1000",
										changed_date: "2020-10-29",
										remark: "deposit",
									},
									(err, results) => {
										if (err) {
											return db.rollback(function () {
												throw err;
											});
										}

										db.commit(function (err) {
											if (err) {
												return db.rollback(function () {
													throw err;
												});
											}
											console.log("success!");
										});
									}
								);
							}
						);
					}
				);
			}
		);
	});
}
//5557781, 5557792, 1000
transferBetweenAccounts();
