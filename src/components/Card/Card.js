import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({ location, stats, active, toggleActive }) => {
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

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func
}

export default Card