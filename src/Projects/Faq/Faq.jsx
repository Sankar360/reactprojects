import React, { useState } from 'react'
import './Faq.css';

const datas=[
    {
        id:1,
        question:"what is react?",
        answer:"react is a javascript libray used to create a ui interface"
    },
    {
        id:2,
        question:"what is jsx?",
        answer:"jsx is javascript xml format it is structure and appearence of the react component"
    },
    {
        id:3,
        question:"features of react?",
        answer:"virtual dom,component based architecture,one way data flow,jsx syntax,rich ecosystem javascript library"
    }
]

const Mini=({data})=>{
    const [show,setShow]=useState(false);

    const open=()=>{
        setShow(!show)
    }
    return(
        <>
            <div className={`header ${show?"active": ""}`}>
                <p className='one' onClick={open}>{data.question}</p>
                <p className='two'>{data.answer}</p>
            </div>
        </>
    )
}

export const Faq = () => {
  return (
    <div className='container'>
        <h1>Faq</h1>
        {datas.map((data,index)=>(
            <Mini key={index}
            data={data}/>
        ))}
    </div>
  )
}
