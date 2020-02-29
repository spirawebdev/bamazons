var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root', 
	database:  'bambazon_db'
});
/*This connects and tests the connection to the database*/
connection.connect(function (err) {
	if (err) {
		console.log('Error connecting to Db');
		throw err;
	}
	console.log("database has been connected!")
});

/*This functions runs and shows that the database is in working order */
connection.query("SELECT * FROM products", (err,res) => {
	if(err) throw err;
  
	console.log('Data received from Db:');
	console.log(res);
	search();
  });


/* This will be used to ask the user for input*/
  function search() {
	  inquirer
	  	.prompt({
			name:"action",
			type: "list",
			message: "Please enter the ID of the item you wish to purchase?",
			choices: [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10"

			]
	  })
	  .then(function(input) {
		console.log("Ah, so you decided you wanted item " + input.action + "?")
		inquirer
		.prompt({
			name: "numberOf",
			type: "number",
			message: "how many of this item do you want?",	
		})
		.then(function(insertNumber) {
		connection.query("SELECT " + input.numberOf + " FROM id " +input.action function(err, res) {
			if (err) throw err;
			console.log(
			  "Position: " +
				res[0].position +
				" || Song: " +
				res[0].song +
				" || Artist: " +
				res[0].artist +
				" || Year: " +
				res[0].year
			);

	  });
		 
		})
	})}
