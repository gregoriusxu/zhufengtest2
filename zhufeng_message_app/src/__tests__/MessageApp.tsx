import React from 'react';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
import MessageApp from '../components/MessageApp';
import { mount } from 'enzyme';
describe('测试MessageApp', () => {
  test('应该渲染出来一个面板', () => {
    let wrapper = mount(<MessageApp />);
    let panel = wrapper.find('.panel.panel-default');
    let heading = wrapper.find('.panel-heading');
    let body = wrapper.find('.panel-body');
    let footer = wrapper.find('.panel-footer');
    expect(panel).toBeTruthy();
    expect(heading).toBeTruthy();
    expect(body).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  test('默认状态是一个空数组', () => {
    // state={messages:[]}
    let wrapper = mount(<MessageApp />);
    expect(wrapper.state()).toMatchObject({ messages: [] });
  });

  test('如果MessageList组件要存在，并且需要把state里的messages数组传给MessageList ', () => {
    let wrapper = mount(<MessageApp />);
    let messageList = wrapper.find(MessageList);
    expect(messageList.prop('messages')).toBe((wrapper.instance() as any).state.messages);
  });
  test('如果MessageForm组件要存在,向MessageForm传一个方法addMessage', () => {
    let wrapper = mount(<MessageApp />);
    let messageForm = wrapper.find(MessageForm);
    expect(messageForm.prop('addMessage')).toBe((wrapper.instance() as any).addMessage);
  });
  test('如果点击提交按钮，文本框如果有内容的话，应该往App组件添加一条新状态', () => {
    let wrapper = mount(<MessageApp />);
    let messageList = wrapper.find(MessageList);
    let messageForm = wrapper.find(MessageForm);
    let input = messageForm.find('input');
    let button = messageForm.find('button');
    let content = "新消息";
    input.simulate('change', {
      target: { value: content }
    });
    button.simulate('click');
    let newMessages = [{ id: expect.any(String), content }];
    expect(wrapper.state('messages')).toEqual(newMessages);
    messageList = wrapper.find(MessageList);
    expect(messageList.prop('messages')).toEqual(newMessages);
  });

});
