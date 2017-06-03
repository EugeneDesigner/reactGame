'use strict';

const chai = require('chai');

global.chai = chai;
global.expect = chai.expect;

require('babel-register')({
    babelrc: false,
    presets: ['es2015', 'es2017', 'react'],
    plugins: ['transform-object-rest-spread', 'transform-runtime']
});
