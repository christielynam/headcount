import React from 'react'
import styled from 'styled-components'
import ComparisonCard from '../ComparisonCard/ComparisonCard'
import Card from '../Card/Card'

const ComparisonStyles = styled.div`
  display: flex;
  justify-content: space-evenly
`

const CompareContainer = ({ districts, toggleActive }) => {
  const activeCards = Object.values(districts).filter(district => district.active)
  const displayActives = activeCards.map(card => <Card {...card} key={card.location} toggleActive={toggleActive} />)
  return (
    <ComparisonStyles>
      {displayActives[0]}
      <ComparisonCard activeCount={activeCards.length} />
      {displayActives[1]}
    </ComparisonStyles>
  )
}

export default CompareContainer