/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
_.defaults = require('merge-defaults');

/**
 * sails-generate-reactview
 *
 * Usage:
 * `sails generate reactview`
 *
 * @description Generates a reactview
 * @help See http://links.sailsjs.org/docs/generators
 */

module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Object} scope
   * @param  {Function} cb    [callback]
   */

  before: function (scope, cb) {
    // scope.args are the raw command line arguments.
    //
    // e.g. if someone runs:
    // $ sails generate reactview user find create update
    // then `scope.args` would be `['user', 'find', 'create', 'update']`
    if (!scope.args[0]) {
      return cb( new Error('Please provide a name for this React Component.') );
    }

    // scope.rootPath is the base path for this generator
    //
    // e.g. if this generator specified the target:
    // './Foobar.md': { copy: 'Foobar.md' }
    //
    // And someone ran this generator from `/Users/dbowie/sailsStuff`,
    // then `/Users/dbowie/sailsStuff/Foobar.md` would be created.
    if (!scope.rootPath) {
      return cb( INVALID_SCOPE_VARIABLE('rootPath') );
    }


    // Attach defaults
    _.defaults(scope, {
      createdAt: new Date()
    });

    // Decide the output filename for use in targets below:
    scope.filename = scope.args[0];

    //todo: template engine specific path defenitions
    scope.pathResolverString = "${path.resolve(__dirname, '../../api/controllers/RenderComponentsController')}";
    scope.rendererClassBegins = "${renderer.serverRenderer('";
    scope.rendererClassEnds = "')}";

    // Add other stuff to the scope for use in our templates:
    scope.whatIsThis = 'an example file created at '+scope.createdAt;

    // When finished, we trigger a callback with no error
    // to begin generating files/folders as specified by
    // the `targets` below.
    cb();
  },



  /**
   * The files/folders to generate.
   * @type {Object}
   */

  targets: {

    // Usage:
    // './path/to/destination.foo': { someHelper: opts }

    // Creates a dynamically-named file relative to `scope.rootPath`
    // (defined by the `filename` scope variable).
    //
    // The `template` helper reads the specified template, making the
    // entire scope available to it (uses underscore/JST/ejs syntax).
    // Then the file is copied into the specified destination (on the left).

    './assets/js/components/:filename/scripts/actions/:filename.Action.js': { template: 'actions.js' },
    './assets/js/components/:filename/scripts/dispatcher/:filename.Dispatcher.js': { template: 'dispatcher.js' },
    './assets/js/components/:filename/scripts/stores/:filename.Stores.js': { template: 'store.js' },
    './assets/js/components/:filename/scripts/components/:filename.Component.js': { template: 'component.js' },
    './assets/js/components/:filename/renderer.js': { template: 'marko-renderer.js' },
    './assets/js/components/:filename/template.marko': { template: 'marko-template.js' },
    './assets/js/components/:filename/index.html': { template: 'index.js' },
    './assets/js/components/:filename/styles/:filename.scss': { template: 'sampleSCSS.js' }

    // Creates a folder at a static path
    //'./component-factory/:filename': { template: 'example.template.js' }

  },


  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` helper)
   *
   * @type {String}
   */
  templatesDirectory: require('path').resolve(__dirname, './templates')
};





/**
 * INVALID_SCOPE_VARIABLE()
 *
 * Helper method to put together a nice error about a missing or invalid
 * scope variable. We should always validate any required scope variables
 * to avoid inadvertently smashing someone's filesystem.
 *
 * @param {String} varname [the name of the missing/invalid scope variable]
 * @param {String} details [optional - additional details to display on the console]
 * @param {String} message [optional - override for the default message]
 * @return {Error}
 * @api private
 */

function INVALID_SCOPE_VARIABLE (varname, details, message) {
  var DEFAULT_MESSAGE =
  'Issue encountered in generator "reactview":\n'+
  'Missing required scope variable: `%s`"\n' +
  'If you are the author of `sails-generate-reactview`, please resolve this '+
  'issue and publish a new patch release.';

  message = (message || DEFAULT_MESSAGE) + (details ? '\n'+details : '');
  message = util.inspect(message, varname);

  return new Error(message);
}
