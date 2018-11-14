import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'

const DistrictContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`

const CardContainer = ({ districts, comparison, toggleActive }) => {
  const displayDistricts = Object.values(districts).map(district => (
    <Card 
      {...district} 
      comparison={comparison}
      toggleActive={toggleActive} 
      key={district.location} 
    />
  ))

  return (
    <DistrictContainer>
      {displayDistricts}
    </DistrictContainer>
  )
}   

export default CardContainer