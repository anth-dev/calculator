const add = require('./scripts');

describe('add', function() {
    it('adds integers', function() {
        expect(add(2, 3)).toEqual(5);
    });
    it('works with decimals', function() {
        expect(add(2.5, 2.5)).toEqual(5);
    });
});