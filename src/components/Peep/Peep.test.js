import React from 'react';
import { shallow } from 'enzyme'
import Peep from './Peep'

const peepWrapper = shallow(<Peep peep={ {body: 'Hello Jest'} } />)

describe('Peep', () => {
  it('renders some HTML', () => {
    expect(peepWrapper.html()).toEqual('Hello')
  })
})
