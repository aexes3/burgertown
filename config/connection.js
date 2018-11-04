// Set up MySQL connection.
var mysql = require("mysql");

const PORT = process.env.PORT || 5000;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Faster45",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// app.listen(PORT, function(){
//   console.log('listening for APP', PORT);
// })

module.exports = connection;