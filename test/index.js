'use strict';

var test = require('tape');
var hasSymbolToStringTag = require('../');
var hasSymbolToStringTagShams = require('../shams');
var runSymbolTests = require('./tests');

test('interface', function (t) {
	t.equal(typeof hasSymbolToStringTag, 'function', 'is a function');
	t.equal(typeof hasSymbolToStringTag(), 'boolean', 'returns a boolean');
	t.end();
});

test('Symbol.toStringTag exists', { skip: !hasSymbolToStringTag() }, function (t) {
	runSymbolTests(t);
	t.end();
});

test('Symbol.toStringTag does not exist', { skip: hasSymbolToStringTag() }, function (t) {
	t.equal(typeof Symbol === 'undefined' ? 'undefined' : typeof Symbol.toStringTag, 'undefined', 'global Symbol.toStringTag is undefined');
	t.end();
});

test('shams interface', function (t) {
	t.equal(typeof hasSymbolToStringTagShams, 'function', 'is a function');
	t.equal(typeof hasSymbolToStringTagShams(), 'boolean', 'returns a boolean');
	t.end();
});

test('shams: Symbol.toStringTag exists', { skip: !hasSymbolToStringTagShams() }, function (t) {
	t.equal(hasSymbolToStringTagShams(), true, 'shams returns true when Symbol.toStringTag exists');
	t.end();
});

test('shams: Symbol.toStringTag does not exist', { skip: hasSymbolToStringTagShams() }, function (t) {
	t.equal(hasSymbolToStringTagShams(), false, 'shams returns false when Symbol.toStringTag does not exist');
	t.end();
});
