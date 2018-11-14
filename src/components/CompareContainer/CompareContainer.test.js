import React from 'react';
import CompareContainer from './CompareContainer';
import { shallow } from 'enzyme'

describe('CompareContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CompareContainer />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})