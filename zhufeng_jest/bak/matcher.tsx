
it('演示matchers的用法', () => {
    expect(1 + 1).toBe(2);// ===
    expect({ name: 'zhufeng' }).toEqual({ name: 'zhufeng' });//== 深比较
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect([1, 2, 3]).toContain(2);
    expect({ age: 10, name: 'zhufeng' }).toHaveProperty('name');
    expect('123').toContain('2');
    expect('abc').toMatch(/\w+/);
    expect([1, 2, 3]).not.toContain(4)
});