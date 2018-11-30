import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
  describe('#render', () => {
    it('calls the getPeeps function', () => {
      const getPeeps = jest.fn();
      shallow(<App
        getPeeps={getPeeps}
        isFetching={false}
        receivedAt={new Date(0)}
      />);
      expect(getPeeps.mock.calls.length).toEqual(1);
    });

    it('informs the user that peeps are being fetched if isFetching is true', () => {
      const getPeeps = jest.fn();
      const appWrapper = shallow(<App
        getPeeps={getPeeps}
        isFetching
        receivedAt={null}
      />);
      expect(appWrapper.html()).toMatchSnapshot();
    });
  });

  describe('button clicking', () => {
    it('has a button which calls refreshPeeps when called', () => {
      const getPeeps = jest.fn();
      const appWrapper = shallow(<App
        getPeeps={getPeeps}
        isFetching={false}
        receivedAt={new Date(0)}
      />);
      appWrapper.find('button').simulate('click');
      expect(getPeeps.mock.calls.length).toEqual(2);
    });
  });
});
