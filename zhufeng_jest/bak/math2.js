//import { add, minus, multiply, divide } from './math';
let { add, minus, multiply, divide } = require('./math');
describe('测试add', () => {
    test('测试2+4=6', () => {
        expect(add(2, 4)).toBe(6);
    });
    test('测试3+3=6', () => {
        expect(add(3, 3)).toBe(6);
    });
});

describe('测试minus', () => {
    test('测试2-4=-2', () => {
        expect(minus(2, 4)).toBe(-2);
    });
    test('测试3-3=0', () => {
        expect(minus(3, 3)).toBe(0);
    });
});
describe('测试multiply', () => {
    test('测试2*4=8', () => {
        expect(multiply(2, 4)).toBe(8);
    });

});

//mocha+chai jest