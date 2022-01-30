var assert = require('assert');
let calculate = require('../../service/calculate');

describe('function add(n1, n2)', function() {
    it('should return 5 when n1 is 2 and n2 is 3', function() {
        assert.equal(calculate.add(2, 3), 5);
    });
});


describe('function sub(n1, n2)', function() {
    it('should return 10 when n1 is 20 and n2 is 10', function() {
        assert.equal(calculate.sub(20, 10), 10);
    });
});

describe('function multi(n1, n2)', function() {
    it('should return 15 when n1 is 5 and n2 is 3', function() {
        assert.equal(calculate.multi(5, 3), 15);
    });
});

describe('function div(n1, n2)', function() {
    it('should return 8 when n1 is 16 and n2 is 2', function() {
        assert.equal(calculate.div(16, 2), 8);
    });
});