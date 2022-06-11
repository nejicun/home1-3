import React from 'react'


function DayWeek(props) {

  const arrayDay = props.day;
  const nowDay1 = props.dayNow;
  let i = 0;
  const array1 = [...Array(5)].map(() => {
    const miniArray = [...Array(7)].map(() => {
        let day  = arrayDay[i].clone();
        i++;
        return day
    })
    console.log(arrayDay[0].format('DD'))
    return miniArray;
  })
  return (        
    <tbody>
        {array1.map((str) => {
          return (
            <tr key={str}>
                {str.map((nowDay) => {
                   console.log(nowDay.format("MM"))
                   if (nowDay.format("MM") != nowDay1.format("MM")) {
                   return (<td key={nowDay} className="ui-datepicker-other-month">{nowDay.format('DD')}</td>)
                   } else {
                      if (nowDay.format("DD") != nowDay1.format("DD")) {
                        return (<td key={nowDay}>{nowDay.format('DD')}</td>)
                      } else {
                        return (<td key={nowDay} className="ui-datepicker-today">{nowDay.format('DD')}</td>)
                      }
                   } 
                }
                )}
            </tr>
            )
          }
          )}
    </tbody>
  )
}
export default DayWeek
