import arrayLikeKeys from '../src/.internal/arrayLikeKeys.js';
import assert from 'assert';

describe('arrayLikeKeys', function() {

  it('should return property names for arrays', function() {
    const result = arrayLikeKeys([1, 2, 3], false);
    assert.deepStrictEqual(result, ['0', '1', '2']);
  });

  it('should return property names for an object', function() {
    const result = arrayLikeKeys({ a: 1, b: 2 }, false);
    assert.deepStrictEqual(result, ['a', 'b']);
  });

  it('should return property names for an array with inherited properties', function() {
    function MyArray() {
      this[0] = 'a';
      this[1] = 'b';
    }
    MyArray.prototype.c = 'c';
    const myArrayInstance = new MyArray();
    const result = arrayLikeKeys(myArrayInstance, true);
    assert.deepStrictEqual(result, ['0', '1', 'c']);
  });

});
