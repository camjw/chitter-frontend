import React from 'react';
import { shallow } from 'enzyme';
import Peep from './Peep';

const peepWrapper = shallow(<Peep peep={{ body: 'Hello Jest', user: { handle: 'Test user' }, created_at: new Date(), likes: [] }} />);
const peepWrapperLiked = shallow(<Peep peep={{ body: 'Hello Jest', user: { handle: 'Test user' }, created_at: new Date(), likes: ['Billy'] }} />);

describe('Peep', () => {
  describe('#render', () => {
    it('renders some HTML', () => {
      expect(peepWrapper.html()).toMatchSnapshot();
    });

    it('renders likes if there are any', () => {
      expect(peepWrapperLiked.html()).toMatchSnapshot();
    });
  });
});
