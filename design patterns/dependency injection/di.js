/* Dependency injection is a software design pattern 
in which one or more dependencies (or services) are injected, 
or passed by reference, into a dependent object. */

function userModel (options){
    var db;
    if(!options.db){
        throw new Error('Options.db is required');
    }

    db = options.db;

    return {
        create: function(done){
            db.query('INSERT ...', done)
        }
    }
}


module.exports = userModel;