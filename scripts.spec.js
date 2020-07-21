const { add, subtract } = require('./scripts');

describe('add', function() {
    it('adds integers', function() {
        expect(add(2, 3)).toEqual(5);
    });
    it('works with decimals', function() {
        expect(add(2.5, 2.5)).toEqual(5);
    });
});

describe('subtract', function() {
    it('subtracts integers', function() {
        expect(subtract(5, 3)).toEqual(2);
    });
    it('can return negative numbers', function() {
        expect(subtract(3, 5)).toEqual(-2);
    });
    it('works with decimals', function() {
        expect(subtract(5, 2.5)).toEqual(2.5);
    });
});