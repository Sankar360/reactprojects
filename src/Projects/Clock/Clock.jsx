import React, { useEffect, useState } from 'react'
import './Clock.css'

export const Clock = () => {
    const [currenttime,setCurrenttime]=useState(new Date());

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrenttime(new Date())
        },1000)
        return ()=>clearInterval(interval)
    },[])

    const hourcheck=(hour)=>{
        return hour == 0?12:hour>12?hour-12:hour
    }

    const secondcheck=(num)=>{
        return num<10?`0${num}`:num
    }

    const datechange=(date)=>{
        const option={day:"numeric",year:"numeric",weekday:"long",month:"long"}
        return date.toLocaleDateString(undefined,option)
    }
  return (
    <div className='container'>
        <h2>Digital clock</h2>
        <p className='one'>
            {secondcheck(hourcheck(currenttime.getHours()))}:
            {secondcheck(hourcheck(currenttime.getMinutes()))}:
            {secondcheck(hourcheck(currenttime.getSeconds()))} <span>PM</span></p>
        <p className='two'>{datechange(currenttime)}</p>
    </div>
  )
}
