import React from 'react'
import PropTypes from 'prop-types'
import DaysWeek from './DaysWeek/DaysWeek'
import DayWeek from './DayWeek/DayWeek'

const Table = props => {

  return (
    <>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
      </colgroup>
      <DaysWeek />  
      <DayWeek day={props.array} dayNow = {props.dayNow}/>
    </table>
    </>
  )
}

Table.propTypes = {}

export default Table