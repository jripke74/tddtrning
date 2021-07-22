'use strict';

const { expect } = require('chai');
const { isAnagram } = require('./anagrams');

describe('isAnagram - basic functionanlity', () => {
  it('returns true when two known anagrams are passed in', () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns false when either of the strings has extra letters', () => {
    const expected = false;
    const actual = isAnagram('elbows', 'below');
    expect(actual).to.equal(expected);

    const actual2 = isAnagram('below', 'elbows');
    expect(actual2).to.equal(expected);
  });

  // eslint-disable-next-line max-len
  it('returns false when the strings have the same letters in different in different quantities',
    () => {
      const expected = false;
      const actual = isAnagram('listens', 'silent');
      expect(actual).to.equal(expected);
    });
});
