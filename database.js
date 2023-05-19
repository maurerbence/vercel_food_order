const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'aws.connect.psdb.cloud',
	database : 'food_database',
	user : 'yq51wmcxsgn9a5il6ct3',
	password : 'pscale_pw_WaHwoNmXYdypZ7SGe3q7i8NwhYtmysjRGBKEvPAGhtz'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;
