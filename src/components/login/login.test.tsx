import * as enzyme from 'enzyme';
import * as React from 'react';
import Login from './index';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Login />);
  expect(hello.find("div").text()).toEqual('Login Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Login name='Daniel' enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual('Login Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Login name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Login Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Login name='Daniel' enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Login name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});