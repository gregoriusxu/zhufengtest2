import React from 'react';
import Message from '../components/Message';
import { mount } from 'enzyme';
describe('测试Message', () => {
  test('Message应该渲染出来一个li,类名叫list-group-item,内容应该zhufeng', () => {
    let message = { id: '1', content: 'zhufeng' };
    //<li class="list-group-item">zhufeng</li>
    let wrapper = mount(<Message message={message} />);
    let liItems = wrapper.find('li');
    expect(liItems).toHaveLength(1);
    expect(liItems.prop('className')).toBe('list-group-item');
    expect(liItems.prop('children')).toBe('zhufeng');
  });
});
/**
wrapper
<_default message={{...}}>
   <li className="list-group-item">
     zhufeng
   </li>
 </_default>
 *
 */