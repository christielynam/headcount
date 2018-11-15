import React from 'react';
import ComparisonCard from './ComparisonCard';
import { shallow } from 'enzyme'

describe('ComparisonCard', () => {
  let wrapper
  let mockCount

  beforeEach(() => {
    mockCount = 2
    wrapper = shallow(<ComparisonCard activeCount={mockCount} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})