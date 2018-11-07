import * as enzyme from 'enzyme';
import * as React from 'react';
import Login from './index';

// it('renders the correct', () => {
//   const login = enzyme.shallow(<Login />);
//   expect(login.find("div#LoginForm")); // .toBeInstanceOf(Object);
// });

it('throws when the login', () => {
  expect(() => {
    enzyme.shallow(<Login />);
  }).toThrow();
});

