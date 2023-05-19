var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	response.render('sample_data', {title : 'Aktív rendelések'});

});

router.post("/action", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM orders ORDER BY id WHERE done = 0";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var first_name = request.body.first_name;

		var last_name = request.body.last_name;

		var age = request.body.age;

		var gender = request.body.gender;

		var query = `
		INSERT INTO sample_data 
		(first_name, last_name, age, gender) 
		VALUES ("${first_name}", "${last_name}", "${age}", "${gender}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Rendelés sikeresen hozzáadva!'
			});

		});
	}

});

module.exports = router;
