import React from 'react';
import Test from './Test.js';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Test />', () => {
  it('성공적으로 렌더링되어야 합니다.', () => {
    const wrapper = shallow(<Test />);
    expect(wrapper.length).toBe(1);
  });

  it('타이틀 인풋이 렌더링되어야 합니다.', () => {
    const wrapper = shallow(<Test />);
    expect(wrapper.find('#title').length).toEqual(1);
  });

  it('타이틀이 변경되어야 합니다.', () => {
    const wrapper = shallow(<Test />);
    wrapper.find('#title').simulate('change', { target: { value: '값' } });
    expect(wrapper.state().title).toBe('값');
  });
  /*
  it('숫자가 올라가야 합니다.', () => {
    const wrapper = shallow(<Test />);
    wrapper.find('.up').simulate('click');
    wrapper.find('.up').simulate('click');
    expect(wrapper.state().value).toBeLessThan(1);
  });
  */
});