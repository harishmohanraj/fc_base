/**
 * This is just an example file created at Sun Jan 10 2016 21:30:15 GMT+0530 (India Standard Time).
 *
 */

var demoDispatcher = require("../dispatcher/demo.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var demoStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

demoDispatcher.register(function(payload){
  /* store private methods */

  demoStore.emitChanges();

  return true;
});

module.exports = demoStore;
