import React from 'react'
import styled from 'styled-components'
import ComparisonCard from '../ComparisonCard/ComparisonCard'
import Card from '../Card/Card'
import PropTypes from 'prop-types'

const ComparisonStyles = styled.div`
  display: flex;
  justify-content: space-evenly
`

const CompareContainer = ({ districts, toggleActive, findAverage, compareAverages }) => {
  const activeCards = Object.values(districts).filter(district => district.active)
  const displayActives = activeCards.map(card => ( 
    <Card {...card} toggleActive={toggleActive} key={card.location} />
  ))

  return (
    <ComparisonStyles>
      {displayActives[0]}
      <ComparisonCard 
        findAverage={findAverage}
        compareAverages={compareAverages} 
        activeCards={activeCards} 
        activeCount={activeCards.length} 
      />
      {displayActives[1]}
    </ComparisonStyles>
  )
}

CompareContainer.propTypes = {
  districts: PropTypes.object,
  toggleActive: PropTypes.func,
  findAverage: PropTypes.func,
  compareAverages: PropTypes.func
}

export default CompareContainer