import React from 'react';
import { shallow } from 'enzyme'
import ChitterFeed from './ChitterFeed'

const chitterFeedWrapper = shallow(<ChitterFeed peeps={ [{ body: 'Hello test', user: { handle: 'Hello' } }] }/>)

describe('ChitterFeed', () => {
  describe('#render', () => {
    it('renders some HTML', () => {
      expect(chitterFeedWrapper.html()).toMatchSnapshot()
    })
  })
})
