import React from 'react';
import MessageForm from '../components/MessageForm';
import { mount } from 'enzyme';
describe('测试Message', () => {
  test('此组件应该渲染出一个表单，表单有input,button', () => {
    let wrapper = mount(<MessageForm />);
    let form = wrapper.find('form');
    expect(form).toHaveLength(1);
    let input = wrapper.find('input');
    let button = wrapper.find('button');
    expect(input).toHaveLength(1);
    expect(button).toHaveLength(1);
  });

  test('如果点击按钮的时候，内容 为空，则不能提交表单', () => {
    let addMessage = jest.fn();
    let wrapper = mount(<MessageForm addMessage={addMessage} />);
    let input = wrapper.find('input');
    let button = wrapper.find('button');
    let newValue = '';
    input.simulate('change', {
      target: { value: newValue }
    });
    button.simulate('click');
    expect(addMessage).not.toHaveBeenCalled();
  });
  test('如果点击按钮的时候，内容不为空，则可以提交表单', () => {
    let addMessage = jest.fn();
    let wrapper = mount(<MessageForm addMessage={addMessage} />);
    let input = wrapper.find('input');
    let button = wrapper.find('button');
    let newValue = '新内容';
    input.simulate('change', {
      target: { value: newValue }
    });
    button.simulate('click');
    expect(addMessage).toHaveBeenCalledWith(newValue);//addMessage('新内容');
  });

});
/**
 *
 *
 *
 */