import React, { useRef, useState } from 'react'
import './Toast.css'

export const Toast = () => {
    const [toasts,setToasts]=useState([]);
    const timerRef=useRef({})

    const open=(message,type)=>{
        const id=Date.now()
        setToasts([...toasts,{id,message,type}])
        timerRef.current[id]=setTimeout(()=>close(id),5000)
    }

    const close=(id)=>{
        clearTimeout(timerRef.current[id])
        delete timerRef.current[id]
        setToasts((pre)=>pre.filter((data)=>{return data.id!==id}))
    }


  return (
    <div className='container'>
        <div className="toast-container">
            {toasts.map((toast)=>(
                <div className={`toast ${toast.type}`} key={toast.id}>
                    {toast.message}
                    <span onClick={()=>close(toast.id)}>&times;</span>
                </div>
            ))}
        </div>
        <div className="button-group">
            <button onClick={()=>open("this is a success message","success")} className='success'>success</button>
            <button onClick={()=>open("this is a info message","info")} className='info'>info</button>
            <button onClick={()=>open("this is a warning message","warning")} className='warning'>warning</button>
            <button onClick={()=>open("this is a danger message","danger")} className='danger'>danger</button>
        </div>
    </div>
  )
}
