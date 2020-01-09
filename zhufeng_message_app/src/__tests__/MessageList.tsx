import React from 'react';
import MessageList from '../components/MessageList';
import { mount } from 'enzyme';
describe('测试Message', () => {
  test('向组件传递两个消息，应该渲染出二个li', () => {
    let messages = [{ id: '1', content: 'zhufeng' }, { id: '2', content: 'jiagou' }];
    let wrapper = mount(<MessageList messages={messages} />);
    let liItems = wrapper.find('li');
    expect(liItems).toHaveLength(2);
    expect(liItems.at(0).text()).toContain('zhufeng');
    expect(liItems.at(1).text()).toContain('jiagou');
  });
});