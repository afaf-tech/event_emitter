var db = require('./db');
var userModel = require('./di')({
    db:db
})