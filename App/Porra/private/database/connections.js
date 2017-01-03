/**
 * Created by manu on 20/10/16.
 */

var dbConnection;
var mysql = require('mysql');

//35.164.30.196:3306 ubuntu-ubuntu
dbConnection = mysql.createConnection({
    host : '35.164.30.196',
    port : '3306',
    user : 'ubuntu',
    password : 'ubuntu',
    database : 'cret'
});

dbConnection.connect(function(err) {
    /*
     if (err) throw err;
     */
    if (err) {
        console.log("Error al conectar con BD");
    } else {
        console.log("Database connected")
    }
});

module.exports = dbConnection;
