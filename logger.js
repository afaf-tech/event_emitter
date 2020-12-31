const EventEmitter = require('events');

class Logger extends EventEmitter{
    constructor() {
        super()
        this.id=1;
      }
    log(message, url=`https://`){
        console.log(message);
        this.emit('messageLogged',{id:this.id, url:url})
        this.id +=1
    }
}


module.exports = Logger;