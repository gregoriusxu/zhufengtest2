let puppeteer = require('puppeteer');

const delay = ms => new Promise(function (resolve) {
    setTimeout(() => {
        resolve();
    }, ms);
});
(async function () {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await delay(3000);
    await page.click('#counter1');
    await delay(3000);
    await page.click('#counter1-increment');
    await delay(3000);
    await page.click('#counter1-decrement');
    await delay(3000);
    await browser.close();
})();