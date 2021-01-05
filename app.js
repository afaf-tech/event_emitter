const Logger  = require('./logger');

const logger = new Logger();

//listener
console.time('how long?');
logger.on('messageLogged',(args)=>{
    console.log(args); // or enter to a log file.
    console.log('listener 1');
})

logger.log('Haloaaa', 'https://google.com')
logger.on('messageLogged',(args)=>{
    console.log(args);
    console.log('listener 2');
})
logger.on('messageLogged',(args)=>{
    console.log(args);
    console.log('listener 3');
})
logger.log('Halofaaa')
console.timeEnd('how long?');



// redis
var redis = require("redis");
// var client = redis.createClient();
const client = redis.createClient({
    host: '173.82.243.249',
    port: 6379,
    password: 'afaf-tech'
});

client.on("connect", function() {
  console.log("You are now connected");
});

// select db 1
client.select(1, function(err,res){
    // you'll want to check that the select was successful here
    // if(err) return err;
    // this will be posted to database 1 rather than db 0
    // direct key-value
    client.set("student", "Laylaa");
    // get as a key
    client.get('student', function(err, reply) {
        console.log(reply);
    });
    
    // store as an object
    console.time("employeeTime")
    client.hmset("employees", { HR: "Anthony", MIS: " Clint", Accounting: "Mark" });
    // get object 
    client.hgetall("employees", function(err, object) {
        console.log(object);
    });
    console.timeEnd("employeeTime")
    
    // client.rpush(["vegetable", "carrot", "celery"], function(err, reply) {
    //     console.log(reply);
    // });
    client.rpush(["vegetable", "popcoy", "salada"], function(err, reply) {
        console.log(reply);
    });
    
    client.lrange("vegetable", 0, -1, function(err, reply) {
        console.log(reply);
    });
    // delete key and related value 
    client.del('vegetable', function(err, o){
        console.log(o);
    });
    
    client.lrange("vegetable", 0, -1, function(err, reply) {
        console.log(reply);
    });
});
