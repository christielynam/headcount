import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program'
import CompareContainer from '../CompareContainer/CompareContainer'
import CardContainer from '../CardContainer/CardContainer'

const Main = styled.div`
  min-height: 100vh;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  .search {
    width: 400px;
    height: 50px;
    margin: 20px 0 20px 0;
    padding-left: 10px;
    font-size: 20px;
  }
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      districtStats: {},
      query: ''
    }
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ query: value })
    const searchResults = this.districtData.findAllMatches(value)
    this.setState({ districtStats: searchResults })
  }

  activeCount = () => {
    const active = Object.values(this.state.districtStats).filter(district => district.active)
    return active.length
  }

  toggleActive = (location) => {
    const { districtStats } = this.state
    const selectedDistrict = districtStats[location]
    const count = this.activeCount()
    if(count < 2 || selectedDistrict.active) {
      const updatedDistrict = {...selectedDistrict, active: !selectedDistrict.active}
      this.setState({
        districtStats: {...districtStats, [location]: updatedDistrict}
      })
    } 
  }

  componentDidMount() {
    this.districtData = new DistrictRepository(kinderData)
    const districtStats = this.districtData.districts
    this.setState({ districtStats })
  }

  render() {
    const { districtStats, query } = this.state
    return (
      <Main>
        <h1 className='title'>Welcome To Headcount 2.0</h1>
        <input 
          type='text' 
          className='search' 
          placeholder='Search for a district' 
          value={query}
          onChange={this.handleChange} 
        />
        <CompareContainer
          findAverage={this.districtData && this.districtData.findAverage}
          compareAverages={this.districtData && this.districtData.compareDistrictAverages}
          districts={districtStats} 
          toggleActive={this.toggleActive} 
        />
        <CardContainer 
          districts={districtStats} 
          toggleActive={this.toggleActive} 
        />
      </Main>
    );
  }
}

export default App;
