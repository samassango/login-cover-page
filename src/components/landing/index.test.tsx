import * as enzyme from 'enzyme';
import * as React from 'react';
import Landing from './index';

interface IUser {
  firstname: string;
  lastname: string;
  role: string;
  username: string;
}

it('renders landing page correct.', () => {
  const login = enzyme.shallow(<Landing currentUser={{} as IUser} />);
  expect(login.find("div")).toHaveLength(1)
});
