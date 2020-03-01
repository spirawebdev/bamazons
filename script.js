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
		var userid = input.action;
		inquirer
		.prompt({
			name: "numberOf",
			type: "number",
			message: "how many of this item do you want?",	
		})
		.then(function(number) {
			console.log("It looks like we have 1 of " + input.action + ".")
			var userid = input.action;
			connection.query("SELECT id," + input.action + " FROM products.id", (err,res) => {
				if(err) throw err;
			  
				console.log('Data received from Db:');
				console.log(res);
			  });


		/*function quan(quantity) {
			searchQuan();
		}

		
		
		connection.connect(function searchQuan(err) {
			if (err) throw err;
			con.query("SELECT " + userid + " FROM quantity", function (err, result, fields) {
			  if (err) throw err;
			  console.log(result);
			  console.log(userid);
			});
		  });*/
		  Object.keys(result).forEach(function(key) {
			var row = result[input.action];
			console.log(row.product_name)
		  });
	})
	
})}

