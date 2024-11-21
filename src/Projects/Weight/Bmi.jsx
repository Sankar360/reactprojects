import React, { useState } from 'react'
import './Bmi.css'
import mini from '../Profile/images/weight.png'

export const Bmi = () => {
    const [height,setHeight]=useState("150")
    const [weight,setWeight]=useState("65")
    const [error,setError]=useState("")
    const [bmi,setBmi]=useState(null)
    const [status,setStatus]=useState("")

    const genarate=()=>{
        let heightcheck=/^\d+$/.test(height)
        let weightcheck=/^\d+$/.test(weight)
        if (heightcheck && weightcheck){
            let meter=height/100
            let bmicheck=weight/(meter*meter)
            setBmi(bmicheck.toFixed(2))
            if(bmicheck<18.5){
                setStatus("less weight")
            }else if(bmicheck>=18.5 && bmicheck<25.4){
                setStatus("normal weight")
            }else if(bmicheck>=25.4 && bmicheck<29.5){
                setStatus("over weight")
            }else{
                setStatus("obese")
            }
            setError("")
        }else{
            setBmi(null)
            setError("please check valid number")
            setStatus("")
        }
    }

    const clear=()=>{
        setBmi(null)
        setStatus("")
        setHeight("")
        setWeight("")
        setError("")
    }

  return (
    <div className='container'>
        <div className="img">
            <img src={mini} alt="" />
        </div>
        <div className="input-group">
            <h1>bmi calculator</h1>
            {error && <p className='three'>{error}</p>}
            <div className="label">
                <label htmlFor="height">height</label>
                <input type="number" 
                value={height}
                onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="label">
                <label htmlFor="weight">weight</label>
                <input type="number"
                value={weight} 
                onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div className="btn">
                <button onClick={genarate} className='one'>Generate bmi</button>
                <button onClick={clear} className='two'>clear</button>
            </div>
            {bmi!==null && <div className="footer">
                <p>bmi:{bmi}</p>
                <p>bmi_status:{status}</p>
            </div>}
        </div>

    </div>
  )
}
