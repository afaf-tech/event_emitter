var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'aan_ppob'
});

var userModel = require('./di')({
    db:connection
})

// userModel.select();
var user1 =userModel;
user1.select();