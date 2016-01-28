/**
 * This is just <%= whatIsThis %>.
 *
 */

var <%= filename %>Dispatcher = require("../dispatcher/<%= filename %>.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var <%= filename %>Store = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

<%= filename %>Dispatcher.register(function(payload){
  /* store private methods */

  <%= filename %>Store.emitChanges();

  return true;
});

module.exports = <%= filename %>Store;
