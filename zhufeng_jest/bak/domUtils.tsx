import { remove, addEventListener } from '../src/domUtils';
test('测试remove', () => {
    document.body.innerHTML = (
        `
          <div id="parent">
             <div id="child">儿子</div>
          </div>
        `
    )
    let parent = document.getElementById('parent');
    expect(parent.nodeName.toLocaleLowerCase()).toBe('div');
    let child = document.getElementById('child');
    expect(child.nodeName.toLocaleLowerCase()).toBe('div');
    remove(child);
    expect(document.getElementById('child')).toBeNull();
});
test('测试addEventListener', () => {
    document.body.innerHTML = (
        `
          <div id="parent">
            <button id="clickMe">click</button>
          </div>
        `
    )
    let clickMe = document.getElementById('clickMe');
    addEventListener(clickMe, 'click', () => {
        clickMe.innerHTML = 'clicked';
    });
    clickMe.click();
    expect(clickMe.innerHTML).toBe('clicked2');
});