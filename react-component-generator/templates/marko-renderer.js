var template = require('./template.marko');
module.exports = function(input, out) {
  var options = {};
  for(var op in input){
    if(!options[op]){
      options[op] = input[op];
    }
  }

  template.render(options, out);
};
