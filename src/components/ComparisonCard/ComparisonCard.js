import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
  return (
    activeCount === 2 && 
    <ComparisonCardStyles>
      <div className='district'>
        <h4>{activeCards[0].location}</h4>
        <p>{findAverage(activeCards[0].location)}</p>
      </div>
      <div className='compare'>
        -----
        {compareAverages(activeCards[0].location, activeCards[1].location).compared}
        -----
      </div>
      <div className='district'>
        <h4>{activeCards[1].location}</h4>
        <p>{findAverage(activeCards[1].location)}</p>
      </div>
    </ComparisonCardStyles>
  )
}

ComparisonCard.propTypes = {
  activeCount: PropTypes.number,
  activeCards: PropTypes.array,
  findAverage: PropTypes.func,
  compareAverages: PropTypes.func
}

export default ComparisonCard