import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import './setupTests';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App')).lengthOf(1);
  });
});
