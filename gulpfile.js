/**
 * Created by tigra on 13.05.16.
 */
'use strict';

require('promise-es6').install();

var requireDir = require('require-dir');

global.devBuild = process.env.NODE_ENV !== 'production';

requireDir('./lib/gulp/tasks', { recurse: true });
