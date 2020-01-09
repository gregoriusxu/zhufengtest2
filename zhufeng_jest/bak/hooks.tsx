let counter = 0;
describe('counter测试代码', () => {
    beforeAll(() => {
        console.log('BeforeAll'); counter++;
    })

    beforeEach(() => {
        console.log('BeforeEach'); counter++;
    })

    afterEach(() => {
        console.log('AfterEach'); counter++;
    })

    afterAll(() => {
        console.log('AfterAll'); counter++;
        console.log(counter);
    })

    test('测试用例1', () => {
        console.log('测试用例1'); counter++;
    });
    test('测试用例2', () => {
        console.log('测试用例2'); counter++;
    });
});