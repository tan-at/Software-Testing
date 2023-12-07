import baseIsEqualDeep from '../src/.internal/baseIsEqualDeep.js';
import { expect } from 'chai';

describe('baseIsEqualDeep', function() {
    it('should return true for deeply equal objects', function() {
        const object1 = { a: 1, b: { c: 2 } };
        const object2 = { a: 1, b: { c: 2 } };
        expect(baseIsEqualDeep(object1, object2)).to.be.true;
    });

    it('should return false for non-equal objects', function() {
        const object1 = { a: 1, b: { c: 2 } };
        const object2 = { a: 1, b: { c: 3 } };
        expect(baseIsEqualDeep(object1, object2)).to.be.false;
    });

    it('should handle arrays correctly', function() {
        const array1 = [1, 2, [3, 4]];
        const array2 = [1, 2, [3, 4]];
        expect(baseIsEqualDeep(array1, array2)).to.be.true;
    });
});
