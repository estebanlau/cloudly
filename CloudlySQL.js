var db;
var name = "Cloudly";
var version = "1.0";
var dbDisplayName = "cloudly_db";
var dbSize = 2 * 1024 * 1024;


function databaseControl(emailInput) {
	try {
		db = openDatabase(name, version, dbDisplayName, dbSize, function(database) {
			alert("database creation callback"); 
		});
	}

	db.transaction(function(t) {
		t.executeSQL("CREATE TABLE IF NOT EXISTS CloudlyTable (id INTEGER PRIMARY KEY, email TEXT)");
		t.executeSQL("INSERT INTO CloudlyTable (id, email) VALUES (1, ?)", [emailInput]); //document.getElementById("email").value
	});
}