import assert from 'assert';
import keys from '../src/keys.js'; 

describe('keys function', function() {
    it('should return property names for a simple object', function() {
        const obj = { a: 1, b: 2 };
        const result = keys(obj);
        assert.deepStrictEqual(result, ['a', 'b']);
    });

    it('should handle string (array-like object)', function() {
        const result = keys('hi');
        assert.deepStrictEqual(result, ['0', '1']);
    });

    it('should handle objects with no enumerable properties', function() {
        const obj = Object.create({}, { a: { value: 1, enumerable: false } });
        const result = keys(obj);
        assert.deepStrictEqual(result, []);
    });
});
