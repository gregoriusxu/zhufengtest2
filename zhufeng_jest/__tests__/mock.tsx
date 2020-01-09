
import { exec, createInstance, getUsers, delay } from '../src/mock';
import axios from 'axios';
jest.mock('axios');//让jest自己模拟axios
it('测试exec', () => {
    let callback = jest.fn();
    callback.mockReturnValueOnce('abc');
    callback.mockReturnValueOnce('def');
    exec(callback);
    expect(callback).toBeCalled();
    expect(callback).toBeCalledTimes(2);
    expect(callback).toBeCalledWith('123');
    //console.log(callback.mock);
});
it('测试createInstance', () => {
    let callback = jest.fn();
    createInstance(callback);
    ///console.log(callback.mock);
});
it('测试getUsers', async () => {
    (axios.get as any).mockResolvedValue({ data: { code: 0 } });
    let result = await getUsers();
    expect(result.data).toEqual({ code: 0 });
});
jest.useFakeTimers();
it('测试delay', async (done) => {
    delay(result => {
        expect(result).toBe(5000);
        done();
    }, 5000);
    jest.runAllTimers();
});