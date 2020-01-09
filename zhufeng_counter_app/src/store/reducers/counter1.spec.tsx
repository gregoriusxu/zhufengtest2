import counter1 from './counter1';
import * as types from '../action-types';
describe('测试counter1', () => {
    it('counter1必须是个函数', () => {
        expect(counter1).toBeTruthy();
    });
    it('验证初始状态{number:0}', () => {
        expect(counter1(undefined, { type: '@@REDUX/INIT' })).toEqual({ number: 0 })
    });
    it('派发一个INCREMENT1动作,状态变成{number:1}', () => {
        expect(counter1({ number: 0 }, { type: types.INCREMENT1 })).toEqual({ number: 1 })
    });
    it('派发一个DECREMENT1动作,状态变成{number:1}', () => {
        expect(counter1({ number: 0 }, { type: types.DECREMENT1 })).toEqual({ number: -1 })
    });
});