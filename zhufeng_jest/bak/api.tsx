import { callCallback, callPromise } from '../src/api';
describe('异步测试 ', () => {
    it('测试callCallback', (done) => {
        callCallback((result) => {
            expect(result).toEqual({ code: 0 });
            done();
        });
    });
    it('测试callPromise done', (done) => {
        callPromise().then(((result) => {
            expect(result).toEqual({ code: 0 });
            done();
        }));
    });
    it('测试callPromise async', async () => {
        let result = await callPromise();
        expect(result).toEqual({ code: 0 });
    });
    it('测试callPromise resolves', async () => {
        (expect(callPromise()).resolves as any).toMatch({ code: 0 });
    });
});