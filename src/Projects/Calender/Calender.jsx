import React, { useState } from 'react'
import './Calender.css'
export const Calender = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());

    let months=["january","febrary","march","april","may"
      ,"june","july","augest","september","october",
      "november","december"
    ]

    let dayofweek=["sun","mon","tud","wed","thu","fri","sat"]
  
    const daysinmonth=()=>{
      let daysarray=[];

      let firstday=new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1)
    
      let lastday=new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,0)


      for (let i=0;i<firstday.getDay();i++){
        daysarray.push(null)
      }

      for (let i=1;i<=lastday.getDate();i++){
        daysarray.push(new Date(selectedDate.getFullYear(),selectedDate.getMonth(),i))
      }
      return daysarray
    }

    const changemonthleft=()=>{
      setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()-1))
    }

    const changemonthright=()=>{
      setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1))
    }

    const monthchange=(e)=>{
      let month=parseInt(e.target.value)
      setSelectedDate(new Date(selectedDate.getFullYear(),month,1))
    }

    const yearchange=(e)=>{
      let year=parseInt(e.target.value,10)
      setSelectedDate(new Date(year,selectedDate.getMonth(),1))
    }

    const today=(date1,date2)=>{
      return date1.getDate()===date2.getDate()
      && date1.getMonth()===date2.getMonth()
      && date1.getFullYear()===date2.getFullYear()
    }
    return (
    <div className='container'>
      <div className="header">
        <button onClick={changemonthleft}><i class="fa-solid fa-arrow-left"></i></button>
        <select id="month" value={selectedDate.getMonth()}
        onChange={monthchange}>
          {months.map((month,index)=>(
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
        <select id="year" value={selectedDate.getFullYear()}
        onChange={yearchange}>
          {Array.from({length:10},(_,i)=>selectedDate.getFullYear()-5+i).map((day,index)=>(
            <option key={index} value={day}>{day}</option>
          ))}
        </select>
        <button onClick={changemonthright}><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className="dayofweek">
        {dayofweek.map((day,index)=>(
          <div className="day" key={index}>{day}</div>
        ))}
      </div>
      <div className="days">
        {daysinmonth().map((day,index)=>(
          <div className={day?today(day,new Date())?"daysup":"daymini":"empty"} key={index}>
            {day?day.getDate():""}
          </div>
        ))}
      </div>
    </div>
  )
}
