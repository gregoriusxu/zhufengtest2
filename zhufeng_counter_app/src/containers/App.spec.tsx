import React from 'react';
//import App from './App';
import 'jsdom-global/register';
import Enzyme, { mount } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../store';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Counter1 from '../components/Counter1';
import Counter2 from '../components/Counter2';
import NavHeader from '../components/NavHeader';
Enzyme.configure({ adapter: new Adaptor() });
/**
 * @jest-environment jsdom
*/
describe('测试App', () => {
    test(`
    1.用户进入首页，看到两个按钮，分别是counter1,counter2
    2.点击counter1,就能看到一段文件 Counter1:0,还有两个按钮,分别写着+和-
    3.然后可以点击+号，这时文本会变成Counter1:1
    4.我们可以点击-号，这时文本会变成 Counter1:0
    5.然后可以点击counter2路由按钮
    `, () => {
        let wrapper = mount(<Provider store={store}>
            <Router>
                <NavHeader />
                <Route path="/counter1" component={Counter1} />
                <Route path="/counter2" component={Counter2} />
            </Router>
        </Provider>);
        let p = wrapper.find('p');
        expect(p).toHaveLength(0);
        //1.用户进入首页，看到两个按钮，分别是counter1,counter2
        let navButtons = wrapper.find('.nav-button');
        expect(navButtons).toHaveLength(2);
        expect(navButtons.at(0).text()).toBe('counter1');
        expect(navButtons.at(1).text()).toBe('counter2');
        //2.点击counter1,就能看到一段文本 Counter1:0,还有两个按钮,分别写着+和-
        let counter1Button = wrapper.find('#counter1');
        counter1Button.simulate('click');
        p = wrapper.find('p');
        expect(p).toHaveLength(1);
        expect(p.text()).toBe('Counter1:0');
        let changeButtons = wrapper.find('.change-btn');
        expect(changeButtons).toHaveLength(3);
        expect(changeButtons.at(0).text()).toBe('+');
        expect(changeButtons.at(1).text()).toBe('-');
        //3.然后可以点击+号，这时文本会变成Counter1:1
        changeButtons.at(0).simulate('click');
        expect(p.text()).toBe('Counter1:1');
        //4.我们可以点击-号，这时文本会变成 Counter1:0
        changeButtons.at(1).simulate('click');
        expect(p.text()).toBe('Counter1:0');
        // 5.然后可以点击counter2路由按钮
        let counter2Button = wrapper.find('#counter2');
        counter2Button.simulate('click');
        p = wrapper.find('p');
        expect(p).toHaveLength(1);
        expect(p.text()).toBe('Counter2:0');
    });
});