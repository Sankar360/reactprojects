import React, { useEffect, useState } from 'react'
import './Advice.css'

export const Advice = () => {
    const [advice,setAdvice]=useState("")
    const [count,setCount]=useState(0);
    const [total,setTotal]=useState(100);

    const getadvice=async ()=>{
        const url=await fetch("https://api.adviceslip.com/advice")
        const data=await url.json()
        setAdvice(data.slip.advice)
        setCount((e)=>e+1)
        setTotal((e)=>e-1)
    }

    useEffect(()=>{
        getadvice()
    },[])
  return (
    <div className='container'>
        <p className='one'>{advice}</p>
        <button onClick={getadvice}>Take Advice</button>
        <p className='two'>today you take <span>{count}</span> advice remainig <span>{total}</span> advices</p>
    </div>
  )
}
