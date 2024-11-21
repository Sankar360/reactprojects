import React, { useEffect, useState } from 'react'
import './Quiz.css';

const datas = [
    {
        qno: 1,
        question: "what is the national animal of indai?",
        options: ["lion", "tiger", "cheeta", "elephant"],
        crtOption: "tiger"
    },
    {
        qno: 2,
        question: "what is the capital of tn?",
        options: ["coiambatore", "trichy", "chennai", "madurai"],
        crtOption: "chennai"
    },
    {
        qno: 3,
        question: "what is the national flower in india?",
        options: ["lotus", "rose", "lily", "jasmine"],
        crtOption: "lotus"
    }
]

export const Quiz = () => {
    const [show, setShow] = useState(false);
    const [curentScore, setCurentScore] = useState(0)
    const [timer, setTimer] = useState(10)
    const [score, setScore] = useState(0);

    const rightanswer = (selectoption) => {
        if (selectoption === datas[curentScore].crtOption) {
            setScore((e) => e + 1)
        }
        if (curentScore < datas.length - 1) {
            setCurentScore((e) => e + 1)
            setTimer(10)
        } else {
            setShow(true)
        }
    }

    const restart = () => {
        setCurentScore(0)
        setTimer(10)
        setScore(0)
        setShow(false)
    }

    useEffect(() => {
        let interval;
        if (timer > 0 && !score) {
            interval = setInterval(() => {
                setTimer((e) => e - 1)
            }, 1000)
        } else {
            clearInterval(interval)
            setShow(true)
        }
        return () => clearInterval(interval)
    }, [timer, setScore])
    return (
        <div className='container'>
            {show ? (<div className="header">
                <h3>Your Score is {score}/{datas.length}</h3>
                <button className='three' onClick={restart}>Restart</button>
            </div>) : (
                <div className="body">
                    <h1>Question {curentScore + 1}</h1>
                    <p className='one'>{datas[curentScore].question}</p>
                    <div className="btn">
                        {datas[curentScore].options.map((option, index) => (
                            <button key={index}
                                onClick={() => rightanswer(option)}>{option}</button>
                        ))}
                    </div>
                    <p className='two'>time:<span>{timer}s</span></p>
                </div>
            )}

        </div>
    )
}
