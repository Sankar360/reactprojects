import React, { useEffect, useState } from 'react'
import './Curency.css'
import data from '../Profile/images/curency.png'
import axios from 'axios';

export const Curency = () => {
    const [amount,setAmount]=useState(1);
    const [fromcurency,setFromcurency]=useState("USD");
    const [tocurency,setTocurency]=useState("INR");
    const [curentrate,setCurentrate]=useState(null);
    const [exchangerate,setExchangerate]=useState(null);

    useEffect(()=>{
        const converter=async ()=>{
            try{
                let url=`https://api.exchangerate-api.com/v4/latest/${fromcurency}`
                let data=await axios.get(url)
                /* console.log(data) */
                setExchangerate(data.data.rates[tocurency])
            }catch(error){
                console.error("please check your url valid",error)
            }
        }
        converter()
    },[fromcurency,tocurency])

    useEffect(()=>{
        if (exchangerate!==null){
            setCurentrate((amount*exchangerate).toFixed(2))
        }
    },[amount,exchangerate])

    const handlechange=(e)=>{
        const value=parseFloat(e.target.value)
        setAmount(isNaN(value)?0:value)
    }
    return (
        <div className='container'>
            <div className="box">
                <img src={data} alt="" />
            </div>
            <div className="data">
                <h2>curency convertor</h2>
                <div className="input-container">
                    <label htmlFor="amt">Amount</label>
                    <input type="number" id="amt" value={amount} onChange={handlechange}/>
                </div>
                <div className="input-container">
                    <label htmlFor="fromcurency">FromCurency</label>
                    <select id="fromcurency" value={fromcurency}
                    onChange={(e)=>setFromcurency(e.target.value)}>
                        <option value="USD">USD - United States Doller</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="GBP">GBP - British Bound</option>
                        <option value="JPY">JPY - Japanesh Yarn</option>
                        <option value="AUD">AUD - Australian Doller</option>
                        <option value="CAD">CAD - Canadian Doller</option>
                        <option value="CNY">CNY - Chinesh Yarn</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                        <option value="ZAR">ZAR - South African Rand</option>
                    </select>
                </div>
            </div>
            <div className="input-container">
                    <label htmlFor="tocurency">ToCurency</label>
                    <select id="tocurency" value={tocurency}
                    onChange={(e)=>setTocurency(e.target.value)}>
                        <option value="USD">USD - United States Doller</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="GBP">GBP - British Bound</option>
                        <option value="JPY">JPY - Japanesh Yarn</option>
                        <option value="AUD">AUD - Australian Doller</option>
                        <option value="CAD">CAD - Canadian Doller</option>
                        <option value="CNY">CNY - Chinesh Yarn</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                        <option value="ZAR">ZAR - South African Rand</option>
                    </select>
            </div>
            <div className="footer">
                <p>the {amount} {fromcurency} is equal to {curentrate} {tocurency}</p>
            </div>
        </div>
    )
}
