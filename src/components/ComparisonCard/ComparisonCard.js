import React from 'react'
import styled from 'styled-components'

const ComparisonCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 10px 0 10px;
  p {
    text-align: center
  }
`

const ComparisonCard = ({ activeCount, activeCards, findAverage, compareAverages }) => {
  const comparison = () => {
    if(activeCount === 2) {
      return compareAverages(activeCards[0].location, activeCards[1].location)
    }
  }
  const average = comparison()
  return (
    activeCount === 2 && 
    <ComparisonCardStyles>
      <div className='district'>
        <h4>{activeCards[0].location}</h4>
        <p>{findAverage(activeCards[0].location)}</p>
      </div>
      <div className='compare'>-----{average.compared}-----</div>
      <div className='district'>
        <h4>{activeCards[1].location}</h4>
        <p>{findAverage(activeCards[1].location)}</p>
      </div>
    </ComparisonCardStyles>
  )
}

export default ComparisonCard