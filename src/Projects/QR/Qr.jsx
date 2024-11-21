import React, { useState } from 'react'
import './Qr.css'

export const Qr = () => {
    const [name,setName]=useState("sankar");
    const [size,setSize]=useState("150");
    const [loading,setLoading]=useState(false);
    const [img,setImg]=useState("");

    const generatecode=async ()=>{
        setLoading(true)
        try{
            let url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${name}`
            setImg(url)
        }catch(error){
            console.error("please check the value")
        }finally{
            setLoading(false)
        }
    }

    const downloadimg=()=>{
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            let link=document.createElement("a");
            link.href=URL.createObjectURL(blob)
            link.download="qr.png"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }).catch((error)=>{
            console.error("please check")
        })
    }

  return (
    <div className='container'>
        <h2>qrcode generator</h2>
        {loading && <p>please wait...</p>}
        {img && <div className="img">
            <img src={img} alt="img" />
        </div>}
        <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' 
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="input-group">
            <label htmlFor="size">size</label>
            <input type="number" id='size' 
            value={size}
            onChange={(e)=>setSize(e.target.value)}/>
        </div>
        <div className="btn">
            <button onClick={generatecode}>Generatecode</button>
            <button onClick={downloadimg}>download</button>
        </div>
    </div>
  )
}
