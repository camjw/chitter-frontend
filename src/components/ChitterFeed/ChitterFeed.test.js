import React from 'react';
import { shallow } from 'enzyme';
import ChitterFeed from './ChitterFeed';

const chitterFeedWrapper = shallow(<ChitterFeed peeps={[{ id: -1, body: 'Hello test', user: { handle: 'Hello' }, likes: [] }]} />);

describe('ChitterFeed', () => {
  describe('#render', () => {
    it('renders some HTML', () => {
      expect(chitterFeedWrapper.html()).toMatchSnapshot();
    });
  });
});
