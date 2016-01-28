/**
 * This is just an example file created at Wed Jan 27 2016 18:39:00 GMT+0530 (India Standard Time).
 *
 */

var testDispatcher = require("../dispatcher/test.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var testStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

testDispatcher.register(function(payload){
  /* store private methods */

  testStore.emitChanges();

  return true;
});

module.exports = testStore;
