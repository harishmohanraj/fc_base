/**
 * This is just an example file created at Wed Jan 27 2016 19:04:56 GMT+0530 (India Standard Time).
 *
 */

var carouselDispatcher = require("../dispatcher/carousel.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var carouselStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

carouselDispatcher.register(function(payload){
  /* store private methods */

  carouselStore.emitChanges();

  return true;
});

module.exports = carouselStore;
