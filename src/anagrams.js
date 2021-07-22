'use strict';

const { isEqual } = require('lodash');

const { getLetterCount } = require('./letter-count');

exports.isAnagram = (string1, string2) => {
  const string1LetterCount = getLetterCount(string1);
  const string2LetterCount = getLetterCount(string2);

  return isEqual(string1LetterCount, string2LetterCount);
};
