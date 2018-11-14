import React from 'react'
import './Card.css'

const Card = ({ location, stats, active, toggleActive, comparison }) => {
  const displayStats = Object.entries(stats).map(year => (
    <li 
      key={year[0]}
      className={year[1] < 0.5 ? 'low' : 'high'}
    >
      {year[0]}: {year[1]}
    </li>
  ))

  return (
    <div className={active ? 'active card' : 'card'} onClick={() => toggleActive(location)}>
      <h4>{location}</h4>
      <ul className='list'>
        {displayStats}
      </ul>
    </div>
  )

}

export default Card