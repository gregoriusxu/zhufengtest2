import store from './';
import * as types from './action-types';
import actions from './actions/counter1';
describe('测试store', () => {
    //在每个用例执行前把store重置一下
    beforeEach(function () {
        store.dispatch({ type: types.RESET });
    })
    it('store必须是存在的', () => {
        expect(store).toBeTruthy();//不能为undefined
    });
    it('store需要要有初始状态', () => {
        expect(store.getState()).toMatchObject({
            counter1: { number: 0 },
            counter2: { number: 0 }
        });
    });
    it('向仓库派发一个动作{type:"INCREMENT1"},counter1的number+1', () => {
        store.dispatch({ type: types.INCREMENT1 });
        expect(store.getState()).toMatchObject({
            counter1: { number: 1 },
            counter2: { number: 0 }
        });
    });
    it('向仓库派发一个动作{type:"DECREMENT1"},counter1的number-1', () => {
        store.dispatch({ type: types.DECREMENT1 });
        expect(store.getState()).toMatchObject({
            counter1: { number: -1 },
            counter2: { number: 0 }
        });
    });
    it('异步+1', () => {
        store.dispatch(actions.asyncIncrement1() as any);
        setTimeout(() => {
            expect(store.getState()).toMatchObject({
                counter1: { number: 1 },
                counter2: { number: 0 }
            });
        }, 1500);
    });
});