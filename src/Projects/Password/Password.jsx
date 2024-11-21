import React, { useState } from 'react'
import './Password.css'

export const Password = () => {
    const [length,setLength]=useState(8);
    const [upper,setUpper]=useState(true);
    const [lower,setLower]=useState(true);
    const [number,setNumber]=useState(true);
    const [special,setSpecial]=useState(true);
    const [show,setShow]=useState("");

    const genarate=()=>{
        let charset="";
        if (upper) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lower) charset+="abcdefghijklmnopqrstuvwxyz";
        if (number) charset+="0123456789";
        if (special) charset+="!£$%^*()_+-=~#}{[]?/<>";

        let set=""
        for (let i=0;i<length;i++){
            let data=Math.floor(Math.random()*charset.length)
            set+=charset[data]
        }
    setShow(set)
}

    const copy=()=>{
        navigator.clipboard.writeText(show)
    }

  return (
    <div className='container'>
        <h2>password generator</h2>
        <div className="length">
            <label htmlFor="one">password length:</label>
            <input type="number" id='one'
            value={length}
            onChange={(e)=>setLength(e.target.value)}/>
        </div>
        <div className="input-group">
            <input type="checkbox" id="upper"
            checked={upper}
            onChange={(e)=>setUpper(e.target.checked)}/>
            <label htmlFor="upper">uppercase</label>
        </div>
        <div className="input-group">
            <input type="checkbox" id="lower" 
           checked={lower} 
            onChange={(e)=>setLower(e.target.checked)}/>
            <label htmlFor="lower">lowercase</label>
        </div>
        <div className="input-group">
            <input type="checkbox" id="number" 
            checked={number}
            onChange={(e)=>setNumber(e.target.checked)}/>
            <label htmlFor="number">number</label>
        </div>
        <div className="input-group">
            <input type="checkbox" id="special" 
            checked={special} 
            onChange={(e)=>setSpecial(e.target.checked)}/>
            <label htmlFor="special">special</label>
        </div>
        <button className='btn' onClick={genarate}>genaratepassword</button>
        <div className="footer">
            <input type="text" value={show} readOnly />
            <button onClick={copy}>copy</button>
        </div>
    </div>
  )
}