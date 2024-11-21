import React, { useState,useEffect } from 'react'
import './Weather.css';

import Clear from './images/clear.jpeg';
import Cloud from './images/cloud.png';
import Drizzle from './images/drizzle.png';
import Humidity from './images/humidity.png';
import Rain from './images/rain.png';
import Search from './images/search.jpeg';
import Snow from './images/snow.png';
import Wind from './images/wind.png';

const WeatherDetails=({icon,temp,lat,log,humidity,wind,city,country})=>{
    return(
        <>
            <div className="img">
                <img src={icon} alt="" />
            </div>
            <div className="temp">{temp}'c</div>
            <div className="city">{city}</div>
            <div className="country">{country}</div>
            <div className="card">
                <div className="lat">
                    <span className='lat'>{lat}</span>
                    <span className='four'>latitide</span>
                </div>
                <div className="log">
                    <span className='log'>{log}</span>
                    <span className='four'>logitude</span>
                </div>
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={Wind} className='two' alt="" />
                    <div className="datas">
                    <div className="wind">{wind}km/hr</div>
                    <div className="text">Wind</div>
                    </div>
                </div>
                <div className="element">
                    <img src={Humidity} className='two' alt="" />
                    <div className="datas">
                    <div className="humidity">{humidity}%</div>
                    <div className="text">Humidity</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Weather = () => {
    const key="6f694d90b1c386490b96c68d2a288693"
    const [icon,setIcon]=useState("");
    const [search,setSearch]=useState("chennai")
    const [temp,setTemp]=useState(0);
    const [city,setCity]=useState("");
    const [country,setCountry]=useState("")
    const [lat,setLat]=useState(0);
    const [log,setLog]=useState(0);
    const [wind,setWind]=useState(0);
    const [humidity,setHumidity]=useState(0);
    const [citynotfound,setCityNotFound]=useState(false);
    const[loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    const weathericon={
        "01d":Clear,
        "01n":Clear,
        "02d":Cloud,
        "02n":Cloud,
        "03d":Drizzle,
        "03n":Drizzle,
        "04d":Drizzle,
        "04n":Drizzle,
        "09d":Rain,
        "09n":Rain,
        "10d":Rain,
        "10n":Rain,
        "13d":Snow,
        "13n":Snow,
    }
    
    const searchitem=async ()=>{
        setLoading(true)
        try{
            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=Metric`)
            const data=await res.json()
            if (data.cod==="404"){
                console.error("city not found")
                setCityNotFound(true)
                setLoading(false)
                return;
            }
            setTemp(data.main.temp)
            setCity(data.name)
            setCountry(data.sys.country)
            setLat(data.coord.lat)
            setLog(data.coord.lon)
            setHumidity(data.main.humidity)
            setWind(data.wind.speed)
            const weatheritem=data.weather[0].icon
            setIcon(weathericon[weatheritem] || Cloud)
            setCityNotFound(false)
        }catch(error){
            console.log('pleace check api',error)
            setError("please check your spelling")
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        searchitem()
    },[])

    const handle=(e)=>{
        setSearch(e.target.value)
    }

    const handlechange=(e)=>{
        if (e.key=="Enter"){
            searchitem()
        }
    }
  return (
    <div className='container'>
        <div className="input-container">
            <div className="data">
            <input type="text" placeholder='search' value={search} 
            onChange={handle} onKeyDown={handlechange} />
            <img src={Search} onClick={()=>searchitem()} className='one' alt="" />
            </div>
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            {citynotfound && <div className="citynotfound">city not found</div>}
            {!loading && !citynotfound && <WeatherDetails temp={temp}
            city={city} country={country}
            lat={lat} log={log} wind={wind} humidity={humidity}
            icon={icon} />}
            <p>designed by sankar</p>
        </div>
    </div>
  )
}
