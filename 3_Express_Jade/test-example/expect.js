// TDD
var assert = require('assert');
var expected, current;

before(function () {
    expected = ['a', 'b', 'c']
})

describe('String#split', function () {
    beforeEach(function () {
        current = 'a,b,c'.split(',')
    });

    it('Should return array', function () {
        assert(Array.isArray(current))
    });

    it('Should return the same array', function () {
        assert.equal(expected.length, current.length, 'array have equal length');
        for (var i = 0; i < expected.length; i++) {
            assert.equal(expected[i], current[i], i + 'element is equal');
        }
    })

})

//BDD
var expect = require('expect.js');

before(function () {
    expected = ['a', 'b', 'c']
})

describe('String#split', function () {
    beforeEach(function () {
        current = 'a,b,c'.split(',')
    });

    it('Should return array', function () {
        assert(Array.isArray(current)).to.be.true
    });

    it('Should return the same array', function () {
        expect(expected.length).to.equal(current.length);
        for (var i = 0; i < expected.length; i++) {
            expect(expected[i].equal(current[i]))
        }
    })

})
