import React from 'react'
import PropTypes from 'prop-types'
import DayWeek from './DayWeek/DayWeek'
import DayNow from './DayNow/DayNow'

const Header = props => {
  const nowDay = props.dayNow

  return (
    <div>
      <div className="ui-datepicker-material-header">
        <DayWeek dayNow = {nowDay}/>
        <DayNow dayNow = {nowDay}/>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header