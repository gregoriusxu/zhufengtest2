export { }
declare var page;

describe('测试App', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/');
    });
    it('标题是珠峰Counter', async () => {
        //page.title() promise
        await expect(page.title()).resolves.toMatch('珠峰Counter');
    });
    it('点击第一导航按钮可以跳到/counter1页面去,显示Counter组件', async () => {
        await page.click('#counter1');
        let text = await page.$eval('p', (el: any) => el.innerText);
        expect(text).toBe('Counter1:0');
        await page.click('#counter2');
        text = await page.$eval('p', (el: any) => el.innerText);
        expect(text).toBe('Counter2:0');
    });
});