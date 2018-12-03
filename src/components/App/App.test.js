import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';


describe('App', () => {
  describe('#render', () => {
    it('calls the getPeeps function', () => {
      const getPeeps = jest.fn();
      shallow(<App
        getPeeps={getPeeps}
        isFetching={false}
        receivedAt={0}
      />);
      expect(getPeeps.mock.calls.length).toEqual(1);
    });
    it('Renders the App', () => {
      const getPeeps = jest.fn();
      const appWrapper = shallow(<App
        getPeeps={getPeeps}
        isFetching={false}
        receivedAt={0}
      />);
      const tree = toJson(appWrapper);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('button clicking', () => {
    it('has a button which calls refreshPeeps when called', () => {
      const getPeeps = jest.fn();
      const appWrapper = shallow(<App
        getPeeps={getPeeps}
        isFetching={false}
        receivedAt={0}
      />);
      appWrapper.find('#refreshPeeps').simulate('click');
      expect(getPeeps.mock.calls.length).toEqual(2);
    });
    it('has buttons which display the signup and sign ins', () => {
      const getPeeps = jest.fn();
      const appWrapper = shallow(<App
        getPeeps={getPeeps}
        isFetching={false}
        receivedAt={0}
      />);
      expect(appWrapper.state()).toEqual({ displaySignIn: true, displaySignUp: false });
      appWrapper.find('#showSignUp').simulate('click');
      expect(appWrapper.state()).toEqual({ displaySignIn: false, displaySignUp: true });
      appWrapper.find('#showSignIn').simulate('click');
      expect(appWrapper.state()).toEqual({ displaySignIn: true, displaySignUp: false });
    });
  });
});
