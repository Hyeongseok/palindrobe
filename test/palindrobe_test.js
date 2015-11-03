'use strict';

var palindrobe = require('../lib/palindrobe.js');

exports['test'] = {
    'correctly matches palindrome string': function(test) {
        test.expect(1);
        test.ok(palindrobe.test('Was it a car or a cat I saw?'));
        test.done();
    },
    'correctly matches non-palindrome strings': function(test) {
        test.expect(1);
        test.equal(palindrobe.test('This is not a palindrome'), false);
        test.done();
    },
    'returns false when passed blank strings': function(test) {
        test.expect(1);
        test.equal(palindrobe.test(''), false);
        test.done();
    },
    'returns false when passed only punctuation/spaces': function(test) {
        test.expect(1);
        test.equal(palindrobe.test(' ?., '), false);
        test.done();
    },
    'returns false when passed non-string values': function(test) {
        test.expect(2);
        test.equal(palindrobe.test(1234), false, 'should not accept numbers');
        test.equal(palindrobe.test(), false, 'should not accept undefined');
        test.done();
    }
};
