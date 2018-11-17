import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DistrictContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`

const CardContainer = ({ districts, toggleActive }) => {
  const displayDistricts = Object.values(districts).map(district => (
    <Card 
      {...district} 
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

CardContainer.propTypes = {
  districts: PropTypes.object.isRequired,
  toggleActive: PropTypes.func.isRequired
}

export default CardContainer