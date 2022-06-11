import React from 'react'
import moment from 'moment';
function DayNow(props) {
    const day = props.dayNow;


    day.lang('ru')
 
  return (
    <>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{day.format('DD')}</div>
      <div className="ui-datepicker-material-month">{day.format('MMMM')}</div>
      <div className="ui-datepicker-material-year">{day.year()}</div>
    </div>
    <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{day.format('MMMM')}</span>
            <span className="ui-datepicker-year">{day.year()}</span>
        </div>
    </div>
    </>
  )
}

export default DayNow