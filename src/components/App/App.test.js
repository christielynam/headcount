import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  it('handleChange sets the state with the search query', () => {
    const mockEvent = {target: {value: 'colorado'}}

    wrapper.setState({query: ''})
    wrapper.find('.search').simulate('change', mockEvent)

    expect(wrapper.state('query')).toEqual('colorado')
  })

  it('activeCount should return the number of districts with the active status', () => {
    const mockDistricts = {'ACADEMY 20': {location: 'ACADEMY20', active: false, stats: {}}, 'AGATE 300': {location: 'AGATE 300', active: true, stats: {}}, 'ASPEN 1': {location: 'ASPEN 1', active: true, stats: {}}}

    wrapper.setState({districtStats: mockDistricts})

    const results = wrapper.instance().activeCount()
    const expected = 2

    expect(results).toEqual(expected)
  })

  it('toggles the active status of a district if there are less than 2 active districts', () => {
    const mockDistricts = {'ACADEMY 20': {location: 'ACADEMY20', active: false, stats: {}}, 'AGATE 300': {location: 'AGATE 300', active: false, stats: {}}, 'ASPEN 1': {location: 'ASPEN 1', active: false, stats: {}}}

    const expected = {'ACADEMY 20': {location: 'ACADEMY20', active: false, stats: {}}, 'AGATE 300': {location: 'AGATE 300', active: false, stats: {}}, 'ASPEN 1': {location: 'ASPEN 1', active: true, stats: {}}}

    wrapper.setState({districtStats: mockDistricts})
    wrapper.instance().toggleActive('ASPEN 1')

    expect(wrapper.state('districtStats')).toEqual(expected)

    wrapper.instance().toggleActive('ACADEMY 20')

    const expected2 = {'ACADEMY 20': {location: 'ACADEMY20', active: true, stats: {}}, 'AGATE 300': {location: 'AGATE 300', active: false, stats: {}}, 'ASPEN 1': {location: 'ASPEN 1', active: true, stats: {}}}

    expect(wrapper.state('districtStats')).toEqual(expected2)
  })

  it('toggles a districts active status to false if there are already 2 active districts and you click an active district', () => {
    const mockDistricts = {'ACADEMY 20': {location: 'ACADEMY20', active: true, stats: {}}, 'AGATE 300': {location: 'AGATE 300', active: false, stats: {}}, 'ASPEN 1': {location: 'ASPEN 1', active: true, stats: {}}}
      
    const expected = {'ACADEMY 20': {location: 'ACADEMY20', active: true, stats: {}}, 'AGATE 300': {location: 'AGATE 300', active: false, stats: {}}, 'ASPEN 1': {location: 'ASPEN 1', active: false, stats: {}}}

    wrapper.setState({districtStats: mockDistricts})
    wrapper.instance().toggleActive('ASPEN 1')

    expect(wrapper.state('districtStats')).toEqual(expected)
  })
})