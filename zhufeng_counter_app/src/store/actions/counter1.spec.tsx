import actions from './counter1';
import * as types from '../action-types';
describe('测试counter1', () => {
    it('counter1必须是个对象', () => {
        expect(actions).toBeTruthy();
    });
    it('counter1的返回值应该是{type:"INCREMENT1"}', () => {
        expect(actions.increment1()).toEqual({ type: types.INCREMENT1 })
    });
});