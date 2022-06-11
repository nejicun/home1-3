import React from 'react'

export default function DayWeek(props) {
    const day = props.dayNow
    console.log('ffasdcmnansdmkfanjsdnfkjasjkdnfakndfkjansdjkfankdjaj')
    console.log(day)
    day.localeData('ru')
    const dayWeek = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
  return (
    <div>
        <div className="ui-datepicker-material-day">{dayWeek[day.day()]}</div>
    </div>
  )
}
