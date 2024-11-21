import React, { useEffect, useState } from 'react'
import './Progress.css';

const Mini=()=>{
    const [progres,setProgress]=useState(0)

    useEffect(()=>{
        const interval=setInterval(()=>{
            setProgress((pre)=>{
                if (pre>=100){
                    clearInterval(interval)
                }else{
                    return Math.min(pre+5,100)
                }
            })
        },500)
        return ()=>clearInterval(interval)
    },[])
    return(
        <>
            <div className="progress-bar" >
                <div className="progress" style={{transform:`translate(${progres-100}%)`}}></div>
            </div>
        </>
    )
}

export const Progress = () => {
    const [show,setShow]=useState(false)

    const open=()=>{
        setShow(!show)
    }
  return (
    <div className='container'>
        {show?<Mini/>:""}
        <button onClick={open}>Toggler Button</button>
    </div>
  )
}
