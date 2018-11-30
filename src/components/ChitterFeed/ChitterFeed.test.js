import React from 'react';
import { shallow } from 'enzyme'
import ChitterFeed from './ChitterFeed'

const chitterFeedWrapper = shallow(<ChitterFeed peeps={ [{ peep: { body: 'Hello test' } }] }/>)

describe('ChitterFeed', () => {
  describe('#render', () => {
    it('renders some HTML', () => {
      expect(chitterFeedWrapper.html()).toEqual('hello')
    })
  })
})
