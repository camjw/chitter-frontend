import React from 'react';
import { shallow } from 'enzyme'
import Peep from './Peep'

const peepWrapper = shallow(<Peep peep={ {body: 'Hello Jest', user: { handle: 'Test user' }, created_at: new Date() } } />)

describe('Peep', () => {
  describe('#render', () => {
    it('renders some HTML', () => {
      expect(peepWrapper.html()).toMatchSnapshot()
    })
  })
})
