/**
 * This is just an example file created at Sat Jan 09 2016 23:11:40 GMT+0530 (IST).
 *
 */

var sampleDispatcher = require("../dispatcher/sample.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var sampleStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

sampleDispatcher.register(function(payload){
  /* store private methods */

  sampleStore.emitChanges();

  return true;
});

module.exports = sampleStore;
