import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program'
import CompareContainer from '../CompareContainer/CompareContainer'
import CardContainer from '../CardContainer/CardContainer'

const Main = styled.div`
  min-height: 100vh;
  background-color: lightgrey
`

class App extends Component {
  constructor() {
    super()
    this.districtData = new DistrictRepository(kinderData)
    this.state = {
      districtStats: this.districtData.districts
    }
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

  render() {
    const { districtStats } = this.state
    return (
      <Main>
        <h1 className='title'>Welcome To Headcount 2.0</h1>
        <CompareContainer districts={districtStats} toggleActive={this.toggleActive} />
        <CardContainer 
          districts={districtStats} 
          toggleActive={this.toggleActive} 
        />
      </Main>
    );
  }
}

export default App;
