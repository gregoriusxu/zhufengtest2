let {
    add,
    minus,
    multiply,
    divide
} = require('./math');


describe('测试add', () => {
    it('测试2+4=6', () => {
        assert(add(2, 4) === 6, '2+4!=6');
    });
    it('测试3+3=6', () => {
        assert(add(3, 3) === 6, '3+3!=6');
    });
});

describe('测试minus', () => {
    it('测试2-4=-2', () => {
        assert(minus(2, 4) === 2, '2-4!=-2');
    });
    it('测试3-3=0', () => {
        assert(minus(3, 3) === 0, '3-3!=0');
    });
});
function describe(message, testSuite) {
    testSuite();
}
function it(message, testCase) {
    testCase();
}
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}

