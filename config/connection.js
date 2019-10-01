// Set up MySQL connection.
var mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
  var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"password",
    database:"burgers_db"
  });

// };
// Make connection.
connection.connect(function(err){
  if (err){
    console.log(err);
    return;

  }
  console.log("connected" + connection.threadId);
});


// Export connection for our ORM to use.
module.exports = connection;