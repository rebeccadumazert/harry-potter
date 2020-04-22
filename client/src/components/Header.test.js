import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from './Header';

configure({ adapter: new Adapter() });
test('renders Houses', () => {
  const header = shallow(<Header />);
  expect(header.text()).toMatch(/Houses/);
});
