var MyFancyObservable = require('./MyFancyObservable')

var obserfable = new MyFancyObservable()
obserfable.on('hello', function(name){
    console.log(name);
})

obserfable.on('cancel', function(str){
    console.log(`${str.toUpperCase()} canceled!`);
})

obserfable.hello('john')
obserfable.cancel('booking')
