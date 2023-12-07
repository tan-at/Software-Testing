import chai from 'chai';
import camelCase from '../src/camelCase.js'; 

const { expect } = chai;

describe('camelCase', function() {
  
  it('should convert normal space-separated words to camel case', function() {
    expect(camelCase('Foo Bar')).to.equal('fooBar');
  });

  
  it('should handle strings with dashes', function() {
    expect(camelCase('--foo-bar--')).to.equal('fooBar');
  });

  
  it('should work with underscore-separated words', function() {
    expect(camelCase('__FOO_BAR__')).to.equal('fooBar');
  });
});
