import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import DistrictRepository from '../../DistrictRepository';
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
      districtRepository: {},
      districts: {},
      query: ''
    }
  }

  handleChange = (e) => {
    const { districtRepository } = this.state
    const { value } = e.target
    this.setState({ query: value })
    const searchResults = districtRepository.findAllMatches(value)
    this.setState({ districts: searchResults })
  }

  activeCount = () => {
    const active = Object.values(this.state.districts).filter(district => district.active)
    return active.length
  }

  toggleActive = (location) => {
    const { districts } = this.state
    const selectedDistrict = districts[location]
    const count = this.activeCount()
    if(count < 2 || selectedDistrict.active) {
      const updatedDistrict = {...selectedDistrict, active: !selectedDistrict.active}
      this.setState({
        districts: {...districts, [location]: updatedDistrict} 
      })
    } 
  }

  componentDidMount() {
    const districtRepository = new DistrictRepository(kinderData)
    this.setState({ 
      districtRepository, 
      districts: districtRepository.districts 
    })
  }

  render() {
    const { districtRepository: {findAverage, compareDistrictAverages}, districts, query } = this.state
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
          findAverage={findAverage}
          compareAverages={compareDistrictAverages}
          districts={districts} 
          toggleActive={this.toggleActive} 
        />
        <CardContainer 
          districts={districts} 
          toggleActive={this.toggleActive} 
        />
      </Main>
    );
  }
}

export default App;
