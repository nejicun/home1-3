import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Header from './Calendar/Header/Header';
import Table from './Calendar/Table/Table';
function Calendar(props) {

    const {date} = props
    moment.updateLocale('ru',{week:{dow:1}})
    const start = moment(date).startOf('month').startOf('week')
    const end = moment(date).endOf('month').endOf('week')
    const dayNow = moment(date)
    const Days = [];
    let day = start.clone();

    while (!day.isAfter(end)) {
        Days.push(day.clone())
        day.add(1,'day')
     
    }
    
    return (
      <div className="ui-datepicker">
        <Header dayNow = {dayNow}/>
        <Table array={Days} dayNow = {dayNow}/>
      </div>
  )
}

Calendar.propTypes = {}

export default Calendar
