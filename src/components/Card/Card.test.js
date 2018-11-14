import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme'

describe('Card', () => {
  let wrapper
  let mockLocation
  let mockStats
  let mockToggleActive

  beforeEach(() => {
    mockLocation = 'COLORADO'
    mockStats = {2004: '1', 2005: '1', 2006: '1', 2007: '1'}
    mockToggleActive = jest.fn()
    wrapper = shallow(<Card location={mockLocation} active={false} stats={mockStats} toggleActive={mockToggleActive} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleActive when a card is clicked', () => {
    const card = wrapper.find('.card')

    card.simulate('click')

    expect(mockToggleActive).toHaveBeenCalled()
  })
})