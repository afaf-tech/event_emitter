// MyFancyObservable.js
var util = require('util');
var EventEmitter = require('events').EventEmitter;

function MyFancyObservable() {
  EventEmitter.call(this);
}

util.inherits(MyFancyObservable, EventEmitter);

MyFancyObservable.prototype.hello = function (name) {
    this.emit('hello', name);
};
MyFancyObservable.prototype.cancel = function (name) {
    this.emit('cancel', name);
};
module.exports = MyFancyObservable;