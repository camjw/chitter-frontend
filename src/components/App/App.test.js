import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
  describe('#render', () => {
    it('calls the getPeeps function', () => {
      App.prototype.getPeeps = jest.fn();
      const getPeeps = jest.fn();
      const clearPeeps = jest.fn();
      let appWrapper = shallow(<App getPeeps={getPeeps} clearPeeps={clearPeeps} isFetching={false} />);
      expect(appWrapper.html()).toEqual('hello');
    });
  });
});
