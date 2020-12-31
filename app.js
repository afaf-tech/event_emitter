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