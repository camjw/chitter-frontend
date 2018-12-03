import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';


const mockStore = configureStore([thunk]);
const initialState = {
  reducePeeps: {
    peeps: [],
    isFetching: false,
  },
  reduceUser: {},
};
const store = mockStore(initialState);

describe('AppContainer', () => {
  it('dispatches REQUEST_PEEPS event', () => {
    const wrapper = shallow(<AppContainer store={store} />);
    wrapper.dive();
    expect(store.getActions()).toEqual([{ isFetching: true, type: 'REQUEST_PEEPS' }]);
  });
});
