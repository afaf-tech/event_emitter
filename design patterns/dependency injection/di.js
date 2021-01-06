/* Dependency injection is a software design pattern 
in which one or more dependencies (or services) are injected, 
or passed by reference, into a dependent object. */

function userModel (options){
    var db;
    if(!options.db){
        throw new Error('Options.db is required');
    }

    db = options.db;

    db.connect(function(err) {
        if (err) throw err;
        console.log('connected as id ' + db.threadId);
    });

    return {
        create: function(quer){
            db.query('INSERT INTO users SET ?', {name: 'test', email: 'test@gmail.com'}, function (error, results, fields) {
                if (error) throw error;
                console.log(results.insertId);
              });
        },
        select: function(){
            db.query('SELECT * FROM users', function (error, results, fields) {
                if (error) throw error;
                console.log('The solution is: ', results);
                return results;
            });
        },
        
        find: function(id){
            var sql    = 'SELECT * FROM users WHERE id = ' + db.escape(id);
            db.query(sql, function(err, results, fields){
                if (err) throw err;
                var resultArray = Object.values(JSON.parse(JSON.stringify(results)))
                console.log(resultArray[0]);
                return resultArray[0]
            })
        },
        delete : function(id){
            db.query(`DELETE FROM posts WHERE id = ${id}`, function (error, results, fields) {
                if (error) throw error;
                console.log('deleted ' + results.affectedRows + ' rows');
            })
        }
    }
}


module.exports = userModel;