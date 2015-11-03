/*
 * palindrobe
 * https://github.com/romanze/palindrobe
 *
 * Copyright (c) 2015 Hyeongseok Kang
 * Licensed under the MIT license.
 */

'use strict';

exports.test = function(string) {
    var relevantCharacters,   
        filteredString,   
        reversedString;

    if (typeof string !== 'string') {
        return false;
    }

    relevantCharacters = string.match(/[a-z0-9]/gi);

    if (!relevantCharacters) {
        return false;
    }
    
    filteredString = relevantCharacters.join('').toLowerCase();
    reversedString = filteredString.split('').reverse().join('');

    return filteredString.length > 0 && filteredString === reversedString;
};
