import * as enzyme from 'enzyme';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';

import App from './App';


// it('renders without crashing', () => {
//   const component = enzyme.shallow(<App />);
//   // then
//   expect(component.getElements()).toMatchSnapshot();
// });

it('renders without crashing', () => {
  const component = enzyme.shallow(<App />);
  expect(component.find("Home")).toBeInstanceOf(Object)
});