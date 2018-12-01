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

  it('year should have a className of low if the percerntage is < .05', () => {
    mockStats = {2005: 0.35}
    wrapper = shallow(<Card location={mockLocation} active={false} stats={mockStats} toggleActive={mockToggleActive} />)
    const year = wrapper.find('li')

    expect(year.hasClass('low')).toBe(true)
    expect(year.hasClass('high')).toBe(false)
  })

  it('year should have a className of high if the percerntage is > .05', () => {
    mockStats = {2005: 0.65}
    wrapper = shallow(<Card location={mockLocation} active={false} stats={mockStats} toggleActive={mockToggleActive} />)
    const year = wrapper.find('li')

    expect(year.hasClass('high')).toBe(true)
    expect(year.hasClass('low')).toBe(false)
  })

  it('should just have a className of card if the card is not active', () => {
    const card = wrapper.find('.card')

    expect(card.hasClass('card')).toBe(true)
    expect(card.hasClass('active')).toBe(false)
  })

  it('should have a className of card and active if the card is active', () => {
    wrapper = shallow(<Card location={mockLocation} active={true} stats={mockStats} toggleActive={mockToggleActive} />)
    const card = wrapper.find('.card')
    
    expect(card.hasClass('card')).toBe(true)
    expect(card.hasClass('active')).toBe(true)
  })

  it('should call toggleActive when a card is clicked', () => {
    const card = wrapper.find('.card')

    card.simulate('click')

    expect(mockToggleActive).toHaveBeenCalled()
  })
})