import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'

describe('CardContainer', () => {
  let wrapper
  let mockDistricts

  beforeEach(() => {
    mockDistricts = { 
      ACADEMY20: {location: 'ACADEMY 20', active: false, stats: {2004: '0.302', 2005: '0.267', 2006: '0.354', 2007: '0.392', 2008: '0.385', 2009: '0.39', 2010: '0.436', 2011: '0.489', 2012: '0.479', 2013: '0.488', 2014: '0.49'}}, 
      ADAMSCOUNTY14: {location: 'ADAMS COUNTY 14', active: false, stats: {2004: '0.228', 2005: '0.3', 2006: '0.293', 2007: '0.306', 2008: '0.673', 2009: '1', 2010: '1', 2011: '1', 2012: '1', 2013: '0.998', 2014: '1'}} 
    }
    wrapper = shallow(<CardContainer districts={mockDistricts} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})